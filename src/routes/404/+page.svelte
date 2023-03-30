<script lang="ts">
  import PrimaryButton from "$lib/components/library/primary-button.svelte";
</script>

<div class="flex flex-col items-center mt-32">
  <div
    class="relative flex mb-16 items-center justify-center rounded-full bg-404"
  >
    <h1 class="h1 absolute text-h1 font-normal leading-[7.5rem] text-headlines">
      404
    </h1>
  </div>
  <p class="mb-x-small">You just hit a route that doesn't exist</p>
  <PrimaryButton href="/" text="Back to safety" />
</div>
