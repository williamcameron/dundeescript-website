<template>
  <div class="analytics-consent" v-if="!accepted">
    <p>We use analytics to improve the site. By continuing you consent to anonymous tracking.</p>
    <button @click="accept">Accept</button>
    <button @click="reject">Reject</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const accepted = ref(false)
function accept(){
  localStorage.setItem('analytics-consent','yes')
  accepted.value = true
  // Inject plausible script
  const s = document.createElement('script')
  s.setAttribute('defer','')
  s.setAttribute('data-domain','your-domain.com')
  s.src = 'https://plausible.io/js/plausible.js'
  document.head.appendChild(s)
}
function reject(){
  localStorage.setItem('analytics-consent','no')
  accepted.value = true
}
onMounted(()=>{
  const v = localStorage.getItem('analytics-consent')
  if (v==='yes') accept()
  else if (v==='no') accepted.value=true
})
</script>

<style>
.analytics-consent{ position:fixed; right:1rem; bottom:1rem; background:white; padding:1rem; border-radius:8px; box-shadow:0 6px 20px rgba(0,0,0,0.08) }
.analytics-consent button{ margin-left:0.5rem }
</style>
