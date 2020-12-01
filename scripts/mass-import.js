const fs = require("fs")
const path = require("path")
const { getDataForGithubProject } = require("./github")

const YAML = require("yaml")

const main = async () => {

	const file = fs.readFileSync(path.join(__dirname, "./projects.yml"), "utf8")
	const projectsByService = YAML.parse(file)

	let allData = []

	Object.keys(projectsByService).map(service => {
		const allProjectsForService = projectsByService[service].map(project => getDataForGithubProject(project, service))
		allData = allData.concat(allProjectsForService)
	})

	try {
		const projects = await Promise.all(allData)

		const projectsSortedByStars = projects.sort((a, b) => {
			return b.stars - a.stars
		})

		fs.writeFileSync(
			path.join(__dirname, "../src/data/aws-tools.json"),
			JSON.stringify(projectsSortedByStars, null, 4),
		)
		console.log(`Finished processing ${projects.length} projects`)
	} catch (error) {
		console.log(error)
	}

}

main()
