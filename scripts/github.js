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
		tags: [...topics, service],
		latestCommit,
		service,
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

const getLatestCommit = async (url) => {
	try {
		const { data } = await axios({
			method: "GET",
			url: urljoin(url, "/branches/master"),
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

const getDataForGithubProject = async (githubUrl, service) => {

  const urlsParts = githubUrl.split("github.com");

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

	const topics = await getTopicsForRepo(url);
	const latestCommit = await getLatestCommit(url);

	const mappedData = mapGitHubDataToProjectAPI({
		...data,
		topics,
		latestCommit,
		service,
	});

	return mappedData;


};


module.exports = {
  getDataForGithubProject
}