<script lang="ts">
  import LinkButton from "$lib/components/library/link-button.svelte";
  import CDEUniverse from "$lib/components/svgs/cde-universe.svelte";
  import showMobileMenu from "$lib/stores/mobile-menu";

  let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />
<nav
  class:scrolled-out={scroll > 10}
  class="sticky top-0 z-20 mx-auto w-full border-b border-t-0 border-solid border-transparent bg-bg"
>
  <div
    class:bg-box={$showMobileMenu}
    class="flex flex-wrap justify-between px-4 py-4 transition-none lg:px-small"
  >
    <!-- <Devx /> -->
    <CDEUniverse />
    <div class="hidden items-center gap-x-small lg:flex">
      <!-- TODO: Update URL when ready -->
      <LinkButton href="/" text="Join waitlist" />
    </div>
  </div>
</nav>

<style lang="postcss">
  .scrolled-out {
    @apply border-b border-sub bg-nav;
    backdrop-filter: blur(2px);
  }
</style>
