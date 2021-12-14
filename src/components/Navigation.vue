<template>
  <div class="navigation">
    <el-input
      v-model="input"
      placeholder="Please input"
      @keyup.enter="handleSearch"
    >
      <template #prefix>
        <el-popover
          placement="bottom"
          trigger="hover"
          :width="50"
          popper-class="engine-popover"
        >
          <template #reference>
            <span class="iconfont" :class="[active?.icon]"></span>
          </template>
          <div class="engine-list">
            <div
              v-for="item of engines"
              :key="item.name"
              @click="handleSelect(item.name)"
            >
              <span class="iconfont" :class="[item.icon]"></span>
            </div>
          </div>
        </el-popover>
      </template>
      <template #suffix>
        <el-icon class="el-input__icon" @click="handleSearch">
          <search />
        </el-icon>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { Search } from "@element-plus/icons";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    Search,
  },
  setup() {
    const counter = useCounterStore();
    // engines is reactive refs
    const { engines } = storeToRefs(counter);

    // search input
    const input = ref("");
    // find active engine
    const active = computed(() => engines.value.find((i) => i.active));

    onMounted(() => {
      // init engine data
      counter.fetchEngines();
    });

    const handleSearch = () => {
      input.value.length > 0 &&
        (location.href =
          engines.value.find((i) => i.active)?.link + input.value);
    };

    const handleSelect = (type: string) => {
      counter.selectEngine(type);
    };

    return {
      input,
      engines,
      handleSearch,
      handleSelect,
      active,
    };
  },
});
</script>

<style lang="scss" scoped>
.navigation {
  padding-top: 25vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  /deep/.el-input {
    width: 480px;
    max-width: 90%;
  }
}
</style>
<style>
.engine-popover {
  min-width: unset !important;
  padding: 0 !important;
}
.engine-list {
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.engine-list span {
  font-size: 24px;
}
.engine-list {
  padding: 6px 0;
}
.engine-list div {
  padding: 0 12px;
  transition: background-color 1s;
  -webkit-transition: background-color 1s;
}
.engine-list div:hover {
  background-color: #d6e4ff;
}
</style>
