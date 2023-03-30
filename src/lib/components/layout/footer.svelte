<script>
  import SecondaryButton from "../library/secondary-button.svelte";
  import GitpodLight from "../svgs/gitpod-light.svelte";
  import Twitter from "../svgs/twitter.svelte";
</script>

<div class="mt-auto">
  <footer
    class="mt-[120px] md:mt-[200px] bg-blue rounded-3xl shadow-lg py-4 px-8 w-11/12 max-w-7xl  mb-8 mx-auto relative overflow-clip z-0"
  >
    <div class="w-full flex flex-col items-start text-left gap-4 mt-4">
      <div class="w-full flex items-center justify-between">
        <div class="w-28">
          <GitpodLight />
        </div>

        <a href="https://twitter.com/gitpod" class="w-6 hover:opacity-30">
          <Twitter />
        </a>
      </div>

      <div class="text-xl md:text-3xl font-bold text-headlines mt-4">
        Organized by Gitpod
      </div>

      <p class="text-p-small md:text-p-medium max-w-md text-white font-normal">
        Ship software faster with secure cloud development environments.
      </p>

      <!-- TODO: Update submit proposal URL -->
      <SecondaryButton
        text="More about Gitpod"
        href="https://www.gitpod.io"
        class="md:mt-8"
      />
    </div>

    <ul
      class="flex gap-x-4 md:gap-y-1 flex-wrap md:justify-center mt-16 md:mt-8"
    >
      <li>
        <a class="text-xs text-headlines" href="/imprint">Imprint</a>
      </li>
      <li>
        <a class="text-xs text-headlines" href="/privacy">Privacy Policy</a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          class="text-xs text-headlines"
          href="https://github.com/gitpod-io/CDE-Universe">Source Code</a
        >
      </li>
      <li>
        <a class="text-xs text-headlines" href="/code-of-conduct"
          >Code of Conduct</a
        >
      </li>
    </ul>
    <img
      src="/images/ring.webp"
      alt="ring"
      draggable={false}
      class="absolute top-32 left-32 rotate-[-22deg] z-[-1] min-w-[800px] select-none scale-125"
    />
  </footer>
</div>
