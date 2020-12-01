import Head from "next/head"

const TITLE = "awstools – Explore tools for your AWS Services"
const DESCRIPTION = "New MIT open source project to find libraries, tools and resources for your aws services."

const SEO = () => (
	<Head>

		<meta
			charSet="utf-8"
		/>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1"
		/>
		<link
			rel="icon"
			href="https://awstools.dev/static/favicon.ico"
		/>
		<title>
			{TITLE}
		</title>
		<meta
			name="title"
			content={TITLE}
		/>
		<meta
			name="description"
			content={DESCRIPTION}
		/>

		{/* Facebook */}
		<meta
			property="og:type"
			content="website"
		/>
		<meta
			property="og:url"
			content="https://awstools.dev"
		/>
		<meta
			property="og:title"
			content={TITLE}
		/>
		<meta
			property="og:description"
			content={DESCRIPTION}
		/>
		<meta
			property="og:image"
			content="https://awstools.dev/static/social.png"
		/>

		{/* Twitter */}
		<meta
			property="twitter:card"
			content="summary_large_image"
		/>
		<meta
			property="twitter:url"
			content="https://awstools.dev"
		/>
		<meta
			property="twitter:title"
			content={TITLE}
		/>
		<meta
			property="twitter:description"
			content={DESCRIPTION}
		/>
		<meta
			property="twitter:image"
			content="https://awstools.dev/static/social.png"
		/>

		{/* New */}
		<meta
			name="twitter:creator"
			content="@boyney123"
		/>

	</Head>
)

export default SEO
