<script lang="ts">
  import PrimaryButton from "../library/primary-button.svelte";

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

  <div class="flex flex-wrap gap-4 md:justify-center">
    {#each items as item}
      <p
        class="border-blue border-2 m-0 rounded-xl px-4 py-2 font-medium text-white"
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

  <div class="items-start md:w-fit mx-auto">
    <p class="text-xl font-bold text-white">Attend Conference</p>
    <p class="mt-1">Limited tickets are available now.</p>

    <div class="mt-6 inline-flex">
      <PrimaryButton
        href="https://www.eventbrite.co.uk/e/cde-universe-2023-cloud-development-conference-by-gitpod-tickets-626052498877"
        text="Buy tickets for $60"
      />
    </div>
  </div>
</div>
