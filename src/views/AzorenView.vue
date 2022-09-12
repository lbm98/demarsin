<script setup lang="ts">

import IconDownload from "../components/icons/IconDownload.vue";
import IconMagnify from "../components/icons/IconMagnify.vue";
</script>

<template>
  <div class="compressed">
    <div class="title">
      Azoren
    </div>
    <p class="short-text">De Griekse mythologie getuigt van grote vindingrijkheid en verbeeldingskracht. De ontdekking
      van het paleis te Knossos in het begin van de 20ste eeuw heeft de mythe dichter bij de werkelijkheid gebracht. In
      het eerste deel verkennen we Kreta en Santorini met de geschiedenis als rode draad. Grieken, Romeinen, Moren,
      Byzantijnen, Venetianen, Turken en Duitsers: ze lieten er allemaal hun sporen na. In het tweede deel gaat onze
      aandacht naar de natuur, het cultureel erfgoed en de hedendaagse samenleving. De Witte Bergen hebben de hoogste
      toppen en de diepste ravijnen. Het gebied met de Samariakloof is beschermd als Nationaal Park. Slechts een vierde
      van het land is geschikt voor landbouw. Kreta produceert olijfolie, wijn, citrusvruchten en tomaten; toch is
      toerisme nu de belangrijkste bron van inkomsten.</p>
  </div>


  <div class="image-container">

    <div class="image-wrapper">
      <img src="@/assets/azoren/angra.jpg">
      <div class="button-container">
        <a href="./src/assets/azoren/original/angra.jpg" download="angra" class="download-button">
          <IconDownload/>
        </a>
        <a href="./src/assets/azoren/original/angra.jpg" target="_blank" class="magnify-button">
          <IconMagnify/>
        </a>
      </div>
    </div>


    <img src="@/assets/azoren/baai.jpg">
    <img src="@/assets/azoren/caldera.jpg">
    <img src="@/assets/azoren/capelinhos.jpg">

    <img src="@/assets/azoren/cidades.jpg">
    <img src="@/assets/azoren/dorpskerk.jpg">
    <img src="@/assets/azoren/feest.jpg">
    <img src="@/assets/azoren/graciosa.jpg">

    <img src="@/assets/azoren/kaas.jpg">
    <img src="@/assets/azoren/kratermeer.jpg">
    <img src="@/assets/azoren/lagoa.jpg">
    <img src="@/assets/azoren/molens.jpg">

    <img src="@/assets/azoren/pico.jpg">
    <img src="@/assets/azoren/tourada.jpg">
    <img src="@/assets/azoren/weiden.jpg">
    <img src="@/assets/azoren/woning.jpg">
  </div>

  <div class="compressed">

  </div>

</template>

<style scoped>
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

.button-container>a{
  color: black;
  text-decoration: none;
  width: 40px;
  height: 40px;
}



.image-wrapper > img {
  width: 100%;
  height: auto;
}



.compressed {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.image-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:repeat(4, 1fr);
  width: 1000px;
  grid-gap: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

.image-container > img {
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
</style>
