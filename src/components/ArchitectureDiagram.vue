<script setup>
defineProps({ architecture: Object });
</script>

<template>
  <div class="arch">
    <div class="arch-meta">
      <span v-for="m in architecture.meta" :key="m.label" class="meta-pill">
        <span class="meta-label mono">{{ m.label }}</span>
        <span class="meta-value">{{ m.value }}</span>
      </span>
    </div>

    <p class="tier-label mono">{{ architecture.clientTier.label }}</p>
    <div class="client-row">
      <div v-for="app in architecture.clientTier.apps" :key="app.name" class="client-box">
        <span class="role-badge mono">{{ app.role }}</span>
        <h4 class="app-name mono">{{ app.name }}</h4>
        <p class="app-desc">{{ app.desc }}</p>
      </div>
    </div>

    <div class="connector" aria-hidden="true">
      <span class="connector-tag mono">{{ architecture.connectorTop || 'REST API' }}</span>
    </div>

    <p class="tier-label mono">{{ architecture.applicationTier.label }}</p>
    <div class="app-tier-box">
      <div class="app-tier-head">
        <h4 class="app-name mono">{{ architecture.applicationTier.name }}</h4>
        <span class="stack-line mono">{{ architecture.applicationTier.stackLine }}</span>
      </div>

      <p class="layer-label mono">Domain Modules</p>
      <div class="module-chips">
        <span
          v-for="mod in architecture.applicationTier.modules"
          :key="mod.name"
          class="chip module-chip"
          :class="{ 'module-chip-core': mod.core, 'module-chip-note': mod.note }"
        >
          <span v-if="mod.code" class="chip-code mono">{{ mod.code }}</span>{{ mod.name }}<template v-if="mod.desc"> — {{ mod.desc }}</template>
        </span>
      </div>

      <p class="layer-label mono">Common Infrastructure</p>
      <div class="module-chips">
        <span v-for="line in architecture.applicationTier.infra" :key="line" class="chip infra-chip mono">
          {{ line }}
        </span>
      </div>
    </div>

    <div class="connector" aria-hidden="true">
      <span class="connector-tag mono">{{ architecture.connectorBottom || '데이터 접근 계층' }}</span>
    </div>

    <p class="tier-label mono">{{ architecture.dataTier.label }}</p>
    <div class="data-box">
      <h4 class="app-name mono">{{ architecture.dataTier.name }}</h4>
      <span class="app-desc mono">{{ architecture.dataTier.desc }}</span>
    </div>
  </div>
</template>

<style scoped>
.arch {
  border: 1px solid var(--hairline);
  border-radius: 10px;
  background: var(--paper-raised);
  padding: clamp(20px, 4vw, 32px);
}

.arch-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px dashed var(--hairline-strong);
}

.meta-pill {
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-size: 14.5px;
}

.meta-label {
  font-size: 12.5px;
  color: var(--ink-faint);
}

.meta-value {
  color: var(--ink-soft);
}

.tier-label {
  font-size: 12.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-bottom: 12px;
}

.client-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.client-box {
  border: 1px solid var(--hairline-strong);
  border-radius: 8px;
  padding: 14px 16px;
  background: var(--paper);
}

.role-badge {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--amber);
  border: 1px solid var(--amber);
  border-radius: 999px;
  padding: 2px 9px;
  margin-bottom: 8px;
}

.app-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--ink);
  margin: 0 0 6px;
}

.app-desc {
  font-size: 14px;
  line-height: 1.55;
  color: var(--ink-soft);
  margin: 0;
}

.connector {
  position: relative;
  height: 34px;
  margin: 6px auto;
  border-left: 1.5px solid var(--hairline-strong);
  width: 1.5px;
}

.connector::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -4px;
  width: 0;
  height: 0;
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  border-top: 6px solid var(--hairline-strong);
}

.connector-tag {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: var(--ink-faint);
  background: var(--paper-raised);
  padding: 2px 8px;
  border: 1px solid var(--hairline);
  border-radius: 999px;
  white-space: nowrap;
}

.app-tier-box {
  border: 1.5px solid var(--teal);
  border-radius: 8px;
  padding: 20px;
  background: var(--teal-soft);
}

.app-tier-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
  padding-bottom: 14px;
  border-bottom: 1px dashed var(--hairline-strong);
}

.stack-line {
  font-size: 13px;
  color: var(--teal);
}

.layer-label {
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin: 0 0 10px;
}

.layer-label:not(:first-of-type) {
  margin-top: 18px;
}

.module-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.module-chip {
  background: var(--paper-raised);
  font-size: 13.5px;
}

.module-chip-core {
  border-color: var(--teal);
  border-width: 1.5px;
  color: var(--teal);
}

.module-chip-note {
  border-style: dashed;
  color: var(--ink-faint);
  background: var(--paper);
}

.chip-code {
  color: var(--amber);
  margin-right: 6px;
}

.infra-chip {
  border-style: dashed;
  color: var(--ink-faint);
  font-size: 13px;
}

.data-box {
  max-width: 320px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid var(--hairline-strong);
  border-radius: 8px;
  padding: 14px 18px;
  background: var(--paper);
}

.data-box .app-desc {
  color: var(--ink-faint);
  font-size: 13px;
}

@media (max-width: 640px) {
  .client-row {
    grid-template-columns: 1fr;
  }
}
</style>
