<script>
  import PrimaryButton from "../library/primary-button.svelte";
</script>

<div class="mt-xx-large md:mt-xxx-large text-left mx-auto w-11/12" id="info">
  <div class="max-w-5xl">
    <h1
      class="text-6xl sm:text-6xl md:text-8xl md:!leading-[6.875rem] font-normal"
    >
      Our first ever,<br />
      <span class="text-rose">in-person conference</span>
    </h1>
  </div>

  <p class="text-xl md:text-2xl mt-large max-w-xl mb-8">
    Thank you all for attending CDE universe and making it such a memorable
    conference. The energy and enthusiasm around CDEs in one space was
    unmatched! <br /><br />We can't wait to bring everyone together once again.
  </p>

  <div
    class="items-start flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"
  >
    <PrimaryButton
      href="https://youtube.com/playlist?list=PL3TSF5whlprWDA0q5GshRk-yPRGJzaY3q"
      text="View recordings"
    />
    <PrimaryButton
      style="line"
      href="/notify"
      text="Get notified on upcoming events"
    />
  </div>
</div>
