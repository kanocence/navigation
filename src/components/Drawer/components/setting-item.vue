<template>
  <!-- New line -->
  <div v-if="type === 'content'" class="setting-item" :class="itemClass">
    <div class="setting-title">{{ title }}</div>
    <div class="setting-content" :class="settingClass">
      <slot name="content"></slot>
    </div>
  </div>
  <!-- On the same line -->
  <div v-if="type === 'row'" class="setting-item" :class="itemClass">
    <div class="setting-row">
      <div class="label">{{ title }}</div>
      <div class="content" :class="settingClass">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: String,
    settingClass: String,
    itemClass: String,
    type: String,
  },
});
</script>
<style lang="scss" scoped>
.setting-item {
  margin-top: 24px;
  .setting-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }
  .setting-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .label {
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      min-width: 25%;
    }
    .content {
      max-width: 70%;
    }
  }
}
.setting-header {
  margin: 0;
}
</style>
