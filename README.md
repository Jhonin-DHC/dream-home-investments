# Dream Home Investments Website

A modern, responsive website for Dream Home Investments built with Next.js 15.5.4, React 19, TypeScript, and Tailwind CSS featuring a glass morphism design system.

## Tech Stack

- **Next.js** 15.5.4
- **React** 19.1.0
- **TypeScript**
- **Tailwind CSS** v4 with glass morphism components

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
dreamhomeinvestments/
├── public/
│   └── images/
│       ├── hero/
│       ├── before-after/
│       ├── portfolio/
│       └── services/
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

## Image Requirements

Place your images in the following directories:

- **Hero Image**: `/public/images/hero/hero-bg.jpg`
- **Before/After**: `/public/images/before-after/before-1.jpg` and `after-1.jpg`
- **Portfolio**: `/public/images/portfolio/portfolio-1.jpg` through `portfolio-6.jpg`

## Design System

The site uses a glass morphism design system with the following classes:

- `.glass` - Basic glass effect
- `.glass-card` - Card with glass effect and padding
- `.glass-panel` - Smaller glass panel
- `.btn-primary` - Primary button (blue gradient)
- `.btn-secondary` - Secondary button (green gradient)

## Sections

1. **Hero Section** - Full-screen hero with background image and glass card overlay
2. **About Section** - Three-column grid with company information
3. **Portfolio Section** - Before/after comparison and portfolio grid
4. **Testimonials Section** - Client testimonials with trust indicators
5. **Services Section** - Grid of service offerings
6. **Contact Section** - Contact form and company information

## Customization

Update the following files to customize content:

- `src/app/page.tsx` - Main page content and sections
- `src/app/layout.tsx` - Metadata and site title
- `src/app/globals.css` - Design system and styling

