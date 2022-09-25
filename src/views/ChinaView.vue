<script setup lang="ts">

import ImageWrapper from "../components/ImageWrapper.vue"
import CountryView from "../components/CountryView.vue"
</script>

<template>
  <CountryView>
    <template #title>
      China
    </template>

    <template #images>
      <ImageWrapper country="china" image-name="badaling"/>
      <ImageWrapper country="china" image-name="beijing"/>
      <ImageWrapper country="china" image-name="chengdu"/>
      <ImageWrapper country="china" image-name="dafowan"/>
      <ImageWrapper country="china" image-name="datong"/>
      <ImageWrapper country="china" image-name="lijiang"/>
      <ImageWrapper country="china" image-name="pingyao"/>
      <ImageWrapper country="china" image-name="terracotta"/>
      <ImageWrapper country="china" image-name="tibet"/>
      <ImageWrapper country="china" image-name="xian"/>
      <ImageWrapper country="china" image-name="yangshuo"/>
      <ImageWrapper country="china" image-name="yao"/>
    </template>

    <template #long-text>
      China, de gesloten wereld van weleer, is resoluut de snelweg van de modernisering ingeslagen. De bezoeker moet
      zich haasten, want op veel plaatsen dreigt de sfeer van het traditionele China te verdwijnen. Anderzijds worden de
      belangrijke cultuurmonumenten gerestaureerd.
      <br><br>
      We bezoeken belangrijke steden:
      <ul>
        <li>
          Beijing, waar de Hutongs in snel tempo verdwijnen; toch valt er nog veel moois te bewonderen: de Verboden
          Stad,
          de tempel van de Hemel, de Chinese Muur…
        </li>
        <li>
          Xi’an, sedert 1974 wereldberoemd omwille van het Terracotta leger, de keizerlijke garde voor Keizer Qin
          Shihuang.
        </li>
        <li>
          Shanghai, de grootste stad van China, van oudsher een druk handelscentrum.
        </li>
        <li>
          Hong Kong en Macau, voormalige kolonies, staan sedert de negentiger jaren opnieuw onder Chinees bestuur.
        </li>
        <li>
          Chengdu, poort tot Tibet, stad met vele theehuizen en een pandareservaat.
        </li>
        <li>
          De steden Qufu, Nanjing, Suzhou, Luoyang, Datong, Lijiang, Dali..., cultuurhistorisch belangrijke plaatsen.
        </li>
      </ul>
      <br>
      Uiteraard hebben we ook oog voor de natuur:
      <ul>
        <li>
          Huashan, Taishan, Huangshan... het zijn heilige bergen die pelgrims en wandelaars aantrekken; het zijn bergen
          die heel wat schilders en dichters hebben geïnspireerd.
        </li>
        <li>
          Een boottocht door de drie kloven van de Yangtze en op de Li rivier in de omgeving van Guilin.
        </li>
        <li>
          De rotsformaties van het Stenen Woud nabij Kunming.
        </li>
        <li>
          Ook een greep uit onze reisherinneringen toen we van Chengdu (China) met een 4x4 door Tibet naar Lhasa reden.
        </li>
      </ul>
    </template>
  </CountryView>
</template>

<style scoped>

</style>
