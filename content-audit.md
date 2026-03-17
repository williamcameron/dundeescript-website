# Content & Accessibility Audit - DundeeScript Website

Summary
- Core pages: index.md, organisers.md, sponsors.md, activities.md, code-of-conduct.md, js-news.md
- News posts in /news
- Images are stored under public/images and referenced via HTML <img> tags in some pages.

Immediate recommendations
- Run automated accessibility checks (axe-core / Lighthouse) and fix issues.
- Ensure all <img> tags have descriptive alt attributes (most appear present; verify for all images).
- Add meta description and Open Graph tags on pages (site-level head configuration in VitePress).
- Add skip-to-content link and ensure heading hierarchy is semantic.

Suggested checks
- Use:
  - lighthouse (Chrome)
  - axe CLI: https://github.com/dequelabs/axe-core-cli
  - a11y linters for markdown

Next steps
- Run a Lighthouse audit on the built site and open issues for high-severity items.
- Implement meta tags and enhance social previews.
