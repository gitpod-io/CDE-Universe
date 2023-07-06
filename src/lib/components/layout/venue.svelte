<script lang="ts">
  const details = [
    {
      title: "Discover Pebblebed",
      description:
        "Located in the heart of the Mission, Pebblebed is a former production studio. Today, it serves as a community space for artists, tinkerers, and builders. Its interior is one-of-a-kind in San Francisco and was the perfect location for CDE Universe.\n\nAlongside the main room with the conference stage, there were several breakout areas to mingle and have discussions.",
    },
    {
      title: "Fun, food & drinks",
      description:
        "CDE Universe is about meeting the DevX community and forging lasting connections. Next to the talks, we had time for connection and fun (did someone say there will be skateboards?).\n\nWe offered dinner (Thursday), lunch (Friday) and snacks and refreshments throughout the conference. We closed out the first day with craft beer, wine, and non-alcoholic drinks.",
    },
  ];
</script>

<div class="mt-xx-large md:mt-xxx-large max-w-7xl w-11/12 mx-auto space-y-2">
  <h1 class="text-7xl md:text-8xl font-normal text-headlines mb-8 md:mb-12">
    Past event
  </h1>

  <img
    class="translate-y-24 mx-auto w-80 h-52 md:h-full object-cover rounded-3xl hidden md:block"
    src="/images/venue/cde-universe-banner.webp"
    alt="Venue"
  />
  <div
    class="flex flex-col md:flex-row md:h-[668.12px] justify-start items-start gap-4 md:inline-flex"
  >
    <div
      class="flex flex-wrap flex-col justify-end items-start gap-4 md:inline-flex"
    >
      <img
        class="w-full md:h-[356px] rounded-2xl object-contain"
        src="/images/venue/one.webp"
        alt="Talks at CDE Universe"
      />
      <img
        class="w-full md:h-[296.12px] rounded-2xl object-contain"
        src="/images/venue/two.webp"
        alt="Gitpodders at CDE Universe"
      />
    </div>
    <div
      class="flex flex-col flex-wrap justify-end items-start gap-4 md:inline-flex"
    >
      <img
        class="w-full h-52 object-cover sm:object-contain md:h-[468.04px] rounded-2xl"
        src="/images/venue/three.webp"
        alt="Gitpodder holding CDE Universe skateboard"
      />
      <img
        class="w-full object-contain md:h-[183.15px] rounded-2xl"
        src="/images/venue/four.webp"
        alt="Attendees at CDE Universe"
      />
    </div>
  </div>

  <div class="flex flex-wrap gap-8 pt-8 md:pt-12">
    {#each details as { title, description }}
      <div class="max-w-sm">
        <h4 class="font-bold text-xl mb-2 md:mb-4">{title}</h4>
        <p class="text-lg whitespace-pre-wrap">{description}</p>
      </div>
    {/each}
  </div>
</div>
