---
layout: home

hero:
  name: "DundeeScript Meetup"
  image: ./images/dundeescript-logo.png
  tagline: We are a community of developers focused on JavaScript and TypeScript in the Dundee area. We meet every month to talk about JS/TS best practices, features coming to ECMAScript, application development, what's going on in the JS community, and more.
  next_meetup: "2026-04-15"
  actions:
    - theme: brand
      text: RSVP on Eventbrite
      link: https://www.eventbrite.co.uk/e/dundeescript-meetup-tickets-1038765113417
    - theme: alt
      text: Submit a Talk
      link: https://forms.gle/vTYNzgCEXggSroNz9

skip_to_content: true

features:
  - title: Monthly Meetup
    details: Checkout our <a target="_blank" rel="noopener noreferrer" href="https://www.eventbrite.co.uk/e/dundeescript-meetup-tickets-1038765113417">Eventbrite</a> page to RSVP for the next meetup.
  - title: Sponsors
    details: We are always looking for sponsors to help us cover costs. If you are interested in sponsoring, please contact us. We are grateful to all our <a target="_blank" rel="noopener noreferrer" href="/sponsors">Sponsors</a>.
  - title: Submit a Talk
    details: Interested in speaking at our meetup? Submit a talk <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/vTYNzgCEXggSroNz9">here</a>! Talks of all types and skill levels are welcome.

featured_talks:
  - title: "TypeScript in Production"
    speaker: "Jane Doe"
    date: "2025-08"
    link: "/news/2025-08.md"
    thumbnail: "/images/news/2025-08.png"
  - title: "Modern React Patterns"
    speaker: "John Smith"
    date: "2025-01"
    link: "/news/2025-01.md"
    thumbnail: "/images/news/2025-01.png"
---

<!-- featured talks component -->
<FeaturedTalks>
  <div class="talk-card">
    <a href="/news/2025-08.md"><img src="/images/news/2025-08.png" alt="TypeScript in Production"/></a>
    <div class="meta"><strong>TypeScript in Production</strong><div>Jane Doe — Aug 2025</div></div>
  </div>
  <div class="talk-card">
    <a href="/news/2025-01.md"><img src="/images/news/2025-01.png" alt="Modern React Patterns"/></a>
    <div class="meta"><strong>Modern React Patterns</strong><div>John Smith — Jan 2025</div></div>
  </div>
</FeaturedTalks>
