<script setup>
import { timeline, stack, profile } from '../data.js';
</script>

<template>
  <section class="section">
    <div class="container timeline-grid">
      <div class="timeline-col">
        <p v-if="profile.intro" class="career-intro">{{ profile.intro }}</p>
        <p class="eyebrow">CAREER LOG</p>
        <ol class="timeline-list">
          <li v-for="(t, i) in timeline" :key="i" class="timeline-item" :class="{ inprogress: t.inProgress }">
            <div class="timeline-marker">
              <span class="dot" />
              <span v-if="i < timeline.length - 1" class="line" />
            </div>
            <div class="timeline-body">
              <div class="timeline-period mono">{{ t.period }}</div>
              <div class="timeline-org">{{ t.org }}</div>
              <div v-if="t.position" class="timeline-position mono">{{ t.position }}</div>
              <ul class="timeline-detail">
                <li v-for="d in t.detail" :key="d">{{ d }}</li>
              </ul>
              <p v-if="t.note" class="timeline-note">{{ t.note }}</p>
            </div>
          </li>
        </ol>
      </div>

      <div class="stack-col">
        <p class="eyebrow">STACK</p>
        <div v-for="(items, group) in stack" :key="group" class="stack-group">
          <div class="stack-group-label">{{ group }}</div>
          <div class="stack-chips">
            <span v-for="item in items" :key="item" class="chip">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: clamp(32px, 6vw, 72px);
}

@media (max-width: 720px) {
  .timeline-grid {
    grid-template-columns: 1fr;
  }
}

.career-intro {
  margin-bottom: 24px;
  max-width: 58ch;
  font-size: 18px;
  line-height: 1.6;
  color: var(--ink-soft);
}

.timeline-list {
  list-style: none;
  margin: 24px 0 0;
  padding: 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: 16px 1fr;
  gap: 20px;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--teal);
  margin-top: 6px;
  flex-shrink: 0;
}

.inprogress .dot {
  background: var(--amber);
}

.line {
  width: 1px;
  flex: 1;
  background: var(--hairline-strong);
  margin: 4px 0;
}

.timeline-body {
  padding-bottom: 30px;
}

.timeline-period {
  font-size: 14px;
  color: var(--ink-faint);
}

.timeline-org {
  font-weight: 600;
  font-size: 19px;
  margin-top: 4px;
}

.timeline-position {
  font-size: 13.5px;
  color: var(--ink-faint);
  margin-top: 3px;
}

.timeline-detail {
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  color: var(--ink-soft);
  font-size: 16px;
  line-height: 1.55;
}

.timeline-detail li {
  position: relative;
  padding-left: 16px;
}

.timeline-detail li + li {
  margin-top: 2px;
}

.timeline-detail li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 10px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ink-faint);
}

.timeline-note {
  margin-top: 6px;
  font-size: 14.5px;
  color: var(--ink-faint);
  font-style: italic;
}

.stack-group {
  margin-top: 22px;
}

.stack-group-label {
  font-size: 14px;
  color: var(--ink-faint);
  margin-bottom: 8px;
}

.stack-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
