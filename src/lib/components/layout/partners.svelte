<script>
  import PrimaryButton from "../library/primary-button.svelte";
  import GitpodLight from "../svgs/gitpod-light.svelte";
  import Pebblebed from "../svgs/pebblebed.svelte";
</script>

<div class="mt-x-large md:mt-xxx-large" id="partners">
  <div class="flex flex-col gap-10 text-center md:text-left">
    <h1 class="text-7xl md:text-8xl font-normal">Partners</h1>

    <div
      class="flex items-center gap-8 grayscale justify-center md:justify-start"
    >
      <div class="w-36"><GitpodLight /></div>
      <div class="w-36"><Pebblebed /></div>
    </div>

    <p class="text-xl">
      CDE Universe is supported by ecosystem partners.<br />
      It's free for participants.
    </p>

    <div class="flex items-center gap-4 justify-center md:justify-start">
      <PrimaryButton text="Become a partner" />
      <PrimaryButton isDisabled={true} text="View Partner Program" />
    </div>
  </div>
</div>
