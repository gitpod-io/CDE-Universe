<script lang="ts">
  import Waitlist from "$lib/components/layout/waitlist/waitlist.svelte";
  import Faqs from "$lib/components/layout/faqs.svelte";
  import type { ActionData } from "./$types";
  import { faqs } from "$lib/data";

  export let form: ActionData;
</script>

<div class="max-w-5xl mx-auto space-y-36 pt-16 pb-20 md:pb-36">
  <Waitlist {form} />
  <Faqs {faqs} />
</div>
