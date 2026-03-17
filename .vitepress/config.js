export default {
  title: 'DundeeScript Meetup',
  description: 'Dundee JavaScript and TypeScript community - monthly meetups',
  head: [
    // Analytics loader kept minimal; actual script injected after consent via component
    ['script', { innerHTML: "(function(){try{var c=localStorage.getItem('analytics-consent'); if(c==='yes'){var s=document.createElement('script'); s.defer=true; s.dataset.domain='your-domain.com'; s.src='https://plausible.io/js/plausible.js'; document.head.appendChild(s);} }catch(e){} })();" }],
    ['meta', { name: 'description', content: 'DundeeScript Meetup: monthly JavaScript and TypeScript talks in Dundee. Join us for talks, networking, and community.' }],
    ['link', { rel: 'icon', href: '/images/dundeescript-logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Merriweather:wght@400;700&display=swap' }]
  ],
  // Use transformHead to generate per-page meta tags from frontmatter (title, description, image)
  transformHead(ctx) {
    const head = ctx.head || [];
    const frontmatter = ctx.frontmatter || {};
    const title = frontmatter.title || ctx.title || 'DundeeScript Meetup';
    const description = frontmatter.description || frontmatter.excerpt || 'Monthly JavaScript & TypeScript meetups in Dundee. RSVP for the next event.';
    const image = (frontmatter.image && (frontmatter.image.startsWith('/') ? frontmatter.image : '/' + frontmatter.image)) || '/images/og-default.svg';

    // set title tag
    head.unshift(['title', {}, title + ' | DundeeScript Meetup']);

    // meta helper
    function setMeta(key, value, prop = false){
      if(!value) return;
      if(prop) head.push(['meta', { property: key, content: value }]);
      else head.push(['meta', { name: key, content: value }]);
    }

    setMeta('description', description);
    if(image) head.push(['meta', { property: 'og:image', content: image }]);
    head.push(['meta', { property: 'og:title', content: title }]);
    head.push(['meta', { property: 'og:description', content: description }]);
    head.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }]);
    head.push(['meta', { name: 'twitter:title', content: title }]);
    head.push(['meta', { name: 'twitter:description', content: description }]);
    if(image) head.push(['meta', { name: 'twitter:image', content: image }]);

    return head;
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Organisers', link: '/organisers' },
      { text: 'News', link: '/news/' },
      { text: 'Sponsors', link: '/sponsors' },
      { text: 'Activities', link: '/activities' },
      { text: 'Code of Conduct', link: '/code-of-conduct' }
    ],
    sidebar: {
      '/news/': [
        {
          text: 'News archive',
          items: [
            { text: '2025-08', link: '/news/2025-08' },
            { text: '2025-01', link: '/news/2025-01' },
            { text: '2024-12', link: '/news/2024-12' },
            { text: '2024-11', link: '/news/2024-11' }
          ]
        }
      ]
    }
  }
}

