BalearenView.vue
<script setup lang="ts">

import ImageWrapper from "../components/ImageWrapper.vue"
import CountryView from "../components/CountryView.vue"
</script>

<template>
  <CountryView>
    <template #title>
      IJsland
    </template>

    <template #short-text>
      <p>De kredietcrisis en vooral de aswolk van de vulkaan Eyjafjallajökull, hebben IJsland in het nieuws gebracht. De
        plaats waar de Noorman Ingolfur Arnarson in 874 zijn boerderij optrok, groeide uit tot de hoofdstad, Reykjavik.
        Daar woont nu zowat de helft van de totale bevolking. Het binnenland daarentegen is desolaat en nagenoeg
        onbewoond. Het "land van ijs" heeft uitgestrekte gletsjers, meren vol ijsbergen, woeste rivieren en machtige
        watervallen. Het "land van vuur" is bezaaid met vulkanen, kratermeren, geisers, solfataren, warme bronnen en
        stoomvelden. IJslanders zijn fier op hun taal die in de loop der eeuwen slechts weinig is veranderd</p>
    </template>

    <template #images>
      <ImageWrapper country="ijsland" image-name="dyrholaey"/>
      <ImageWrapper country="ijsland" image-name="godafoss"/>
      <ImageWrapper country="ijsland" image-name="lagoon"/>
      <ImageWrapper country="ijsland" image-name="namaskard"/>
      <ImageWrapper country="ijsland" image-name="oxara"/>
      <ImageWrapper country="ijsland" image-name="paarden"/>
      <ImageWrapper country="ijsland" image-name="papegaaiduiker"/>
      <ImageWrapper country="ijsland" image-name="pingvellir"/>
      <ImageWrapper country="ijsland" image-name="reykjavik"/>
      <ImageWrapper country="ijsland" image-name="skaftafell"/>
      <ImageWrapper country="ijsland" image-name="svartifoss"/>
      <ImageWrapper country="ijsland" image-name="viking"/>
    </template>

    <template #long-text>
      IJSLAND, land van vuur en ijs.
      <br><br>
      IJsland, een land van vuur. Het ligt op de Midden-Atlantische rug, een enorme bergketen in noord-zuidelijke
      richting op de bodem van de Atlantische Oceaan. Daar drijven de Noord-Amerikaanse en de Eurazische tektonische
      platen uit elkaar en ontstaan er scheuren waar magma naar boven kan komen. Oost- en westkust drijven langzaam uit
      elkaar. Aardbevingen en vulkaanuitbarstingen zijn er heel gewoon. Bij de uitbarsting van de Eyjaffallajökull in
      2010 waren het aswolken die Europa teisterden. Dat zullen de vele gestrande reizigers niet gemakkelijk vergeten.
      <br><br>
      IJsland, een land van vuur, maar uiteraard ook een land van ijs. Elf procent van het totale landoppervlak is
      bedekt met gletsjers. De Vatnajökull, de grootste van de gletsjers, beslaat een gebied dat groter is dan drie
      Vlaamse provincies samen. Op verschillende plaatsen schuift het ijs in de vallei naar beneden en vormt
      gletsjertongen. Na een vulkaanuitbarsting kan het witte ijs bedekt zijn met een laag zwarte asse.
      <br><br>
      Het land, ruim 3 maal groter dan België, heeft een bevolkingsdichtheid die 100 maal kleiner is. Tot een hoogte van
      200 meter is het kustgebied bewoond. De rest, ongeveer 80 % van IJsland, is onbewoonbaar. Het zijn de lavavelden,
      steenwoestijnen, rotsen, bergen en gletsjers. Plaatsen die toch niet onbelangrijk zijn: ze trekken de
      nieuwsgierige en avontuurlijke mens aan.
      <br><br>
      In 874 zette Ingólfur Arnarson met zijn gevolg koers naar IJsland om de tirannie van de Noorse koning te
      ontvluchten. De plaats waar hij zijn boerderij optrok, groeide uit tot de hoofdstad Reykjavik. Daar woont zowat de
      helft van de totale bevolking. Vroeger waren veeteelt en visvangst de belangrijkste activiteiten. Nu is visvangst
      niet meer de belangrijkste bron van inkomsten, maar toch nog goed voor 40% van de totale export.
    </template>
  </CountryView>
</template>

<style scoped>

</style>
