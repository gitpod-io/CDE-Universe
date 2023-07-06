<script>
  import PrimaryButton from "../library/primary-button.svelte";
  import DesktopEllipse from "../svgs/ellipse.svelte";
</script>

<div
  class="mt-x-large relative w-11/12 md:w-fit mx-auto justify-between text-left mb-20 md:mb-[360px]"
>
  <div class="md:ml-36">
    <h1 class="text-5xl md:text-6xl font-extrabold">
      CDE <span class="font-light">universe</span>
    </h1>

    <div class="mt-4 text-xl md:text-[28px] md:leading-[2.5rem]">
      Past event
    </div>

    <div class="text-rose text-xl md:text-[28px] md:leading-[2.5rem]">
      <div>San Francisco, California</div>
    </div>

    <div
      class="mt-6 items-start flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"
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

  <DesktopEllipse
    class="hidden md:flex max-w-4xl -z-10 select-none w-[85vw] transfrom scale-[2.12] absolute translate-x-[100%] translate-y-[-180%] rotate-[-10deg] md:transform md:translate-x-[25%] md:translate-y-[-75%] md:scale-[2.10]"
  />

  <img
    style="top: -20%; left: 28%; transform: translate(-19%, -50%)"
    class="flex md:hidden absolute w-screen min-w-[65vw] -z-10 scale-150"
    src="/images/mobile-ellipse.svg"
    alt="ring line"
  />
</div>

<div class="w-11/12 md:w-10/12 mx-auto">
  <p class="max-w-[380px] text-2xl">
    Gitpod's conference for you to learn about <span
      class="text-rose font-extrabold">cloud-first developer tools</span
    >
    and
    <span class="text-rose font-extrabold">build connections</span> with the developer
    community.
  </p>
</div>
