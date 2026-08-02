<script setup>
import StoryCard from './StoryCard.vue';
import ArchitectureDiagram from './ArchitectureDiagram.vue';

const props = defineProps({ project: Object, index: Number, expanded: Boolean });
const emit = defineEmits(['toggle']);

const bodyId = `project-body-${props.project.id.replace(/\s+/g, '-')}`;
</script>

<template>
  <section class="section project">
    <div class="container">
      <button
        type="button"
        class="project-head"
        :aria-expanded="expanded"
        :aria-controls="bodyId"
        @click="emit('toggle')"
      >
        <span class="chip id-chip mono">{{ project.id }}</span>
        <div class="project-head-text">
          <h2 class="project-name">{{ project.name }}</h2>
          <p class="project-domain">{{ project.domain }}</p>
        </div>
        <span class="toggle-arrow mono" :class="{ open: expanded }" aria-hidden="true">{{ expanded ? '▴' : '▾' }}</span>
      </button>

      <div v-show="expanded" :id="bodyId" class="project-body">
        <div class="project-meta">
          <div class="meta-item">
            <span class="meta-label">기간</span>
            <span class="mono">{{ project.period }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">역할</span>
            <span>{{ project.role }}</span>
          </div>
          <div class="meta-item stack-item">
            <span class="meta-label">스택</span>
            <span class="stack-inline">
              <span v-for="s in project.stack" :key="s" class="chip">{{ s }}</span>
            </span>
          </div>
        </div>

        <div class="media-stack">
          <ArchitectureDiagram v-if="project.architecture" :architecture="project.architecture" />
          <div v-else class="placeholder-box media-box">아키텍처 다이어그램</div>
        </div>

        <div class="story-list">
          <StoryCard
            v-for="(s, i) in project.stories"
            :key="s.title"
            :index="String(i + 1).padStart(2, '0')"
            :title="s.title"
            :tag="s.tag"
            :commits="s.commits"
            :problem="s.problem"
            :action="s.action"
            :result="s.result"
          />
        </div>
      </div>
    </div>
  </section>
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
  color: var(--teal);
}

.id-chip {
  margin-top: 6px;
  color: var(--teal);
  border-color: var(--teal);
  background: var(--teal-soft);
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

.media-stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.media-box {
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.story-list {
  margin-top: 12px;
}
</style>
