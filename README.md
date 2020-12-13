# awstools.dev 
## Explore Resources for your AWS Services
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

New MIT open source project to find libraries, tools and resources for your aws services.

<br>
<div align="center">
	<img src="https://awstools.dev/static/social.png" width="600">
</div>
<br>


<div align="center">
	<a href="awstools.dev">awstools.dev created by </a>
	<a href="https://twitter.com/boyney123">@boyney123</a>
</div>

## Purpose

To help people search for relevant and up to date tools for the AWS services they are using.

The resources are filtered out if they are old and unmaintained.

## Features

✨ Search for resouces by service<br>
✨ Add new resources with a url in the .yml file<br>
✨ Explore and find up to date and relevant projects<br>
✨ Dark mode 😎<br>
✨ Preferences sync to localStorage<br>


## Adding a resource 

This project currently supports two types of resources

- code
- website

If you want to add a code resource just use the github url of the repo you would like to add.

If you want to add a website just add the url of the website to the file.

Adding a resource is super easy just open `scripts/projects.yml` and add your resource under the relevant service.

Example

```
cloudformation:
  urls:
  	- https://github.com/aws/aws-cdk
		- https://github.com/awslabs/cfn-python-lint
		- https://github.com/awslabs/cfncluster-cookbook
		- https://github.com/awslabs/cfncluster
		- https://github.com/Appliscale/perun
		- https://github.com/bazaarvoice/cloudformation-ruby-dsl
		- https://github.com/Sceptre/sceptre
		- https://github.com/cloudtools/troposphere
		- https://github.com/peterkh/cumulus
		- https://github.com/envato/stack_master
		- https://github.com/sparkleformation/sfn
		- https://github.com/sparkleformation/sparkle_formation
		- https://github.com/stelligent/cfn_nag
		- https://my-website.com
```

This shows the resources for `cloudformation`, if you wanted to add a resource just add another link and make a pull request. 

I will review and update.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://kohidave.dev"><img src="https://avatars3.githubusercontent.com/u/828419?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Killmon</b></sub></a><br /><a href="https://github.com/boyney123/awstools/commits?author=kohidave" title="Documentation">📖</a></td>
    <td align="center"><a href="https://medium.com/@boyney123"><img src="https://avatars1.githubusercontent.com/u/3268013?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Boyne</b></sub></a><br /><a href="https://github.com/boyney123/awstools/commits?author=boyney123" title="Code">💻</a></td>
    <td align="center"><a href="https://www.udondan.com/"><img src="https://avatars3.githubusercontent.com/u/6443408?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Schroeder</b></sub></a><br /><a href="https://github.com/boyney123/awstools/commits?author=udondan" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Contributing Guide

Contributions are welcome! I’m actively maintaining this website.

[awstools.dev](https://awstools.dev) is built on top of [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), GA for analytics. If you plan on contributing, the only thing you need to know is before you can build the development server, you need to run `yarn tailwind-dev` to build the Tailwind configuration file. `yarn tailwind-build` is the command for building the Tailwind configuration file for production (you probably don’t need to use this one).

That’s pretty much it. I’m using a [custom ESLint configuration file](https://github.com/zaydek/dot-eslintrc.js) for formatting, but you can ignore this yourself when contributing.

Thank you for contributing!

## License

Open source software licensed as MIT.

<br>

# Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

