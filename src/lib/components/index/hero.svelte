<script>
  import PrimaryButton from "../library/primary-button.svelte";
</script>

<div
  class="mt-x-large relative w-11/12 md:w-fit mx-auto justify-between text-left md:mb-[360px]"
>
  <div class="md:ml-36">
    <h1 class="text-5xl md:text-6xl font-extrabold">
      CDE <span class="font-light">universe</span>
    </h1>

    <div class="mt-4 text-xl md:text-[28px] md:leading-[2.5rem]">
      June 1 and 2
    </div>

    <div
      class="mt-1 font-medium text-rose text-xl md:text-[28px] md:leading-[2.5rem]"
    >
      <div>Pebblebed</div>
      <div>San Francisco, CA</div>
    </div>

    <div class="mt-6">
      <PrimaryButton
        href="https://www.eventbrite.co.uk/e/cde-universe-2023-cloud-development-conference-by-gitpod-tickets-626052498877"
        text="Buy tickets"
      />
    </div>
  </div>

  <img
    src="/images/primary-ellipse.webp"
    alt="CDE Ellipse"
    draggable={false}
    class="hidden md:flex max-w-4xl -z-10 select-none w-[85vw] transfrom scale-[2.12] absolute translate-x-[100%] translate-y-[-180%] rotate-[-6deg] md:transform md:translate-x-[25%] md:translate-y-[-95%] md:scale-[2.10]"
  />

  <img
    style="top: -20%; left: 30%; transform: translate(-20%, -50%)"
    class="flex md:hidden absolute w-screen min-w-[65vw] z-[-10] scale-150"
    src="/images/primary-ellipse-mobile.webp"
    alt="ring line"
  />
</div>

<div class="w-11/12 md:w-10/12 mx-auto">
  <p class="max-w-xs text-2xl">
    Gitpod's conference for you to learn about cloud-first developer tools and
    build connections with the developer community.
  </p>
</div>
