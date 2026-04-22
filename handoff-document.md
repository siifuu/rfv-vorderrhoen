## Handoff Document — Equestrian Vaulting Club Website

---

# 1. Project Overview

**Objective:**
Build a high-quality, static marketing website for an **equestrian vaulting club** that is:

* visually polished
* performant
* easy to maintain via Markdown
* deployable to GitHub Pages
* conversion-focused (trial/application)

**Key constraint:**
No backend. All forms link to **Google Forms**.

---

# 2. Tech Stack (Required)

## Core

* Astro
* TypeScript
* Tailwind CSS

## Interactivity

* React (Astro islands only)
* Framer Motion

## Content

* Astro Content Collections
* Markdown (primary content format)

## Deployment

* GitHub Pages
* GitHub Actions (CI/CD)

---

# 3. Non-Goals

Do **not** implement:

* server-side rendering (SSR)
* API routes / backend logic
* authentication
* CMS (initial version)
* form handling (use Google Forms instead)

---

# 4. Architecture

## Rendering model

* Static-first
* Astro for layout/pages
* React only for interactive components (islands)

## Content model

* Markdown for all editorial content
* Structured via content collections

## Deployment model

* Build → static output → GitHub Pages

---

# 5. Pages (Required)

## Core pages

| Page                 | Purpose                    |
| -------------------- | -------------------------- |
| Home                 | Landing + conversion       |
| About Vaulting       | Explain sport              |
| About Club           | Trust + identity           |
| Training             | Structure + expectations   |
| Pricing              | Offer clarity + conversion |
| FAQ                  | Answer concerns            |
| News (list + detail) | Updates                    |
| Contact              | Info + CTA                 |
| Apply                | Link to Google Form        |
| Legal                | Compliance                 |
| Privacy              | Compliance                 |

---

# 6. Navigation

## Header

* Home
* About
* Training
* Pricing
* FAQ
* News
* Contact
* CTA button: **Apply / Book Trial**

## Footer

* short club description
* navigation links
* contact info
* legal links

---

# 7. Content Collections

## pages

```ts
title: string
description: string
slug: string
navLabel?: string
order?: number
draft?: boolean
seoTitle?: string
seoDescription?: string
```

## news

```ts
title: string
description: string
date: date
draft?: boolean
featured?: boolean
seoTitle?: string
seoDescription?: string
```

## (optional) pricing

```ts
name: string
priceLabel: string
description: string
features: string[]
highlighted?: boolean
order?: number
ctaLabel?: string
ctaUrl?: string
```

---

# 8. Component Requirements

## Layout

* Header (responsive, sticky)
* Footer
* Page container / section wrapper

## UI

* Buttons (primary / secondary)
* Cards (generic + pricing)
* Grid layouts
* Typography system

## Content

* Markdown renderer
* News card + list
* Image/media section

## Interactive (React islands)

* HeroMotion
* PricingCards
* FaqAccordion
* SectionReveal
* MobileNav (if needed)

---

# 9. Home Page — Requirements

## Sections (required)

1. **Hero**

   * headline
   * subtext
   * primary CTA (Google Form)
   * secondary CTA
   * animated reveal

2. **Intro**

   * what vaulting is
   * 3 benefit cards

3. **Why choose us**

   * trust-focused content

4. **Training overview**

   * group explanation

5. **Pricing teaser**

   * link to pricing page

6. **Visual section**

   * imagery / atmosphere

7. **CTA section**

   * strong conversion block

## Acceptance criteria

* Hero loads quickly
* Animation is smooth and not blocking
* CTA visible above the fold
* Mobile layout clean and readable

---

# 10. Pricing Page — Requirements

## Structure

1. Header intro
2. Pricing cards (2–4)
3. Optional FAQ
4. Final CTA

## Pricing cards must include

* name
* price/label
* description
* feature list
* CTA
* optional highlight state

## Interaction

* hover animation
* responsive stacking
* clear visual hierarchy

## Acceptance criteria

* pricing readable within 5 seconds
* CTA clearly visible
* no layout shift
* works cleanly on mobile

---

# 11. Animation Guidelines

## Use

* fade + translate
* staggered reveals
* hover effects
* subtle motion

## Avoid

* excessive animation
* scroll hijacking
* long intro animations

## Technical

* Framer Motion for complex animation
* CSS transitions for simple states
* respect `prefers-reduced-motion`

---

# 12. Styling Requirements

## Must include

* consistent spacing system
* max-width container
* typography scale
* color system

## Visual direction

* elegant
* athletic
* minimal
* nature-inspired

## Avoid

* clutter
* inconsistent spacing
* overly flashy effects

---

# 13. Accessibility (Required)

* semantic HTML
* keyboard navigation
* visible focus states
* sufficient color contrast
* alt text for images
* accessible accordion behavior
* reduced motion support

---

# 14. SEO (Required)

* per-page meta title + description
* Open Graph tags
* clean URLs
* proper heading hierarchy
* alt text
* sitemap (optional but preferred)

---

# 15. Performance Requirements

* minimal JS
* only hydrate islands
* optimized images
* lazy load media
* fast initial render

---

# 16. Forms

## Approach

* no backend forms
* all CTAs link to **Google Forms**

## Locations

* header CTA
* pricing page CTA
* contact/apply page

---

# 17. GitHub Pages Requirements

## Must support

* static build output
* optional subpath deployment

## Astro config must allow:

```js
site: 'https://<username>.github.io'
base: '/<repo-name>'
```

## Do not use

* SSR adapters
* server features
* environment-dependent runtime logic

---

# 18. CI/CD Requirements

## Workflow must:

* trigger on push to main
* install dependencies
* build project
* deploy `/dist` to GitHub Pages

## Acceptance criteria

* deployment works without manual steps
* site updates on push
* no broken assets

---

# 19. File Structure (Required)

```text
src/
  components/
  content/
    pages/
    news/
  layouts/
  pages/
  styles/
  lib/
```

---

# 20. Acceptance Criteria (Global)

## Functional

* all pages accessible
* navigation works
* Markdown content renders correctly
* Google Form links functional

## Visual

* homepage looks polished
* pricing page is visually strong
* consistent styling across pages

## Performance

* fast load time
* no excessive JS
* smooth animations

## Accessibility

* keyboard usable
* readable contrast
* no major violations

## Deployment

* builds successfully via GitHub Actions
* deploys to GitHub Pages correctly

---

# 21. Deliverables

* complete Astro project
* configured Tailwind
* React + Framer Motion integration
* content collections
* all required pages
* reusable components
* GitHub Actions workflow
* working GitHub Pages deployment

---

# 22. Optional Enhancements (Not Required)

* testimonials
* image gallery
* page transitions
* multilingual support
* CMS integration later

---

# 23. Final Instruction

Prioritize:

1. clarity
2. performance
3. maintainability
4. strong visual polish (especially home + pricing)

Avoid overengineering. Keep the implementation simple, structured, and static-first.
