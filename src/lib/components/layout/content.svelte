<script lang="ts">
  const items = [
    "AI code assistants",
    "CDE adoption journeys",
    "Secret management",
    "Ephemeral databases",
    "Secure remote access",
    "Next-gen editors",
  ];
</script>

<div
  class="mt-xx-large md:mt-xxx-large max-w-7xl w-11/12 mx-auto"
  id="partners"
>
  <div class="flex flex-col gap-10 text-left">
    <h1 class="text-7xl md:text-8xl font-normal text-headlines">Content</h1>

    <p class="text-xl">What topics can you expect?</p>

    <div class="flex flex-wrap gap-4 w-3/4">
      {#each items as item}
        <p
          class="border-blue border-2 m-0 rounded-xl px-4 py-2 font-medium text-white"
        >
          {item}
        </p>
      {/each}
    </div>
  </div>
</div>
