<script lang="ts">
  import type { FAQ } from "$lib/types/faq";

  export let faqs: FAQ[];
</script>

<div class="flex flex-col items-center space-y-8">
  <h1 class="font-bold text-4xl">FAQs</h1>

  <div class="grid gap-x-8 gap-y-10 grid-flow-row-dense grid-cols-2">
    {#each faqs as faq}
      <div class="max-w-sm">
        <h4 class="font-bold text-xl">{faq.title}</h4>
        <p class="text-lg">{faq.description}</p>
      </div>
    {/each}
  </div>
</div>
