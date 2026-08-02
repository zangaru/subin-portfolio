<script setup>
import { profile } from '../data.js';
</script>

<template>
  <header class="hero">
    <div class="container hero-inner">
      <p class="eyebrow">PORTFOLIO / {{ profile.role.toUpperCase() }}</p>
      <h1 class="hero-name">{{ profile.name }}</h1>
      <p class="hero-thesis">{{ profile.thesis }}</p>

      <div class="hero-stats">
        <div v-for="s in profile.stats" :key="s.label" class="stat">
          <div class="stat-value">
            <span class="mono">{{ s.value }}</span><span class="stat-unit mono">{{ s.unit }}</span>
          </div>
          <div class="stat-label">{{ s.label }}</div>
        </div>
      </div>

      <div class="hero-contacts">
        <span v-for="c in profile.contacts" :key="c.label" class="contact-item">
          <span class="contact-label mono">{{ c.label }}</span>
          <a
            v-if="c.href"
            :href="c.href"
            :target="c.href.startsWith('mailto:') ? null : '_blank'"
            :rel="c.href.startsWith('mailto:') ? null : 'noopener noreferrer'"
            class="contact-value contact-link"
          >{{ c.value }}</a>
          <span v-else class="contact-value">{{ c.value }}</span>
        </span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  padding: clamp(64px, 12vw, 120px) 0 clamp(48px, 8vw, 72px);
  background:
    linear-gradient(180deg, rgba(15,110,98,0.04), transparent 60%),
    var(--paper);
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--hairline) 1px, transparent 1px),
    linear-gradient(90deg, var(--hairline) 1px, transparent 1px);
  background-size: 48px 48px;
  opacity: 0.35;
  mask-image: linear-gradient(180deg, black, transparent 85%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
}

.hero-name {
  font-size: clamp(45px, 7vw, 71.5px);
  font-weight: 700;
  margin-top: 14px;
  letter-spacing: -0.02em;
}

.hero-thesis {
  margin-top: 18px;
  max-width: 46ch;
  font-size: clamp(19px, 2vw, 21.5px);
  line-height: 1.6;
  color: var(--ink-soft);
}

.hero-stats {
  display: flex;
  gap: clamp(24px, 5vw, 48px);
  margin-top: 44px;
  flex-wrap: wrap;
}

.stat-value {
  font-size: 33.5px;
  font-weight: 600;
  color: var(--teal);
  line-height: 1;
}

.stat-unit {
  font-size: 17px;
  margin-left: 2px;
  font-weight: 500;
}

.stat-label {
  margin-top: 8px;
  font-size: 14.5px;
  color: var(--ink-faint);
  max-width: 14ch;
  line-height: 1.4;
}

.hero-contacts {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
  padding-top: 24px;
  border-top: 1px solid var(--hairline);
}

.contact-item {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  font-size: 15.5px;
}

.contact-label {
  color: var(--ink-faint);
  font-size: 13.5px;
}

.contact-value {
  color: var(--ink);
}

.contact-link:hover {
  color: var(--teal);
}
</style>
