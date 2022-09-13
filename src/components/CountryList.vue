<script setup>
import CountryItem from "@/components/CountryItem.vue";
</script>

<template>
  <div class="country-list">

    <CountryItem>
      <template #title>
        Balearen
      </template>

      <template #image>
        <img class="image" src="@/assets/home/balearen.jpg"/>
      </template>

      <template #content>
        <p>Een eigen historische ontwikkeling en de verschillen in reliëf en neerslag maken elk eiland weer anders.</p>
        <p>Majorca, het grootste eiland, heeft de meest gevarieerde natuur.</p>
        <p>De hoofdplaats Palma getuigt van een welvarend verleden ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/balearen">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Baltische Staten
      </template>

      <template #image>
        <img class="image" src="@/assets/home/baltischestaten.jpg"/>
      </template>

      <template #content>
        <p>De zingende revolutie, een mensenketting, 600 km lang, van Tallinn over Riga tot Vilnius.</p>
        <p>Zo konden Estland, Letland en Litouwen hun vrijheid terugwinnen in 1991.</p>
        <p>De historische centra van de drie hoofdsteden zijn UNESCO werelderfgoed ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/baltische-staten">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Ierland
      </template>

      <template #image>
        <img class="image" src="@/assets/home/ierland.jpg"/>
      </template>

      <template #content>
        <p>IJs, wind en water vormden het prachtige Ierse landschap.</p>
        <p>De invloed van de Golfstroom geeft Ierland zijn groene kleur.</p>
        <p>Kelten en Vikings drukten hun stempel op de Ierse Cultuur ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/ierland">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Kreta Santorini
      </template>

      <template #image>
        <img class="image" src="@/assets/home/kretasantorini.jpg"/>
      </template>

      <template #content>
        <p>De Griekse mythologie getuigt van grote vindingrijkheid en verbeeldingskracht.</p>
        <p>De ontdekking van het paleis te Knossos in het begin van de 20ste eeuw heeft de mythe dichter bij de werkelijkheid gebracht.</p>
        <p>In het eerste deel verkennen we Kreta en Santorini met de geschiedenis als rode draad ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/kreta-santorini">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Noorwegen
      </template>

      <template #image>
        <img class="image" src="@/assets/home/noorwegen.jpg"/>
      </template>

      <template #content>
        <p>Het zuiden van Noorwegen is een gebied met bergen en hoogplateaus, met dalen en met diepe fjorden.</p>
        <p>We trekken door Jotunheimen en langs de Sognefjord, waar de mooiste stavkerkjes staan.</p>
        <p>We bezoeken de steden Oslo en Bergen, het pittoreske stadje Stavanger, de art nouveau-stad Ålesund en Trondheim ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/noorwegen">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Slovenie
      </template>

      <template #image>
        <img class="image" src="@/assets/home/slovenie.jpg"/>
      </template>

      <template #content>
        <p>Slovenië biedt adembenemende landschappen, prachtige grotten, glooiende wijngaarden en stille getuigen van een bewogen geschiedenis.</p>
        <p>Slovenië, het meest welvarende deel van het Joegoslavië onder Tito, verklaarde zich onafhankelijk in 1991.</p>
        <p>Het land trad toe tot de EU in 1994 en tot de eurozone in 2007 ... </p>
      </template>

      <template #link>
        <router-link class="country-link" to="/slovenie">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Suriname
      </template>

      <template #image>
        <img class="image" src="@/assets/home/suriname.jpg"/>
      </template>

      <template #content>
        <p>Suriname, Zuid-Amerika, bijna op de evenaar, en toch: hier spreekt men Nederlands!</p>
        <p>Het half miljoen Surinamers woont vooral in de kuststrook en in de hoofdstad Paramaribo, UNESCO Werelderfgoed.</p>
        <p>Suriname is beslist een rijk land, althans wat de bodem betreft ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/suriname">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Taiwan
      </template>

      <template #image>
        <img class="image" src="@/assets/home/taiwan.jpg"/>
      </template>

      <template #content>
        <p>In de zestiende eeuw ontdekten Portugese zeevaarders een mooi eiland en noemden het "Ilha Formosa", het huidige Taiwan.</p>
        <p>De hoofdstad Taipei is een grootstad met hoge torengebouwen, brede lanen, ruime parken en pleinen,</p>
        <p>zeer druk verkeer maar met een modern en vlot transportsysteem ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/taiwan">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Azoren
      </template>

      <template #image>
        <img class="image" src="@/assets/home/azoren.jpg"/>
      </template>

      <template #content>
        <p>Halfweg tussen Portugal en New York ligt een bijna vergeten eilandengroep,</p>
        <p>vulkanen waarvan de toppen boven het water van de Atlantische Oceaan uitsteken.</p>
        <p>Door de overvloedige neerslag en de gematigde temperatuur hebben de Azoren een uitzonderlijk weelderige plantengroei ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/azoren">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        China
      </template>

      <template #image>
        <img class="image" src="@/assets/home/china.jpg"/>
      </template>

      <template #content>
        <p>China, de gesloten wereld van weleer, is resoluut de snelweg van de modernisering ingeslagen.</p>
        <p> Op veel plaatsen dreigt de sfeer van het traditionele China te verdwijnen ... </p>
      </template>

      <template #link>
        <router-link class="country-link" to="/china">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        IJsland
      </template>

      <template #image>
        <img class="image" src="@/assets/home/ijsland.jpg"/>
      </template>

      <template #content>
        <p>De kredietcrisis en vooral de aswolk van de vulkaan Eyjafjallajökull, hebben IJsland in het nieuws gebracht.</p>
        <p>De plaats waar de Noorman Ingolfur Arnarson in 874 zijn boerderij optrok,</p>
        <p>groeide uit tot de hoofdstad, Reykjavik ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/ijsland">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Madeira
      </template>

      <template #image>
        <img class="image" src="@/assets/home/madeira.jpg"/>
      </template>

      <template #content>
        <p>Medeira, parel in de Atlantische Oceaan, drijvende tuin, bloemenparadijs...</p>
        <p>Deze omschrijvingen dankt het eiland aan zijn mild klimaat.</p>
        <p>Madeira werd een druk centrum voor de handel in suiker en kleurstoffen ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/madeira">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Nieuw-Zeeland
      </template>

      <template #image>
        <img class="image" src="@/assets/home/nieuw-zeeland.jpg"/>
      </template>

      <template #content>
        <p>Aotearoa, land van de lange witte wolk, zo noemden de Maori’s hun land.</p>
        <p>Twee derden van de Nieuw-Zeelanders, de Kiwi's, wonen op het Noordereiland,</p>
        <p>met Wellington en Auckland als belangrijkste steden ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/nieuw-zeeland">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Roemenie
      </template>

      <template #image>
        <img class="image" src="@/assets/home/roemenie.jpg"/>
      </template>

      <template #content>
        <p>Roemenië, voor velen onbekend, dus onbemind. Een land met een prachtige natuur.</p>
        <p>Een derde is bergland, met toppen over de 2000 meter: de Karpaten.</p>
        <p>Al het water vloeit er richting Donau, door nauwe kloven en in brede valleien ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/roemenie">Meer</router-link>
      </template>
    </CountryItem>

    <CountryItem>
      <template #title>
        Portugal
      </template>

      <template #image>
        <img class="image" src="@/assets/home/portugal.jpg"/>
      </template>

      <template #content>
        <p>Portugal, van noord tot zuid.</p>
        <p>Noord-Portugal, Beiras, Vale do Tejo, Alentejo en zeker Algarve</p>
        <p>zijn populaire vakantiebestemmingen voor zonnekloppers en liefhebbers van natuurschoon ...</p>
      </template>

      <template #link>
        <router-link class="country-link" to="/portugal">Meer</router-link>
      </template>
    </CountryItem>
  </div>
</template>

<style scoped>
.country-link {
  position: absolute;
  margin-top: 10px;
  padding: 2px 5px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: black;
  font-size: 24px;
}

.country-link:hover {
 background-color: #D9D9D9;
}

.image {
  height: 100%;
  object-fit: contain;
}

.country-link {
  position: absolute;
  margin-top: 10px;
  padding: 2px 5px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: black;
  font-size: 24px;
}

.country-list {
  padding-left: 50px;
  width: 100%;
  background-color: #EDEDED;
}
</style>