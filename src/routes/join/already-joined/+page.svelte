<script lang="ts">
  import PrimaryButton from "$lib/components/library/primary-button.svelte";
  import OpenGraph from "$lib/components/library/open-graph.svelte";
</script>

<OpenGraph
  data={{
    title: "You've already signed up",
    description:
      "Your email is already in the waitlist. Just lean back, you will hear from us soon",
  }}
/>

<div class="flex flex-col gap-8 items-center text-center mt-32">
  <h1 class="text-5xl md:text-8xl font-normal">You've already signed up</h1>
  <p class="text-md md:text-2xl max-w-md md:max-w-[546px]">
    Your email is already in the waitlist. Just lean back, you will hear from us
    soon. If you have any questions, please reach out to us via <a
      href="mailto:pauline@gitpod.io>">email</a
    >.
  </p>
  <PrimaryButton
    href="https://www.gitpod.io/cde"
    text="Learn more about CDEs"
  />
</div>
