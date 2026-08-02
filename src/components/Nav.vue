<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const items = [
  { id: 'intro', label: '소개' },
  { id: 'career', label: '경력' },
  { id: 'projects', label: '프로젝트' },
  { id: 'side-project', label: '사이드 프로젝트' },
];

const active = ref('intro');
let observer;

onMounted(() => {
  const sections = items
    .map((item) => document.getElementById(item.id))
    .filter(Boolean);

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) active.value = visible[0].target.id;
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((s) => observer.observe(s));
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <nav class="site-nav">
    <div class="container nav-inner">
      <a
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        class="nav-link"
        :class="{ active: active === item.id }"
      >
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(247, 248, 250, 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--hairline);
}

.nav-inner {
  display: flex;
  gap: clamp(16px, 3vw, 32px);
  overflow-x: auto;
  scrollbar-width: none;
}

.nav-inner::-webkit-scrollbar {
  display: none;
}

.nav-link {
  flex-shrink: 0;
  padding: 16px 2px;
  font-family: var(--font-mono);
  font-size: 14.5px;
  color: var(--ink-faint);
  border-bottom: 2px solid transparent;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--ink-soft);
  text-decoration: none;
}

.nav-link.active {
  color: var(--teal);
  border-bottom-color: var(--teal);
}
</style>
