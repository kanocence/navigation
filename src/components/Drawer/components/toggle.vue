<template>
  <settingItem title="快速切换" type="content">
    <template #content>
      <el-checkbox v-model="hover" label="hover"></el-checkbox>
      <el-checkbox v-model="tags" label="tags"></el-checkbox>
    </template>
  </settingItem>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import settingItem from "./setting-item.vue";

export default defineComponent({
  components: {
    settingItem,
  },
  setup() {
    const counter = useCounterStore();

    // engine checkbox
    const hover = ref(true);
    const tags = ref(false);
    return {
      hover,
      tags,
    };
  },
});
</script>
<style lang="scss" scoped></style>
