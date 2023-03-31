<script>
  import PrimaryButton from "../library/primary-button.svelte";
</script>

<div class="mt-xxx-large" id="cfp">
  <div
    class="bg-blue rounded-xl shadow-lg py-20 px-8 w-full mx-auto relative overflow-clip z-0"
  >
    <div
      class="mx-auto w-fit flex flex-col gap-9 items-start md:items-start text-left"
    >
      <h1 class="text-5xl md:text-6xl font-normal md:font-medium">
        CFP is open
      </h1>

      <p class="text-p-large md:text-p-x-large max-w-md text-left">
        Interested in speaking at CDE Universe?
        <br /><br />
        Submit a proposal until April 30, 2023
      </p>

      <PrimaryButton
        text="Submit proposal"
        href="https://www.papercall.io/cde-universe"
      />
    </div>

    <img
      src="/images/ring.webp"
      alt="ring"
      draggable={false}
      class="absolute top-0 left-0 rotate-[-22deg] z-[-1] min-w-[800px] select-none scale-125"
    />
  </div>
</div>
