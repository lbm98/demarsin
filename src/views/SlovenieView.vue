<script setup lang="ts">

import ImageWrapper from "../components/ImageWrapper.vue"
import CountryView from "../components/CountryView.vue"
</script>

<template>
  <CountryView>
    <template #title>
      Slovenië
    </template>

    <template #short-text>
      <p>Slovenië biedt adembenemende landschappen, prachtige grotten, glooiende wijngaarden… en stille getuigen van een
        bewogen geschiedenis. Slovenië, het meest welvarende deel van het Joegoslavië onder Tito, verklaarde zich
        onafhankelijk in 1991. Het land trad toe tot de EU in 1994 en tot de eurozone in 2007.

        De Alpen vormen de grens met Oostenrijk met als hoogste top de Triglav (2864 m). We bezoeken Bled, de grotten
        van Postojna en Škocjan en de lipizzanerpaarden te Lipica. Er is 50 km kust met de Venetiaanse stadjes Koper,
        Izola en Piran.

        Uiteraard bezoeken we Ljubljana, als Europese hoofdstad klein maar fijn. In Maribor groeit, naar men zegt, de
        oudste wijnstok ter wereld. Een goede reden om de druiven feestelijk te oogsten.</p>
    </template>

    <template #images>
      <ImageWrapper country="slovenie" image-name="bled"/>
      <ImageWrapper country="slovenie" image-name="feest"/>
      <ImageWrapper country="slovenie" image-name="julische"/>
      <ImageWrapper country="slovenie" image-name="kamnische"/>
      <ImageWrapper country="slovenie" image-name="lipica"/>
      <ImageWrapper country="slovenie" image-name="ljubljana"/>
      <ImageWrapper country="slovenie" image-name="maribor"/>
      <ImageWrapper country="slovenie" image-name="piran"/>
      <ImageWrapper country="slovenie" image-name="pletna"/>
      <ImageWrapper country="slovenie" image-name="postojna"/>
      <ImageWrapper country="slovenie" image-name="predjama"/>
      <ImageWrapper country="slovenie" image-name="wijngaarden"/>
    </template>

    <template #long-text>
      Slovenië bekoort de bezoeker met adembenemende berglandschappen, prachtige grotten, glooiende wijngaarden… En
      daarin staan de stille getuigen van een bewogen geschiedenis. Het kleine gebied ten zuiden van de Alpen kwam in
      handen van Romeinen, Franken en Magyaren. Daarna behoorde het gebied 600 jaar lang, tot het einde van WO I, tot de
      Habsburgse dynastie. Ook de recente geschiedenis van Slovenië, de periode van de twee wereldoorlogen en daarna als
      deel van Joegoslavië, heeft sporen nagelaten. Aan oorlogsmonumenten is er geen gebrek.
      <br><br>
      Slovenië, het meest welvarende deel van het Joegoslavië onder Tito, verklaarde zich onafhankelijk in 1991. Het
      land trad toe tot de EU in 1994 en tot de eurozone in 2007.
      <br><br>
      Slovenië is een derde kleiner dan België en telt slechts 2 miljoen inwoners. De Alpen vormen de grens met
      Oostenrijk. Het hooggebergte, met als hoogste top de Triglav (2864 m), is een natuurgebied, een paradijs voor
      wandelaars en liefhebbers van adrenalinesporten.
      <br><br>
      Slovenië is een derde kleiner dan België en telt slechts 2 miljoen inwoners. De Alpen vormen de grens met
      Oostenrijk. Het hooggebergte, met als hoogste top de Triglav (2864 m), is een natuurgebied, een paradijs voor
      wandelaars en liefhebbers van adrenalinesporten.
      <br><br>
      Uiteraard bezoeken we Ljubljana, als Europese hoofdstad klein maar fijn. Barok, Art Nouveau, Socialistisch
      Realisme... tot hippiecultuur, je vindt het er allemaal.
      <br><br>
      In Maribor was Europese Culturele Hoofdstad in 2012. Hier groeit, naar men beweert, de oudste wijnstok ter wereld.
      Een goede reden om deze druiven in een feestelijke sfeer te oogsten.
      <br><br>
    </template>
  </CountryView>
</template>

<style scoped>

</style>
