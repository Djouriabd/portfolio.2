# Portfolio — Djouri | RUBY.AI

Built with Next.js (App Router) + CSS Modules. No UI libraries: every animation is plain CSS,
plus one small `Reveal` component that triggers entrances on scroll.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Editing your content

All text lives in `data/` — you don't need to touch the components.

| What | Where |
| --- | --- |
| Your photo (About me) | put the image in `public/` (e.g. `public/me.jpg`), then set `photo: "/me.jpg"` in `data/profile.ts` |
| Intro text, contacts, Behance link | `data/profile.ts` |
| Journey timeline | `data/journey.ts` |
| Tools + soft skills | `data/skills.ts` (`level` 0–1 controls the radar star tips) |
| Your works | `data/works.ts` |

### Adding a work

1. Put the cover image in `public/works/` (e.g. `public/works/elevate.jpg`, portrait ~ 4:5 looks best).
2. Add an entry to `data/works.ts`:

```ts
{ title: "Elevate", category: "Brand identity", cover: "/works/elevate.jpg", href: "https://behance.net/...", accent: "#06004a" }
```

`accent` is the colour the folder face turns when it opens on hover. The carousel
(arrows, dots, mouse-drag, keyboard arrows, touch swipe) adapts to any number of works.

## Structure

```
app/                  layout, page (composes the sections), global styles
components/sections/  Navbar, Hero, About (+PhotoFrame), Journey, Skills (+SkillRadar, ToolBadge),
                      SoftSkills, Works (+WorksCarousel, WorkCard), Contact (+ContactForm),
                      Footer (+FooterWordmark, BackToTop, LocalClock)
components/ui/        reusable pieces: Marquee, Sparkle, GlowOrbs, Squiggle, SectionTitle, Reveal, ContactList, icons
data/                 all editable content
```

The contact form opens the visitor's email app with the message pre-filled (no backend).
To receive messages directly, replace `onSubmit` in `components/sections/ContactForm.tsx`
with a call to a service such as Formspree or Resend.
