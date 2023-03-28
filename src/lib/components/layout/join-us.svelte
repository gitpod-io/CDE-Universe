<script>
  import PrimaryButton from "$lib/components/library/primary-button.svelte";
</script>

<div class="flex flex-col gap-20 items-center">
  <div class="relative overflow-visible">
    <h1
      class="font-bold text-8xl text-center md:text-left md:text-[200px] lg:text-[280px] xl:text-[380px]"
    >
      Join Us
    </h1>

    <img
      style="top: 50%; left: 50%; transform: translate(-50%, -65%)"
      class="absolute w-screen min-w-[100vw] z-[-10] "
      src="/images/ring-line.webp"
      alt="ring line"
    />
  </div>

  <div
    class="grid-rows-2 grid text-center md:text-left md:grid-rows-1 md:grid-cols-2 gap-8"
  >
    <div class="space-y-2">
      <h4 class="font-bold text-2xl">Who?</h4>

      <p>
        Meet the visionaries, builders and practitioners who make up the future
        of software development.
      </p>
      <p>
        We'll have 100 attendees who work in senior roles across platform
        engineering, DevOps, and developer experience.
      </p>
    </div>

    <div class="space-y-2">
      <h4 class="font-bold text-2xl">Why?</h4>

      <p>
        CDE Universe is small and curated. Connect with leading minds across the
        developer tool space.
      </p>
      <p>
        Learn best practices in cloud development, CDE adoption and emerging
        technologies that enable better software development.
      </p>
    </div>
  </div>

  <PrimaryButton text="Join the waitlist" />
</div>
