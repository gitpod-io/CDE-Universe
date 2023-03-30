<script>
  import SecondaryButton from "$lib/components/library/secondary-button.svelte";
</script>

<div class="mt-x-large text-left md:mt-xxx-large" id="info">
  <div class="max-w-4xl">
    <h1
      class="text-6xl sm:text-6xl md:text-8xl md:!leading-[6.875rem] font-normal "
    >
      A conference about
      <span class="text-rose">the future of software development</span>
    </h1>
  </div>

  <p class="text-xl md:text-2xl mt-large max-w-xl mx-auto md:mx-0 mb-8">
    CDE universe is a single track, two day conference with 100 participants.
    <br /><br />
    Join in on conversation around building and implementing the tools that improve
    the software development experience.
  </p>

  <SecondaryButton href="/join" text="Join the waitlist" />
</div>
