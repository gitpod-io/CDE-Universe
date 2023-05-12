<script>
  import PrimaryButton from "../library/primary-button.svelte";
</script>

<div class="mt-xx-large md:mt-xxx-large max-w-7xl w-11/12 mx-auto" id="cfp">
  <div
    class="bg-blue rounded-xl shadow-lg py-20 px-8 w-full mx-auto relative overflow-clip z-0"
  >
    <div
      class="mx-auto w-fit flex flex-col gap-9 items-start md:items-start text-left"
    >
      <h1 class="text-5xl md:text-6xl font-normal md:font-medium">
        Be part of it
      </h1>

      <p class="text-p-large md:text-p-x-large max-w-sm text-left">
        The DevX community comes together at CDE Universe. Join us!
      </p>

      <PrimaryButton
        text="Buy tickets"
        href="https://www.eventbrite.co.uk/e/cde-universe-2023-cloud-development-conference-by-gitpod-tickets-626052498877"
      />
    </div>

    <img
      src="/images/ring-small.webp"
      alt="ring"
      draggable={false}
      class="absolute top-0 left-0 rotate-[-22deg] z-[-1] min-w-[800px] select-none scale-125"
    />
  </div>
</div>
