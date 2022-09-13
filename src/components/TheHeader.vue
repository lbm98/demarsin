<script setup>
import {ref} from "vue";
import ReizenDropDown from "./ReizenDropDown.vue";

let showPresentationsInfo = ref(false);
let showContactInfo = ref(false);
</script>

<template>
  <div class="header">
    <div class="header-top">
      <p class="header-top-title">
        <router-link class="country-link" to="/">Demarsin-Opsommer</router-link>
      </p>
    </div>
    <div class="header-bottom">

      <ReizenDropDown/>

      <button @click="showPresentationsInfo = !showPresentationsInfo" class="reizen-dropdown-button">Presentaties
      </button>
      <button @click="showContactInfo = !showContactInfo" class="reizen-dropdown-button">Contact</button>
    </div>
  </div>

  <div class="presentation-info" v-show="showPresentationsInfo">
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
    <ul>
      <li>scherm 2,40 x 2,40 m, indien gewenst.</li>
      <li>Krachtige beamer, voldoet ook op groot filmscherm.</li>
      <li>Hi-Fi-stereo geluidsinstallatie.</li>
      <li>Commentaar, muziek en geluid afzonderlijk regelbaar.</li>
    </ul>

    <hr class="horizontal-rule">
  </div>

  <div class="contact-info" v-show="showContactInfo">
    <p class="">'s-Hertogenwijngaard 12 - B3000 Leuven - info@demarsin.org - 016 23 13 73</p>
    <hr class="horizontal-rule">
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 200px;
  background-color: #D9D9D9;
}

.country-link {
  padding: 3px 20px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: black;
  font-size: 40px;
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
  justify-content: flex-end;
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
  padding: 20px;
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