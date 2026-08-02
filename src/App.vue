<script setup>
import { ref, computed } from 'vue';
import Nav from './components/Nav.vue';
import Hero from './components/Hero.vue';
import Timeline from './components/Timeline.vue';
import ProjectSection from './components/ProjectSection.vue';
import SiteNote from './components/SiteNote.vue';
import SideProjects from './components/SideProjects.vue';
import Footer from './components/Footer.vue';
import { projects } from './data.js';

const expandedStates = ref(projects.map(() => false));
const allExpanded = computed(() => expandedStates.value.every(Boolean));

function toggleAll() {
  const next = !allExpanded.value;
  expandedStates.value = expandedStates.value.map(() => next);
}
</script>

<template>
  <div class="page">
    <Nav />
    <div id="intro">
      <Hero />
    </div>
    <div id="career">
      <Timeline />
    </div>
    <div id="projects">
      <div class="container projects-toolbar">
        <button type="button" class="toolbar-btn mono" @click="toggleAll">
          {{ allExpanded ? '전체 접기' : '전체 펼치기' }}
        </button>
      </div>
      <ProjectSection
        v-for="(p, i) in projects"
        :key="p.id"
        :project="p"
        :index="i"
        :expanded="expandedStates[i]"
        @toggle="expandedStates[i] = !expandedStates[i]"
      />
    </div>
    <div id="side-project">
      <SiteNote />
      <SideProjects />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.projects-toolbar {
  display: flex;
  justify-content: flex-end;
  padding-top: clamp(28px, 5vw, 40px);
}

.toolbar-btn {
  font-size: 14px;
  padding: 6px 14px;
  border: 1px solid var(--hairline-strong);
  border-radius: 6px;
  background: var(--paper-raised);
  color: var(--ink-soft);
  cursor: pointer;
}

.toolbar-btn:hover {
  border-color: var(--teal);
  color: var(--teal);
}
</style>
