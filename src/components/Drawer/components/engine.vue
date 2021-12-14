<template>
  <settingItem title="搜索引擎" type="row">
    <template #content>
      <el-select v-model="active" size="mini" @change="handleSelect">
        <el-option
          v-for="item in options"
          :key="item.name"
          :label="item.name"
          :value="item.name"
        >
        </el-option>
      </el-select>
    </template>
  </settingItem>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useCounterStore } from "@/stores/counter";
import settingItem from "./setting-item.vue";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    settingItem,
  },
  setup() {
    const counter = useCounterStore();
    // engines is reactive refs
    const { engines } = storeToRefs(counter);
    // const { engines: options } = counter;
    const options = [
      { name: "baidu" },
      { name: "google" },
      { name: "github" },
      { name: "bing" },
    ];

    // active engine
    const active = computed(() => engines.value.find((i) => i.active)?.name);

    const handleSelect = (type: string) => {
      counter.selectEngine(type);
    };

    return {
      active,
      options,
      handleSelect,
    };
  },
});
</script>
<style lang="scss" scoped></style>
