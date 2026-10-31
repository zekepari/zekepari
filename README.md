# Personal website

This repository serves https://zekepari.dev. It belongs to Ezekiel Pari in a personal capacity.

The site exports static files from Next.js. Cloudflare Workers Static Assets serves the pages, images, and videos without a server script. Keep the personal Cloudflare account on Workers Free. Do not enable paid Workers services for this project.

## Development and deployment

```sh
bun install --frozen-lockfile
bun run dev
bun run typecheck
bun run lint
bun run deploy
```

Wrangler must authenticate to the personal account, pariezekiel@gmail.com. The account ID is fixed in wrangler.jsonc. On this Mac, the personal login is separate from the business login:

```sh
XDG_CONFIG_HOME=/Users/zekepari/.config/cloudflare-personal bun run deploy
```

Worker routes cover zekepari.dev and www.zekepari.dev. Their DNS records must remain proxied. The apex uses the placeholder address 192.0.2.1. The www CNAME points to zekepari.dev. The Worker serves the exported files without an origin server.

The former Vercel records were an unproxied apex A record at 76.76.21.21 and an unproxied www CNAME at cname.vercel-dns.com. Restore those and remove the Worker routes only if a rollback is needed and the former deployment still works.
