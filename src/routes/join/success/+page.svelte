<script lang="ts">
  import PrimaryButton from "$lib/components/library/primary-button.svelte";
</script>

<div class="flex flex-col gap-8 items-center text-center mt-32">
  <h1 class="text-5xl md:text-8xl font-normal">You're signed up</h1>
  <p class="text-md md:text-xl max-w-lg">
    We'll get back to you shortly via email to let you know if you got one of
    the limited tickets.
  </p>
  <PrimaryButton
    href="https://www.gitpod.io/cde"
    text="Learn more about CDEs"
  />
</div>
