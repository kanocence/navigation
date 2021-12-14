<template>
  <settingItem title="背景图片" type="content" setting-class="bgimages">
    <template #content>
      <el-image
        v-for="item of images"
        :key="item.name"
        style="width: 100px; height: 62px"
        :src="item.src"
        fit="cover"
      ></el-image></template
  ></settingItem>
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

    // background image
    const images = ref([
      { name: "sagiri", src: require("@/assets/webp/bg.webp") },
      { name: "even", src: require("@/assets/images/even.jpg") },
      { name: "东方", src: require("@/assets/images/sky.jpg") },
      { name: "night", src: require("@/assets/images/night.jpg") },
    ]);
    return {
      images,
    };
  },
});
</script>
<style lang="scss" scoped>
.bgimages {
  display: flex;
  flex-wrap: wrap;
  div {
    margin: 12px;
  }
  .el-image:hover {
    box-shadow: 0 0 10px var(--el-color-primary);
    transition: 0.2s;
  }
}
</style>
