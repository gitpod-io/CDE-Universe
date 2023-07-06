<script lang="ts">
  const items = [
    "CDE adoption journeys",
    "AI code assistants",
    "Next-Gen editors",
    "Ephemeral databases",
    "Generative AI",
    "Secure remote access",
    "Secrets management",
    "Developer productivity",
  ];
</script>

<div class="mt-xx-large md:mt-xxx-large max-w-7xl w-11/12 mx-auto space-y-10">
  <h1 class="text-6xl font-normal text-headlines md:text-center">All about</h1>

  <div class="flex-wrap gap-4 md:justify-center grid grid-cols-2 md:flex">
    {#each items as item}
      <p
        class="border-blue border-2 m-0 rounded-xl text-center px-2 md:px-4 py-2 font-medium text-white"
      >
        {item}
      </p>
    {/each}
  </div>

  <img
    src="/images/skateboard.webp"
    alt="CDE Universe Skateboard"
    class="pt-4 md:pt-8 pb-2"
  />
</div>
