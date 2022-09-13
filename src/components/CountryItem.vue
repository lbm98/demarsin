<script setup lang="ts">

</script>

<template>
  <div class="country-item">

    <div class="country-item-image">
      <slot name="image"></slot>
    </div>

    <div class="country-item-side">

      <div class="country-item-title">
        <slot name="title"></slot>
      </div>

      <div class="country-item-content hidden sm:block">
        <slot name="content"></slot>
      </div>

      <div class="country-item-link">
        <slot name="link"></slot>
      </div>

    </div>
  </div>
</template>

<style scoped>
.country-item {
  width: 100%;
  padding: 20px;
  display: flex;
}

.country-item-image {
  height: 300px;
}

.country-item-side {
  /*
   The side panel should shrink way faster then the image.
  */
  flex-shrink: 99;
  padding: 20px;
}

.country-item-title {
  font-size: 28px;
}

.country-item-content {
  padding-top: 20px;
  font-size: 20px;
}

/*.country-item-link > a {*/
/*  position: absolute;*/
/*  margin-top: 10px;*/
/*  padding: 2px 5px;*/
/*  cursor: pointer;*/
/*  display: block;*/
/*  text-decoration: none;*/
/*  color: black;*/
/*  font-size: 24px;*/
/*}*/

/*.country-item-link > a:hover {*/
/*  background-color: #D9D9D9;*/
/*}*/

.country-item-button {
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  font-size: 24px;
}

.country-item-button:hover {
  background-color: #D9D9D9;
}
</style>
