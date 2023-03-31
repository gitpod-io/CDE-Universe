<script lang="ts">
  import SecondaryButton from "$lib/components/library/secondary-button.svelte";
  import CDEUniverse from "$lib/components/svgs/cde-universe.svelte";
  import showMobileMenu from "$lib/stores/mobile-menu";

  let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />
<!-- <nav
  class:scrolled-out={scroll > 10}
  class="sticky top-0 z-20 mx-auto w-full border-b border-t-0 border-solid border-transparent"
> -->
<nav
  class="top-0 z-20 mx-auto w-full border-b border-t-0 border-solid border-transparent"
>
  <!-- class:bg-box={$showMobileMenu} -->
  <div
    class="relative flex flex-wrap justify-between px-0 md:px-medium py-4 transition-none w-11/12 mx-auto"
  >
    <CDEUniverse />

    <div class="hidden items-center gap-x-small sm:flex">
      <SecondaryButton
        href="/join"
        text="Join the waitlist"
        isDisabled={false}
      />
    </div>
    <div class="sm:hidden items-center flex">
      <SecondaryButton href="/join" text="Register" isDisabled={false} />
    </div>
  </div>
</nav>

<!-- <style lang="postcss">
  .scrolled-out {
    @apply border-b border-sub bg-nav;
    backdrop-filter: blur(1px);
  }
</style> -->
