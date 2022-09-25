<script setup lang="ts">
import IconDownload from "../components/icons/IconDownload.vue";
import IconMagnify from "../components/icons/IconMagnify.vue";
import {computed, ref} from "vue";

let props = defineProps({
  country: String,
  imageName: String
})

let showActions = ref(false);

const compressedUrl = new URL(`../assets/${props.country}/compressed/${props.imageName}.jpg`, import.meta.url).href
const originalUrl = new URL(`../assets/${props.country}/original/${props.imageName}.jpg`, import.meta.url).href

</script>

<template>
  <div class="image-wrapper"
       @mouseover="showActions = true"
       @mouseleave="showActions = false"
  >
    <img :src="compressedUrl" alt="">
    <div class="actions-container" v-show="showActions">
      <a :href="originalUrl" :download="imageName">
        <IconDownload/>
      </a>
      <a :href="originalUrl" target="_blank">
        <IconMagnify/>
      </a>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper > img {
  width: 100%;
}

.actions-container {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.actions-container > a {
  background-color: #D9D9D9;
  width: 40px;
  height: 40px;
}
</style>
