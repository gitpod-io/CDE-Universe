<script>
  import PrimaryButton from "$lib/components/library/primary-button.svelte";
  import Twitter from "../svgs/twitter.svelte";
</script>

<div class="mt-20 md:mt-64" id="join">
  <div class="flex flex-col gap-10 md:gap-20 items-start md:items-center">
    <div class="relative overflow-visible">
      <h1
        class="font-bold text-headlines text-center md:text-left text-8xl md:text-[200px] xl:text-[360px]"
      >
        Join us
      </h1>

      <img
        style="top: 50%; left: 50%; transform: translate(-50%, -65%)"
        class="absolute w-screen min-w-[100vw] z-[-10] "
        src="/images/ring-line-small.webp"
        alt="ring line"
      />
    </div>

    <div
      class="grid-rows-2 grid text-left md:grid-rows-1 md:grid-cols-2 gap-4 md:gap-[120px] mx-auto max-w-4xl"
    >
      <div class="space-y-2">
        <h4 class="font-bold text-[20px] md:text-[28px] mb-2 md:mb-4">Who?</h4>
        <p class="text-lg md:text-2xl">
          Meet dev tool founders, platform engineers, engineering leaders, and
          anyone curious about developer experience.
        </p>
      </div>
      <div class="space-y-2">
        <h4 class="font-bold text-[20px] md:text-[28px] mb-2 md:mb-4">Why?</h4>

        <p class="text-lg md:text-2xl">
          CDE Universe provides an opportunity to learn, discuss, and connect in
          a small setting. Meet the people who have built the tools you use
          everyday.
        </p>
      </div>
    </div>

    <div class="space-x-2">
      <PrimaryButton
        href="https://www.eventbrite.co.uk/e/cde-universe-2023-cloud-development-conference-by-gitpod-tickets-626052498877"
        text="Buy tickets"
      />

      <PrimaryButton style="line" href="/faq" text="Read FAQ" />
    </div>

    <div class="flex gap-4 items-center mt-12">
      <div class="w-[40px] h-[40px] mb-auto mt-1">
        <Twitter fill="#C2C2C2" />
      </div>
      <p class="text-xl md:text-[28px] md:leading-[2.5rem] font-bold max-w-lg">
        Follow <a
          href="https://twitter.com/@cdeuniverse"
          target="_blank"
          class="text-headlines">@cdeuniverse</a
        > on Twitter to stay updated
      </p>
    </div>
  </div>
</div>
