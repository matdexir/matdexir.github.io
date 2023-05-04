# This my personal portfolio/blog website
[![Deploy to Github Pages with Astro](https://github.com/matdexir/matdexir.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/matdexir/matdexir.github.io/actions/workflows/deploy.yml)
> Big thanks to [@craftzdog](https://github.com/craftzdog) for his youtube video which served as an inspiration for this

# Made with
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## 🚀 Project Structure

```
.
├── astro.config.mjs
├── color_palette.png
├── images
│   ├── code.png
│   └── code.webp
├── LICENSE
├── package.json
├── public
│   ├── favicon.svg
│   ├── images
│   │   ├── code.png
│   │   └── code.webp
│   └── robots.txt
├── README.md
├── remark-reading-time.mjs
├── src
│   ├── components
│   │   ├── Banner.astro
│   │   ├── BaseHeader.astro
│   │   ├── Card.astro
│   │   ├── Content.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HeaderLink.astro
│   │   ├── IconLinks.tsx
│   │   ├── PostCard.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── ToggleThemeMenu.tsx
│   ├── env.d.ts
│   ├── layouts
│   │   ├── BlogLayout.astro
│   │   ├── CategoryLayout.astro
│   │   └── Layout.astro
│   ├── pages
│   │   ├── 404.astro
│   │   ├── about_author
│   │   │   ├── haitian-flag.png
│   │   │   ├── intro.md
│   │   │   └── temp.css
│   │   ├── index.astro
│   │   ├── posts
│   │   │   ├── [post].astro
│   │   │   └── r
│   │   │       ├── cscope-with-neovim.md
│   │   │       ├── learning-rust.md
│   │   │       └── post-1.md
│   │   ├── posts.astro
│   │   └── tags
│   │       └── [id].astro
│   ├── styles
│   │   ├── globals.css
│   │   └── transition.css
│   └── typewriter.d.ts
├── tailwind.config.cjs
├── tree.txt
├── tsconfig.json
└── yarn.lock
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |


# Can I copy it?

Just fork it.
