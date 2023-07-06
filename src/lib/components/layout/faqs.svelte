<script lang="ts">
  import type { FAQ } from "$lib/types/faq";
  import OpenGraph from "$lib/components/library/open-graph.svelte";
  export let faqs: FAQ[];
  export let large = false;
</script>

<OpenGraph
  data={{
    title: "FAQs | CDE Universe",
    description: "FAQs about CDE Universe 2023",
  }}
/>

<div class="flex flex-col items-left md:items-center gap-16">
  <h1 class="font-bold text-4xl" class:text-6xl={large}>FAQs</h1>

  <div
    class="grid gap-x-12 md:gap-x-[120px] gap-y-12 grid-flow-row-dense grid-cols-1 md:grid-cols-2"
  >
    {#each faqs as faq}
      <div class="max-w-sm">
        <h4 class="font-bold text-xl mb-2 md:mb-4">{faq.title}</h4>
        <p class="text-lg whitespace-pre-wrap">{@html faq.description}</p>
      </div>
    {/each}
  </div>
</div>
