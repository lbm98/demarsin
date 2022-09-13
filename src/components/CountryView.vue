<script setup lang="ts">
</script>

<template>
  <div class="country-view">

    <div class="compressed">
      <div class="title">
        <slot name="title"></slot>
      </div>

      <div class="short-text">
        <slot name="short-text"></slot>
      </div>
    </div>

    <div class="images">
      <slot name="images"></slot>
    </div>

    <div class="compressed">
      <div class="long-text">
        <slot name="long-text"></slot>
      </div>
    </div>

  </div>
</template>

<style scoped>
.compressed {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:repeat(4, 1fr);
  width: 1000px;
  grid-gap: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

.images > img {
  width: 100%;
}

.title {
  margin-top: 20px;
  font-size: 36px;
}

.short-text {
  margin-top: 20px;
  font-size: 20px;
}

.long-text{
  margin-top: 40px;
  padding-bottom: 30px;
  font-size: 20px;
}
</style>
