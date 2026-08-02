<script setup>
import { profile } from '../data.js';
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <div class="footer-name">{{ profile.name }}</div>
        <div class="footer-role mono">{{ profile.role }}</div>
      </div>
      <div class="footer-contacts">
        <a
          v-for="c in profile.contacts"
          :key="c.label"
          :href="c.href"
          :target="c.href?.startsWith('mailto:') ? null : '_blank'"
          :rel="c.href?.startsWith('mailto:') ? null : 'noopener noreferrer'"
          class="footer-contact"
        >{{ c.value }}</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--hairline);
  padding: 36px 0 56px;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 16px;
}
.footer-name {
  font-weight: 600;
}
.footer-role {
  font-size: 14px;
  color: var(--ink-faint);
  margin-top: 2px;
}
.footer-contacts {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  font-size: 15px;
}

.footer-contact {
  color: var(--ink-faint);
}

.footer-contact:hover {
  color: var(--teal);
}
</style>
