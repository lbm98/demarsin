<script setup lang="ts">
const trailers = [
  {
    url: "https://youtu.be/pZf_7d6H8Io",
    title: "IERLAND trailer"
  },
  {
    url: "https://youtu.be/BlWkMD-Qwns",
    title: "NOORWEGEN trailer"
  },
  {
    url: "https://youtu.be/Sqr07CiYehY",
    title: "BALEAREN trailer"
  },
  {
    url: "https://youtu.be/5ohluspZ3Vc",
    title: "MADEIRA trailer"
  },
  {
    url: "https://youtu.be/6d5iWEeWwFc",
    title: "SURINAME trailer"
  },
  {
    url: "https://youtu.be/zeXRbzUQW8U",
    title: "SLOVENIE trailer"
  },
  {
    url: "https://youtu.be/YzRzbV30Rrg",
    title: "KRETA & SANTORINI"
  },
  {
    url: "https://youtu.be/LRtJtrP09Is",
    title: "BALTISCHE STATEN"
  },
  {
    url: "https://youtu.be/VinJ029BNQc",
    title: "BALTICS BY DRONE"
  },
  {
    url: "https://youtu.be/iw3ippiPTOs",
    title: "winter in TROMSØ"
  },
  {
    url: "https://youtu.be/d9FsC8EOW3g",
    title: "TAIWAN"
  },
]

</script>

<template>
  <div>
    <p class="text-2xl text-center mt-6">TRAILERS</p>

    <p class="text-xl mt-10 ml-32 max-w-3xl">
      Deze trailers bevatten vaste fotografie, video, achtergrondgeluiden en muziek van het land, maar nog geen
      commentaar. In de definitieve voorstellingen is de gesproken tekst uiteraard zeer belangrijk. Dan worden foto,
      video
      en geluid aaneengeregen met een commentaar die de toeschouwers kan boeien.
      <br><br>
      De beeld-en geluidskwaliteit van onze voorstellingen is veel hoger dan de beeld-en geluidskwaliteit van deze
      trailers. Daarvoor gebruiken wij de meest geschikte hoogwaardige apparatuur.
    </p>

    <div class="ml-32 mt-10 flex flex-col gap-3 text-xl mb-5">
      <div
          v-for="trailer in trailers"
          :key="trailer.url"
          class="flex"
      >

        <a :href="trailer.url" class="w-52">{{ trailer.title }}</a>
        <a :href="trailer.url">{{ trailer.url }}</a>

      </div>
    </div>

  </div>
</template>

<style scoped></style>
