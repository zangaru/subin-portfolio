<script setup>
defineProps({
  index: String,
  title: String,
  tag: String,
  commits: Array,
  problem: String,
  action: String,
  result: String,
});
</script>

<template>
  <article class="story">
    <div class="story-head">
      <span class="story-num mono">{{ index }}</span>
      <h3 class="story-title">{{ title }}</h3>
      <span class="story-tag">{{ tag }}</span>
    </div>

    <div class="trail">
      <div class="trail-step">
        <span class="trail-dot before" />
        <span class="trail-label">문제</span>
      </div>
      <span class="trail-line" />
      <div class="trail-step">
        <span class="trail-dot neutral" />
        <span class="trail-label">해결</span>
      </div>
      <span class="trail-line" />
      <div class="trail-step">
        <span class="trail-dot after" />
        <span class="trail-label">결과</span>
      </div>
    </div>

    <div class="story-body">
      <p><span class="body-label">문제</span>{{ problem }}</p>
      <p><span class="body-label">해결</span>{{ action }}</p>
      <p><span class="body-label">결과</span>{{ result }}</p>
    </div>
  </article>
</template>

<style scoped>
.story {
  padding: 26px 0;
}
.story + .story {
  border-top: 1px dashed var(--hairline);
}

.story-head {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

.story-num {
  font-size: 14px;
  color: var(--ink-faint);
}

.story-title {
  font-size: 20px;
  font-weight: 600;
}

.story-tag {
  margin-left: auto;
  font-size: 13.5px;
  color: var(--teal);
  background: var(--teal-soft);
  padding: 3px 9px;
  border-radius: 20px;
  font-weight: 500;
  white-space: nowrap;
}

.trail {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
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
.trail-dot.before { background: var(--before); }
.trail-dot.neutral { background: var(--ink-faint); }
.trail-dot.after { background: var(--after); }

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
