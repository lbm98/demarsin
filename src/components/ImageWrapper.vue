<script setup lang="ts">
import IconDownload from "../components/icons/IconDownload.vue";
import IconMagnify from "../components/icons/IconMagnify.vue";

defineProps({
  country: String,
  imageName: String
})
</script>

<template>
  <div class="image-wrapper">
    <img :src="`./src/assets/${country}/compressed/${imageName}.jpg`" alt="">
    <div class="button-container">
      <a :href="`./src/assets/${country}/original/${imageName}.jpg`" download="angra">
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

.button-container {
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

.button-container > a{
  color: black;
  text-decoration: none;
  width: 40px;
  height: 40px;
}
</style>
