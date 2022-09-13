<script setup lang="ts">
import {ref} from "vue";

let showReizenDropDown = ref(false);

function onButtonClick() {
  window.addEventListener('click', closeOnNextClick)
  // showReizenDropDown.value = true;
  showReizenDropDown.value = !showReizenDropDown.value
}

function closeOnNextClick() {
  window.removeEventListener('click', closeOnNextClick);
  showReizenDropDown.value = false;
}
</script>

<template>
  <div class="reizen-dropdown">
    <button @click.stop="onButtonClick" class="reizen-dropdown-button">Reizen</button>
    <div v-show="showReizenDropDown" class="reizen-dropdown-content">
      <router-link class="country-link" to="/azoren">Azoren</router-link>
      <router-link class="country-link" to="/balearen">Balearen</router-link>
      <router-link class="country-link" to="/baltische-staten">Baltische Staten</router-link>
      <router-link class="country-link" to="/china">China</router-link>
      <router-link class="country-link" to="/ierland">Ierland</router-link>
      <router-link class="country-link" to="/ijsland">IJsland</router-link>
      <router-link class="country-link" to="/kreta-santorini">Kreta Santorini</router-link>
      <router-link class="country-link" to="/madeira">Madeira</router-link>
      <router-link class="country-link" to="/nieuw-zeeland">Nieuw-Zeeland</router-link>
      <router-link class="country-link" to="/noorwegen">Noorwegen</router-link>
      <router-link class="country-link" to="/portugal">Portugal</router-link>
      <router-link class="country-link" to="/roemenie">Roemenie</router-link>
      <router-link class="country-link" to="/slovenie">Slovenie</router-link>
      <router-link class="country-link" to="/suriname">Suriname</router-link>
      <router-link class="country-link" to="/taiwan">Taiwan</router-link>
    </div>
  </div>
</template>

<style scoped>
.reizen-dropdown-button {
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  background-color: #D9D9D9;
}

.reizen-dropdown-content {
  width: 200px;
  position: absolute;
  z-index: 1;
  background-color: #D9D9D9;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.country-link {
  padding: 3px 20px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: black;
  font-size: 20px;
}

.country-link:hover {
  background-color: #cecece;
}
</style>
