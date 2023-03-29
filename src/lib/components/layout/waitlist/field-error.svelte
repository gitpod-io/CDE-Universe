<script lang="ts">
  export let error: string[] | undefined;
</script>

{#if error && error.length}
  <p class="text-red-400">
    {error[0]}
  </p>
{/if}
