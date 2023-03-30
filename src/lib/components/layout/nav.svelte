<script lang="ts">
  import SecondaryButton from "$lib/components/library/secondary-button.svelte";
  import CDEUniverse from "$lib/components/svgs/cde-universe.svelte";
  import showMobileMenu from "$lib/stores/mobile-menu";

  let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />
<nav
  class:scrolled-out={scroll > 10}
  class="sticky top-0 z-20 mx-auto w-full border-b border-t-0 border-solid border-transparent"
>
  <div
    class:bg-box={$showMobileMenu}
    class="relative mt-2 md:mt-4 flex flex-wrap justify-between px-4 md:px-large py-4 transition-none w-full mx-auto"
  >
    <CDEUniverse />

    <div class="hidden items-center gap-x-small lg:flex">
      <SecondaryButton
        href="/join"
        text="Join the waitlist"
        isDisabled={false}
      />
    </div>
    <div class="lg:hidden items-center  flex">
      <SecondaryButton href="/join" text="Join" isDisabled={false} />
    </div>
  </div>
</nav>

<style lang="postcss">
  .scrolled-out {
    @apply border-b border-sub bg-nav bg-opacity-80;
    backdrop-filter: saturate(0.5) blur(5px);
  }
</style>
