<script lang="ts">
  const details = [
    {
      title: "Discover Pebblebed",
      description:
        "Located in the heart of the Mission, Pebblebed is a former production studio. Today, it serves as a community space for artists, tinkerers, and builders. Its interior is one-of-a-kind in San Francisco and the perfect location for CDE Universe.\n\nThere will be a main room with a conference stage as well as several breakout areas to mingle and have discussions.",
    },
    {
      title: "Fun, Food & Drinks",
      description:
        "CDE Universe is about meeting the DevX community and forging lasting connections. Next to the talks, we'll have time for connection and fun (did someone say there will be skateboards?)\n\nWe'll offer dinner (Thursday), lunch (Friday) and snacks and refreshments throughout the conference. To close out the first day, there will be drinks with craft beer, wine, and non-alcoholic drinks.",
    },
  ];
</script>

<div class="mt-xx-large md:mt-xxx-large max-w-7xl w-11/12 mx-auto space-y-10">
  <h1 class="text-7xl md:text-8xl font-normal text-headlines">The venue</h1>

  <img
    class="translate-y-40 mx-auto  w-80 h-52 md:h-full object-cover rounded-3xl"
    src="/images/venue/cde-universe-banner.webp"
    alt="Venue"
  />
  <div
    class="flex flex-col md:grid grid-cols-2 grid-rows-2 gap-4 md:max-h-[600px]"
  >
    <img
      class="row-span-2 w-full h-52 md:h-full object-cover rounded-3xl"
      src="/images/venue/one.webp"
      alt="Venue"
    />

    <img
      class="w-full h-52 md:h-full object-cover rounded-3xl"
      src="/images/venue/two.webp"
      alt="Venue"
    />

    <img
      class="w-full h-52 md:h-full object-cover rounded-3xl"
      src="/images/venue/three.webp"
      alt="Venue"
    />
  </div>

  <div class="flex flex-wrap gap-8">
    {#each details as { title, description }}
      <div class="max-w-sm">
        <h4 class="font-bold text-xl mb-2 md:mb-4">{title}</h4>
        <p class="text-lg whitespace-pre-wrap">{description}</p>
      </div>
    {/each}
  </div>
</div>
