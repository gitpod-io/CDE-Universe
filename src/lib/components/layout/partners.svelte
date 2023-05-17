<script>
  import GitpodLight from "../svgs/gitpod-light.svelte";
  import Sourcegraph from "../svgs/sourcegraph.svelte";
  import JetBrains from "../svgs/jetbrains.svelte";
</script>

<div
  class="mt-xx-large md:mt-xxx-large max-w-7xl w-11/12 mx-auto"
  id="partners"
>
  <div class="flex flex-col gap-10 text-left">
    <h1 class="text-7xl md:text-8xl font-normal text-headlines">Partners</h1>

    <div class="flex items-center gap-8 justify-start flex-wrap">
      <div class="w-36"><GitpodLight /></div>
      <div class="w-36">
        <img src="/images/pebblebed.webp" alt="Pebblebed" />
      </div>
      <div class="w-36"><Sourcegraph /></div>
      <div class="w-36 ml-4 md:ml-8 justify-center"><JetBrains /></div>
    </div>

    <p class="text-xl">CDE Universe is supported by ecosystem partners.</p>
  </div>
</div>
