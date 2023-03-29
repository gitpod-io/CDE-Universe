<script lang="ts">
  import Waitlist from "$lib/components/layout/waitlist.svelte";
  import Faqs from "$lib/components/layout/faqs.svelte";
  import { faqs } from "$lib/data";
</script>

<div class="max-w-5xl mx-auto space-y-36 pt-16 pb-36">
  <Waitlist />
  <Faqs {faqs} />
</div>
