<script setup>
import { sideProjects } from '../data.js';

const props = defineProps({ expandedStates: Array });
const emit = defineEmits(['toggle']);
</script>

<template>
  <template v-for="(p, i) in sideProjects" :key="p.title">
    <section v-if="!p.placeholder" class="section side-project">
      <div class="container">
        <button
          type="button"
          class="project-head"
          :aria-expanded="expandedStates[i]"
          :aria-controls="`side-body-${i}`"
          @click="emit('toggle', i)"
        >
          <span class="chip id-chip mono">SIDE</span>
          <div class="project-head-text">
            <h2 class="project-name">{{ p.title }}</h2>
            <p v-if="p.tag" class="project-domain">{{ p.tag }}</p>
          </div>
          <span class="toggle-arrow mono" :class="{ open: expandedStates[i] }" aria-hidden="true">{{ expandedStates[i] ? '▴' : '▾' }}</span>
        </button>

        <div v-show="expandedStates[i]" :id="`side-body-${i}`" class="project-body">
          <div class="project-meta">
            <div class="meta-item">
              <span class="meta-label">기간</span>
              <span class="mono">{{ p.period }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">팀 구성</span>
              <span>{{ p.team }}</span>
            </div>
            <div class="meta-item stack-item">
              <span class="meta-label">스택</span>
              <span class="stack-inline">
                <span v-for="s in p.stack" :key="s" class="chip">{{ s }}</span>
              </span>
            </div>
            <div v-if="p.links?.demo" class="meta-item">
              <span class="meta-label">데모</span>
              <a
                :href="p.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="mono demo-url"
              >{{ p.links.demo.replace(/^https?:\/\//, '') }} ↗</a>
            </div>
          </div>
          <p v-if="p.demoNote" class="demo-note">{{ p.demoNote }}</p>

          <div class="side-links">
            <a
              v-if="p.links?.backend"
              :href="p.links.backend"
              target="_blank"
              rel="noopener noreferrer"
              class="link-btn mono"
            >GitHub · Backend ↗</a>
            <a
              v-if="p.links?.frontend"
              :href="p.links.frontend"
              target="_blank"
              rel="noopener noreferrer"
              class="link-btn mono"
            >GitHub · Frontend ↗</a>
          </div>

          <div class="story-list">
            <div class="trail">
              <div class="trail-step">
                <span class="trail-dot neutral" />
                <span class="trail-label">계기</span>
              </div>
              <span class="trail-line" />
              <div class="trail-step">
                <span class="trail-dot neutral" />
                <span class="trail-label">과정</span>
              </div>
              <span class="trail-line" />
              <div class="trail-step">
                <span class="trail-dot after" />
                <span class="trail-label">결과</span>
              </div>
              <span class="trail-line" />
              <div class="trail-step">
                <span class="trail-dot learning" />
                <span class="trail-label">배운 점</span>
              </div>
            </div>

            <div class="story-body">
              <p><span class="body-label">계기</span>{{ p.motivation }}</p>
              <p><span class="body-label">과정</span>{{ p.process }}</p>
              <p><span class="body-label">결과</span>{{ p.result }}</p>
              <p><span class="body-label">배운 점</span>{{ p.learning }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
</template>

<style scoped>
.project-head {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
}

.project-head:hover .project-name {
  color: var(--amber);
}

.id-chip {
  margin-top: 6px;
  color: var(--amber);
  border-color: var(--amber);
  background: var(--amber-soft);
}

.project-head-text {
  flex: 1;
  min-width: 0;
}

.project-name {
  font-size: clamp(27px, 4vw, 33.5px);
}

.project-domain {
  margin-top: 6px;
  color: var(--ink-faint);
  font-size: 15.5px;
}

.toggle-arrow {
  flex-shrink: 0;
  margin-top: 6px;
  font-size: 40px;
  line-height: 1;
  color: #000;
}

.project-body {
  overflow: hidden;
}

.project-meta {
  display: flex;
  gap: clamp(20px, 5vw, 40px);
  flex-wrap: wrap;
  margin-top: 28px;
  padding: 16px 20px;
  background: var(--paper-raised);
  border: 1px solid var(--hairline);
  border-radius: 10px;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 15.5px;
}

.meta-label {
  font-size: 13px;
  font-family: var(--font-mono);
  color: var(--ink-faint);
}

.stack-item {
  flex: 1;
  min-width: 200px;
}

.stack-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.side-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.link-btn {
  font-size: 14px;
  padding: 6px 12px;
  border: 1px solid var(--hairline-strong);
  border-radius: 6px;
  background: var(--paper-raised);
  color: var(--ink-soft);
}

.link-btn:hover {
  border-color: var(--teal);
  color: var(--teal);
  text-decoration: none;
}

.demo-url {
  color: var(--teal);
  font-weight: 600;
  font-size: 15.5px;
}

.demo-url:hover {
  text-decoration: underline;
}

.demo-note {
  margin-top: 12px;
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--ink-faint);
}

.story-list {
  margin-top: 24px;
}

.trail {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.trail-step {
  display: flex;
  align-items: center;
  gap: 6px;
}

.trail-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.trail-dot.neutral { background: var(--ink-faint); }
.trail-dot.after { background: var(--after); }
.trail-dot.learning { background: var(--teal); }

.trail-label {
  font-size: 13px;
  font-family: var(--font-mono);
  color: var(--ink-faint);
}

.trail-line {
  width: 20px;
  height: 1px;
  background: var(--hairline-strong);
}

.story-body {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.story-body p {
  font-size: 17px;
  line-height: 1.7;
  color: var(--ink-soft);
}

.body-label {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--ink-faint);
  border: 1px solid var(--hairline-strong);
  border-radius: 4px;
  padding: 1px 6px;
  margin-right: 9px;
  vertical-align: 2px;
}
</style>
