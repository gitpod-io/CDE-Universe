<script lang="ts">
  import Waitlist from "$lib/components/layout/waitlist/waitlist.svelte";
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<div class="max-w-5xl mx-auto pt-16">
  <Waitlist {form} />
</div>
