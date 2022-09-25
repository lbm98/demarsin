<script setup>
import {ref} from "vue";
import ReizenDropDown from "./ReizenDropDown.vue";

let showPresentationsInfo = ref(false);
let showContactInfo = ref(false);
</script>

<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-title">
        <router-link class="country-link text-4xl" to="/">Demarsin-Opsommer</router-link>
        <p class="text-2xl pl-6 my-3">Audio Visuele Reportages</p>
        <div class="text-xl pl-6 mt-10">
          <p>'s-Hertogenwijngaard 12 - B3000 Leuven</p>
          <p>info@demarsin.org - 016 23 13 73</p>
        </div>
      </div>
    </div>
    <div class="header-bottom">

      <router-link class="country-link text-2xl ml-5" to="/">Home</router-link>

      <ReizenDropDown class="ml-auto"/>

      <button @click="showPresentationsInfo = !showPresentationsInfo" class="reizen-dropdown-button">Presentaties
      </button>

      <router-link class="reizen-dropdown-button" to="/trailers">Trailers</router-link>
    </div>
  </div>

  <div class="presentation-info pl-10 pt-3" v-show="showPresentationsInfo">
    Geen reisreportages, maar documentaires, tot stand gekomen na verschillende lange reizen verspreid over
    meerdere jaren.
    <br>
    Montages met foto en video en gesproken commentaar. Gepaste achtergrondmuziek van de streek of land.
    <br><br>
    Elke voorstelling bestaat uit 2 delen van elk 45 minuten.
    <br>
    De duur van de pauze tussen de twee delen volgens afspraak.
    <br>
    Inleiding en nabespreking indien gewenst.
    <br><br>
    Eigen professioneel materiaal voor grote en kleine zalen:
    <ul class="list-disc ml-5">
      <li>scherm 2,40 x 2,40 m, indien gewenst.</li>
      <li>Krachtige beamer, voldoet ook op groot filmscherm.</li>
      <li>Hi-Fi-stereo geluidsinstallatie.</li>
    </ul>

    <hr class="horizontal-rule">
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 320px;
  background-color: #D9D9D9;
}

.country-link {
  padding: 3px 20px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: black;
  /*font-size: 40px;*/
}

.header-top {
  padding-top: 20px;
  padding-bottom: 20px;
}

.header-top-title {
  padding-left: 20px;
  font-size: 32px;
}

.header-bottom {
  display: flex;
  padding-right: 20px;
  gap: 20px;
  /*justify-content: flex-end;*/
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 24px;
}

.contact-info {
  font-size: 20px;
  padding: 20px;
  background-color: #EDEDED;
}

.presentation-info {
  font-size: 20px;
  /*padding: 20px;*/
  background-color: #EDEDED;
}

.reizen-dropdown-button {
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  background-color: #D9D9D9;
}

.horizontal-rule{
  margin-top: 20px;
}
</style>