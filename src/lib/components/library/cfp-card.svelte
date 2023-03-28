<script>
  import PrimaryButton from "./primary-button.svelte";
</script>

<div
  class="bg-blue rounded-xl shadow-lg py-20 w-full mx-auto relative overflow-clip z-[-2]"
>
  <div class="mx-auto w-fit flex flex-col gap-12 items-start">
    <h1 class="text-h1 font-medium">CFP is open</h1>

    <p class="text-p-x-large max-w-md">
      Interested in speaking onsite at the event? Our CFP is open until xx.yy.
    </p>

    <PrimaryButton text="Submit Proposal" />
  </div>

  <img
    src="/images/ring.webp"
    alt="ring"
    draggable={false}
    class="absolute top-0 left-0 rotate-[-22deg] z-[-1] select-none scale-125"
  />
</div>
