# DundeeScript Meetup Website

Static site for the DundeeScript meetup built with VitePress.

## Quick start

Prerequisites
- Node.js 16+ and npm

Install

npm install

Run development server

npm run docs:dev

Build site

npm run docs:build

Preview built site

npm run docs:preview

## Deployment

This site is suitable for deployment to Vercel (recommended).
- Connect the repository on Vercel and enable automatic deploys from the main branch.

Alternatively, deploy the generated `dist` directory to any static host.

## Project structure
- index.md — Home page
- organisers.md, sponsors.md, activities.md, code-of-conduct.md, js-news.md — Core pages
- news/ — Dated markdown posts for past meetups
- public/ — Images and static assets (also contains vercel.json)
- package.json — dev dependency on VitePress and npm scripts

## Contributing
- Create issues for bugs or feature requests.
- Make changes on a branch and open a pull request.

## Notes
- Consider adding a README that includes deployment details and a link to the Vercel project.
- Accessibility and image optimisation are recommended next steps.

