# Mohssine En-naqqach — Portfolio

A modern, responsive portfolio website built with **Next.js 15**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono
- **Icons**: Lucide React

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles, CSS variables, fonts
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page (assembles all sections)
│
├── components/
│   ├── shared/
│   │   ├── Navbar.tsx      # Glassmorphism sticky navbar
│   │   ├── Footer.tsx      # Footer with copyright
│   │   ├── SectionTitle.tsx # Reusable numbered section title
│   │   └── Button.tsx      # Reusable animated button
│   │
│   └── sections/
│       ├── HeroSection.tsx         # Full-screen hero with gradient text
│       ├── AboutSection.tsx        # About + stats grid
│       ├── EducationSection.tsx    # Education/Experience toggle
│       ├── ProjectsSection.tsx     # 3-column project cards grid
│       ├── SkillsSection.tsx       # 6 skill category cards
│       └── ContactSection.tsx      # Contact links + decorative text
│
└── lib/
    └── utils.ts            # cn() utility for Tailwind class merging
```

## Customization

### Personal Info
Update the following files with your real information:
- `src/components/shared/Navbar.tsx` — name
- `src/components/sections/HeroSection.tsx` — name, subtitle
- `src/components/sections/AboutSection.tsx` — bio text, CV link
- `src/components/sections/EducationSection.tsx` — education & experience data
- `src/components/sections/ProjectsSection.tsx` — projects array with GitHub links
- `src/components/sections/SkillsSection.tsx` — skills per category
- `src/components/sections/ContactSection.tsx` — social links, email, phone

### Colors & Fonts
All design tokens are in `src/app/globals.css` under `:root`.

## Features

- ✅ Dark mode (default black background)
- ✅ Glassmorphism navbar with scroll detection
- ✅ Gradient animated text in Hero
- ✅ Framer Motion scroll-triggered animations (fade + slide)
- ✅ Bidirectional scroll animations (fade in on scroll down, fade out on scroll up)
- ✅ Education/Experience tab toggle with animated indicator
- ✅ Project cards with tech tags and GitHub links
- ✅ Skills organized by category with emoji icons
- ✅ Contact section with social cards
- ✅ Responsive for mobile, tablet, desktop
- ✅ Mobile menu with animated overlay
- ✅ Subtle noise texture overlay
- ✅ Custom scrollbar
- ✅ Hover micro-interactions on all interactive elements

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.
