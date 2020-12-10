const axios = require("axios");
const urljoin = require("url-join");

const mapGitHubDataToProjectAPI = (data) => {
	const {
		name: project,
		full_name: fullName,
		owner: { avatar_url: avatar, login },
		description,
		homepage,
		stargazers_count,
		html_url,
		topics = [],
		language,
		latestCommit,
		service,
		additionalTags,
		type
	} = data;
	return {
		project,
		fullName,
		description,
		stars: stargazers_count,
		language,
		owner: {
			name: login,
			avatar,
		},
		urls: {
			homepage,
			github: html_url,
		},
		tags: [...topics, service, ...additionalTags],
		latestCommit,
		service,
		type
	};
};

const getTopicsForRepo = async (url) => {
	try {
		const { data } = await axios({
			method: "GET",
			url: urljoin(url, "/topics"),
			headers: {
				"user-agent": "github-actions-things",
				Accept: "application/vnd.github.mercy-preview+json",
				Authorization: `token ${process.env.GITHUB_TOKEN}`,
			},
			json: true,
		});
		const { names = [] } = data || {};
		return names;
	} catch (error) {
		return Promise.resolve([]);
	}
};

const getLatestCommit = async (url, default_branch) => {
	try {
		const { data } = await axios({
			method: "GET",
			url: urljoin(url, `/branches/${default_branch}`),
			headers: {
				"user-agent": "github-actions-things",
				Accept: "application/vnd.github.mercy-preview+json",
				Authorization: `token ${process.env.GITHUB_TOKEN}`,
			},
			json: true,
		});

		return data.commit.commit.author.date;
	} catch (error) {
		console.log("error", error);
		return Promise.resolve(null);
	}
};

const getDataForGithubProject = async ({project, service, tags, type}) => {

  const urlsParts = project.split("github.com");

	const url = `https://api.github.com/repos${urlsParts[1]}`;

	const { data } = await axios({
		method: "GET",
		url,
		headers: {
			"user-agent": "github-actions-things",
			Authorization: `token ${process.env.GITHUB_TOKEN}`,
		},
		json: true,
	});


	const { default_branch } = data;


	const topics = await getTopicsForRepo(url);
	const latestCommit = await getLatestCommit(url, default_branch);

	const mappedData = mapGitHubDataToProjectAPI({
		...data,
		topics,
		latestCommit,
		service,
		type,
		additionalTags: tags
	});

	return mappedData;


};


module.exports = {
  getDataForGithubProject
}