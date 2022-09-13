<script setup lang="ts">
import IconDownload from "../components/icons/IconDownload.vue";
import IconMagnify from "../components/icons/IconMagnify.vue";
import {ref} from "vue";

defineProps({
  country: String,
  imageName: String
})

let showActions = ref(false);
</script>

<template>
  <div class="image-wrapper"
       @mouseover="showActions = true"
       @mouseleave="showActions = false"
  >
    <img :src="`./src/assets/${country}/compressed/${imageName}.jpg`" alt="">
    <div class="actions-container" v-show="showActions">
      <a :href="`./src/assets/${country}/original/${imageName}.jpg`" :download="imageName">
        <IconDownload/>
      </a>
      <a :href="`./src/assets/${country}/original/${imageName}.jpg`" target="_blank">
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
