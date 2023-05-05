<script>
  import PrimaryButton from "../library/primary-button.svelte";
  import GitpodLight from "../svgs/gitpod-light.svelte";
  import Pebblebed from "../svgs/pebblebed.svelte";
</script>

<div
  class="mt-xx-large md:mt-xxx-large max-w-7xl w-11/12 mx-auto"
  id="partners"
>
  <div class="flex flex-col gap-10 text-left">
    <h1 class="text-7xl md:text-8xl font-normal text-headlines">Partners</h1>

    <div class="flex items-center gap-8 grayscale justify-start">
      <div class="w-36"><GitpodLight /></div>
      <div class="w-36"><Pebblebed /></div>
    </div>

    <p class="text-xl">
      CDE Universe is supported by ecosystem partners.
    </p>
  </div>
</div>
