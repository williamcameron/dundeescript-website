<template>
  <section class="featured-talks">
    <h2>Featured talks</h2>
    <div class="talks-grid">
      <slot />
    </div>
  </section>
</template>

<script setup>
// Minimal component — content injected from markdown frontmatter via layout
</script>

<style>
.featured-talks{ max-width:1100px;margin:2rem auto; }
.talks-grid{ display:grid; grid-template-columns: repeat(auto-fit,minmax(240px,1fr)); gap:1rem; }
.talk-card{ border-radius:12px; overflow:hidden; box-shadow:0 8px 20px rgba(2,6,23,0.06); background:white }
.talk-card img{ width:100%; height:160px; object-fit:cover }
.talk-card .meta{ padding:0.75rem }
</style>
