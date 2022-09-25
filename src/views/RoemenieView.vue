<script setup lang="ts">

import ImageWrapper from "../components/ImageWrapper.vue"
import CountryView from "../components/CountryView.vue"
</script>

<template>
  <CountryView>
    <template #title>
      Roemenië
    </template>

    <template #images>
      <ImageWrapper country="roemenie" image-name="bicaz"/>
      <ImageWrapper country="roemenie" image-name="boekarest"/>
      <ImageWrapper country="roemenie" image-name="bucovina"/>
      <ImageWrapper country="roemenie" image-name="maramures"/>
      <ImageWrapper country="roemenie" image-name="maramures2"/>
      <ImageWrapper country="roemenie" image-name="maramures3"/>
      <ImageWrapper country="roemenie" image-name="pelisor"/>
      <ImageWrapper country="roemenie" image-name="prejmer"/>
      <ImageWrapper country="roemenie" image-name="sapanta"/>
      <ImageWrapper country="roemenie" image-name="sinaia"/>
      <ImageWrapper country="roemenie" image-name="wijnfeest"/>
      <ImageWrapper country="roemenie" image-name="wijnkoning"/>
    </template>

    <template #long-text>
      Roemenië: voor velen onbekend, dus onbemind. Een land met een prachtige natuur. Een derde is bergachtig, met
      toppen over de 2000 meter: de Karpaten. Al het water vloeit er richting Donau, door nauwe kloven, in brede
      valleien. De machtige stroom vormt de grens met Servië en Bulgarije en mondt uit in de Zwarte Zee. De Donaudelta,
      een waaier van grote en kleine kanalen, een vogelparadijs met een rijke flora en fauna, beschermd als “Reservaat
      van de Biosfeer”.
      <br><br>
      Het leven op het platteland is soms een stap terug in het verleden. Werken op het veld is er zware arbeid. Maar
      veel mensen zijn er open, vriendelijk en uiterst gastvrij.
      <br><br>
      Roemenië, een land met een bewogen geschiedenis, overspoeld door vele verschillende volkeren: Daciërs, overwonnen
      door de Romeinen, zoals de naam en de taal laten vermoeden. Later kwamen er ook Saksen en Hongaren, Turken en
      Slaven en een niet onbelangrijke groep Roma.
      <br><br>
      Roemenië, multicultureel en meertalig lappendeken, heeft veel te bieden:
      <ul>
        <li>De Saksische, middeleeuwse steden van Transsylvanië met de typische weerkerken.</li>
        <li>De houten kerkjes en folklore van Maramureş</li>
        <li>De kerken van Bukovina, Moldavië, van binnen en van buiten beschilderd met fresco’s.</li>
        <li>De kastelen en burchten in dit land van Vlad Tepeş, alias Dracula.</li>
        <li>De hoofdstad Boekarest: de oude stad, het Ceauşescu-verleden en de revolutie.</li>
      </ul>
      <br>
      Roemenië bezit een derde van alle minerale en warmwaterbronnen van Europa. Niet minder dan 3000 zijn er, verspreid
      over het hele land. In het begin van onze jaartelling hadden de Romeinen reeds een aantal bronnen tot kuuroord
      uitgebouwd. Vandaag de dag zijn er een 70-tal kuuroorden met water waaraan allerlei geneeskrachtige eigenschappen
      worden toegeschreven.
      <br><br>
      En Roemenië is een belangrijke wijnproducent. Mooi meegenomen!
    </template>
  </CountryView>
</template>

<style scoped>

</style>
