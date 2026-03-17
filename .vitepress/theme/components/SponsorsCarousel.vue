<template>
  <section class="sponsors-carousel">
    <h2>Our Sponsors</h2>
    <div class="carousel" ref="carousel">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const carousel = ref(null)
onMounted(() => {
  const el = carousel.value
  if (!el) return
  // Simple auto-scroll
  let pos = 0
  setInterval(() => {
    pos = (pos + 1) % el.children.length
    el.scrollTo({ left: el.children[pos].offsetLeft, behavior: 'smooth' })
  }, 3500)
})
</script>

<style>
.sponsors-carousel{ max-width:1100px;margin:2rem auto }
.carousel{ display:flex; gap:1rem; overflow-x:auto; scroll-snap-type:x mandatory; padding-bottom:0.5rem }
.carousel > *{ min-width:200px; flex:0 0 auto; scroll-snap-align:center }
</style>
