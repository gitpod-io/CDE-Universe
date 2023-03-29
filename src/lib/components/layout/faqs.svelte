<script lang="ts">
  import type { FAQ } from "$lib/types/faq";

  export let faqs: FAQ[];
</script>

<div class="flex flex-col items-center space-y-8">
  <h1 class="font-bold text-4xl">FAQs</h1>

  <div class="flex flex-wrap justify-between gap-16">
    {#each faqs as faq}
      <div class="max-w-sm">
        <h4 class="font-bold text-xl">{faq.title}</h4>
        <p class="text-lg">{faq.description}</p>
      </div>
    {/each}
  </div>
</div>
