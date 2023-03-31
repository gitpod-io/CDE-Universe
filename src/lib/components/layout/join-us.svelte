<script>
  import PrimaryButton from "$lib/components/library/primary-button.svelte";
  import Twitter from "../svgs/twitter.svelte";
</script>

<div class="mt-64" id="join">
  <div class="flex flex-col gap-20 items-start md:items-center">
    <div class="relative overflow-visible">
      <h1
        class="font-bold text-headlines text-center md:text-left text-8xl md:text-[200px] xl:text-[380px]"
      >
        Join us
      </h1>

      <img
        style="top: 50%; left: 50%; transform: translate(-50%, -65%)"
        class="absolute w-screen min-w-[110vw] z-[-10] "
        src="/images/ring-line.webp"
        alt="ring line"
      />
    </div>

    <div
      class="grid-rows-2 grid text-left md:grid-rows-1 md:grid-cols-2 gap-12 md:gap-[120px] mx-auto max-w-4xl"
    >
      <div class="space-y-2">
        <h4 class="font-bold text-[20px] md:text-[28px] mb-2 md:mb-4">Who?</h4>
        <p class="text-2xl">
          Meet the visionaries, builders and practitioners who make up the
          future of software development.
        </p>
        <br />
        <p class="text-2xl">
          We'll have 100 attendees who work in senior roles across platform
          engineering, DevOps, and developer experience.
        </p>
      </div>
      <div class="space-y-2">
        <h4 class="font-bold text-[20px] md:text-[28px] mb-2 md:mb-4">Why?</h4>

        <p class="text-2xl">
          CDE Universe is small and curated. Connect with leading minds across
          the developer tool space.
        </p>
        <br />
        <p class="text-2xl">
          Learn best practices in cloud development, CDE adoption and emerging
          technologies that enable better software development.
        </p>
      </div>
    </div>

    <PrimaryButton href="/join" text="Join the waitlist" />

    <div class="flex gap-4 items-center">
      <div class="w-16 h-16 mb-auto mt-1">
        <Twitter fill="#C2C2C2" />
      </div>
      <p class="text-xl md:text-3xl font-bold max-w-lg">
        Follow <a
          href="https://twitter.com/@cdeuniverse"
          target="_blank"
          class="text-headlines">@cdeuniverse</a
        > on Twitter to stay updated
      </p>
    </div>
  </div>
</div>
