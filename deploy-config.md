# Deploy Configuration Notes

This site includes a vercel.json file under public/ (verify path and contents). Typical deployment options:

- Vercel: connect repo to Vercel, set build command `npm run docs:build` and output directory `.vitepress/dist` (or `dist` depending on VitePress config).
- GitHub Actions: CI builds the site and uploads artifact. For automatic deploy to Vercel, use Vercel's Git integration or the Vercel Action (requires VERCEL_TOKEN secret).

Checklist
- [ ] Confirm vercel.json contents and root directory configuration.
- [ ] Add VERCEL_TOKEN and VERCEL_ORG/PROJECT env secrets if using Vercel Action.
- [ ] Ensure any environment-specific settings are stored in repository secrets.
