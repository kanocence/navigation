// stores/counter.js
import { defineStore } from 'pinia'
import { storage } from "../utils/storage";
import { useCssVar } from "@vueuse/core";
import { ref } from "vue";

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      primaryColor: '#D9ECFFFF',
      screen: {
        mobile: false,
        height: 0,
        width: 0
      },
      engines: [
        {
          name: "baidu",
          link: "https://www.baidu.com/s?ie=UTF-8&wd=",
          icon: "icon-bxl-baidu",
          active: true,
        },
        {
          name: "google",
          link: "https://www.google.com.hk/search?q=",
          icon: "icon-google",
          active: false,
        },
        {
          name: "github",
          link: "https://github.com/search?q=",
          icon: "icon-github-fill",
          active: false,
        },
        {
          name: "bing",
          link: "https://cn.bing.com/search?q=",
          icon: "icon-bing",
          active: false,
        },
      ]
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    /**
     * record screen info
     * @param screenInfo width, height, isMobile
     */
    setScreen({ height = 0, width = 0, mobile = false }) {
      this.screen.height = height
      this.screen.width = width
      this.screen.mobile = mobile
    },
    /**
     * fetch engine from localStorage
     */
    fetchEngines() {
      const data = storage.fetch('engine')
      data.length > 0 && (this.engines = data)
    },
    /**
     * change search engine and save localStorage
     * @param name engine name
     */
    selectEngine(name: string) {
      this.engines.forEach((i) => { i.active = i.name === name })
      storage.save("engine", this.engines);
    },
    /**
     * set and save el primary color
     * @param color picked color
     */
    setPrimaryColor(color?: string) {
      const el = ref(document.documentElement);
      const primary = useCssVar("--el-color-primary", el);
      if (color) {
        primary.value = color
      } else {
        const storageColor = storage.fetch("primaryColor")
        primary.value = storageColor.length === 0 ? "#D9ECFFFF" : storageColor
      }
      storage.save("primaryColor", primary.value);
    }
  },
})