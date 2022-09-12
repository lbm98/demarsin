<script setup>
import {ref} from "vue";

let showReizenDropDown = ref(false);
let showPresentationsInfo = ref(false);
let showContactInfo = ref(false);
</script>

<template>
  <div class="header">
    <div class="header-top">
      <p class="header-top-title">
        Demarsin-Opsommer
      </p>
    </div>
    <div class="header-bottom">

      <div class="reizen-dropdown">
        <button @click="showReizenDropDown = !showReizenDropDown" class="reizen-dropdown-button">Reizen</button>
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

.header-top {
  padding-top: 20px;
  padding-bottom: 20px;
}

.header-top-title {
  /*text-align: center;*/
  padding-left: 20px;
  font-size: 32px;
}

.header-bottom {
  display: flex;
  /*justify-content: space-evenly;*/
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
  font-size: 16px;
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

.reizen-dropdown-content {
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

.horizontal-rule{
  margin-top: 20px;
}
</style>