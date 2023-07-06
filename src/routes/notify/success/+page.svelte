<script lang="ts">
  import PrimaryButton from "$lib/components/library/primary-button.svelte";
</script>

<div class="flex flex-col gap-8 items-center text-center mt-32">
  <h1 class="text-5xl md:text-8xl font-normal">You're signed up</h1>
  <p class="text-md md:text-2xl max-w-md md:max-w-[546px]">
    We'll email you when we have more information about next year's CDE
    Universe.
  </p>
  <PrimaryButton
    href="https://www.gitpod.io/cde"
    text="Gitpod's 8 Principles of CDEs"
  />
</div>
