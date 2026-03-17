<template>
  <div>
    <a class="skip-link" href="#main">Skip to content</a>
    <slot />
    <AnalyticsConsent />
  </div>
</template>

<script setup>
import AnalyticsConsent from '../components/AnalyticsConsent.vue'
</script>

<style>
.skip-link{ position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden }
.skip-link:focus{ left:1rem; top:1rem; width:auto; height:auto; background:#fff; padding:0.5rem 0.75rem; border-radius:6px; box-shadow:0 6px 20px rgba(0,0,0,0.08) }
</style>
