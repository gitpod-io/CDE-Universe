<script>
  import SecondaryButton from "../library/secondary-button.svelte";
  import GitpodLight from "../svgs/gitpod-light.svelte";
</script>

<footer
  class="bg-blue rounded-xl shadow-lg py-4 px-8 w-11/12 max-w-7xl mt-[100px] md:mt-[200px] mb-8 mx-auto relative overflow-clip z-0"
>
  <div
    class="w-full flex flex-col items-center text-center md:items-start md:text-left gap-6 mt-4"
  >
    <div class="w-28">
      <GitpodLight />
    </div>

    <h1 class="text-3xl font-bold">Organized by Gitpod</h1>

    <p class="text-p-x-large max-w-md text-white font-normal">
      Ship software faster with secure cloud development environments.
    </p>

    <!-- TODO: Update submit proposal URL -->
    <SecondaryButton text="More about Gitpod" href="https://www.gitpod.io" />
  </div>

  <ul class="flex gap-4 flex-wrap justify-center mt-4 mb-2">
    <li>
      <a class="text-xs" href="/imprint">Imprint</a>
    </li>
    <li>
      <a class="text-xs" href="/privacy">Privacy Policy</a>
    </li>
    <li>
      <a
        rel="noreferrer"
        target="_blank"
        class="text-xs"
        href="https://github.com/gitpod-io/CDE-Universe">Source Code</a
      >
    </li>
    <li>
      <a class="text-xs" href="/code-of-conduct">Code of Conduct</a>
    </li>
  </ul>
  <img
    src="/images/ring.webp"
    alt="ring"
    draggable={false}
    class="absolute top-32 left-32 rotate-[-22deg] z-[-1] min-w-[800px] select-none scale-125"
  />
</footer>
