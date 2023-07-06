<script lang="ts">
  import PrimaryButton from "$lib/components/library/primary-button.svelte";
  import OpenGraph from "$lib/components/library/open-graph.svelte";
</script>

<OpenGraph
  data={{
    title: "Successfully subscribed to CDE Universe",
    description:
      "You will hear from us once we have any updates on the next events. Make sure not to miss the next CDE universe.",
  }}
/>
<div class="flex flex-col items-center mb-12 mx-auto">
  <h1
    class="font-bold md:font-extrabold text-[64px] leading-none mb-4 max-w-xl"
  >
    Get notified
  </h1>
  <p class="text-base md:text-lg !mx-auto max-w-xl">
    Make sure not to miss the next CDE universe.
  </p>
</div>
<div
  class="rounded-[40px] border-rose border-[10px] px-8 md:px-14 py-14 max-w-2xl mx-auto"
>
  <h1 class="font-bold max-w-xl text-h4 leading-none mb-6 mx-auto">Done.</h1>
  <p class="mb-14">
    You will hear from us once we have any updates on the next events.
  </p>
  <PrimaryButton href="https://www.gitpod.io/cde" text="Lear more about CDEs" />
</div>
