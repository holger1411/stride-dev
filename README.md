<!-- templatedeck-backlink -->
> 🎨 **STRIDE** is part of the [TemplateDeck](https://templatedeck.com) collection — handcrafted HTML and Astro templates for developers and designers.
>
> 📥 **[Download free on TemplateDeck](https://templatedeck.com/templates/stride)** · 🌐 **[Browse all templates](https://templatedeck.com)**

---

# Stride - A Free Bootstrap 5 Website Template

**Live Demo**: [stride-html-template.netlify.app](https://stride-html-template.netlify.app/)

## What is Stride?

Stride is a free, open-source static HTML website template built with [Bootstrap 5.3](https://getbootstrap.com/) and [Eleventy 3](https://www.11ty.dev/).

## For Beginners

If you're familiar with basic HTML but not advanced web development, you can still use Stride. Simply use the `/public` folder from this repository. Edit the content, add your images, and upload it to your web server. Done!

## For Developers

Stride is built on:

- **Bootstrap 5.3** - CSS framework
- **Eleventy 3** - Static site generator
- **Nunjucks** - Template language (Eleventy also supports Liquid, Handlebars, Pug, and more)
- **Gulp** - Task runner for SCSS compilation and optimization
- **AOS** - Animate On Scroll library

Eleventy allows you to use various data sources: static content, computed data, APIs, frontmatter, markdown files, and more.

## Requirements

- **Node.js 18+** (required for Eleventy 3)

Check your Node version:

```bash
node --version
```

## Installation

1. Clone or download this repository
2. Open your terminal and navigate to the project folder
3. Run:

```bash
npm install
```

## Development

### Quick Preview

Start the Eleventy dev server:

```bash
npm run serve
```

This starts a local server at `http://localhost:8080/` with live reload.

### Full Development Mode

For full development with SCSS compilation and BrowserSync:

```bash
npm run watch
```

This will:
- Build the site to `/dev`
- Compile SCSS to CSS
- Start BrowserSync
- Auto-rebuild on file changes

### Development Build

Build without minification (faster, readable output):

```bash
npm run build-dev
```

Output is stored in the `/dev` folder.

## Production Build

Build optimized site for deployment:

```bash
npm run build
```

This will:
- Compile and minify CSS
- Purge unused CSS
- Minify HTML
- Convert images to WebP

Output is stored in the `/public` folder - deploy this to your web server.

## Project Structure

```
stride/
├── src/                    # Source files
│   ├── _data/              # Global data files
│   ├── _includes/          # Layouts, snippets, components
│   │   ├── layouts/        # Page layouts
│   │   ├── snippets/       # Reusable partials
│   │   └── code/           # UI components
│   ├── scss/               # SCSS stylesheets
│   ├── js/                 # JavaScript files
│   ├── img/                # Images
│   └── fonts/              # Web fonts
├── dev/                    # Development build output
├── public/                 # Production build output
├── eleventy.config.js      # Eleventy configuration
├── gulpfile.js             # Gulp tasks
└── package.json            # Dependencies and scripts
```

## License

MIT
