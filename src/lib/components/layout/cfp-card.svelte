<script>
  import PrimaryButton from "../library/primary-button.svelte";
</script>

<div
  class="bg-blue rounded-xl shadow-lg py-20 px-8 w-full mx-auto relative overflow-clip z-[-2]"
>
  <div
    class="mx-auto w-fit flex flex-col gap-9 items-center sm:items-start text-center sm:text-left"
  >
    <h1 class="text-6xl font-medium">CFP is open</h1>

    <p class="text-p-x-large max-w-md">
      Interested in speaking at CDE Universe?
    </p>

    <p class="text-p-x-large max-w-md m-0">Submit a proposal until MM/DD/YY</p>

    <PrimaryButton text="Submit Proposal" />
  </div>

  <img
    src="/images/ring.webp"
    alt="ring"
    draggable={false}
    class="absolute top-0 left-0 rotate-[-22deg] z-[-1] min-w-[800px] select-none scale-125"
  />
</div>
