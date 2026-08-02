<script setup>
import { collaboration } from '../data.js';
</script>

<template>
  <section class="section">
    <div class="container">
      <p class="eyebrow">COLLABORATION</p>
      <h2 class="collab-title">{{ collaboration.title }}</h2>
      <div class="collab-body">
        <p><span class="body-label mono">문제</span>{{ collaboration.problem }}</p>
        <p><span class="body-label mono">해결</span>{{ collaboration.action }}</p>
        <p><span class="body-label mono">결과</span>{{ collaboration.result }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.collab-title {
  margin-top: 12px;
  font-size: clamp(24.5px, 4vw, 29px);
}

.collab-body {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 70ch;
}

.collab-body p {
  font-size: 17px;
  line-height: 1.7;
  color: var(--ink-soft);
}

.body-label {
  font-size: 13px;
  color: var(--ink-faint);
  border: 1px solid var(--hairline-strong);
  border-radius: 4px;
  padding: 1px 6px;
  margin-right: 9px;
  vertical-align: 2px;
}
</style>
