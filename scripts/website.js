const scrape = require("scrape-metadata")

const mapToProjectData = data => {
	const {
		title,
		description,
		service,
		images,
		author,
		project,
		ogSiteName,
		additionalTags,
		type,
	} = data
	const cardTitle = author || ogSiteName || title
	return {
		project: cardTitle,
		fullName: title,
		description,
		owner: {
			name: project,
			avatar: images[0],
		},
		urls: {
			homepage: project,
		},
		type,
		tags: [service, cardTitle, ...additionalTags],
		service,
	}
}

const getDataForWebsite = ({ project, service, tags, type }) => {

	return new Promise((resolve, reject) => {
		scrape(project, (err, meta) => {
			if (err) {
				return reject(err)
			}
			resolve(mapToProjectData({ ...meta, project, service, additionalTags: tags, type }))
		})
	})

}

module.exports = {
	getDataForWebsite,
}
