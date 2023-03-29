<div class="mt-x-large hero relative w-fit mx-auto">
  <h1 class="text-6xl font-extrabold">
    CDE <span class="font-light">universe</span>
  </h1>

  <div class="mt-4 text-3xl">June 1 and 2</div>

  <div class="mt-1 font-medium text-rose text-3xl">
    <div>In-Person, Pebblebed</div>
    <div>San Francisco, CA</div>
  </div>

  <img
    src="/images/top-ring.webp"
    alt="ring"
    draggable={false}
    class="hidden md:block absolute z-[-1] select-none content-ring"
  />
</div>

<style>
  .content-ring {
    top: 50%;
    left: 50%;
    transform: translate(-45%, -58%);
    /* min-width: clamp(200px, 100vw, 1800px); */
    min-width: 100vw;
  }

  @media (max-width: 1200px) {
    .content-ring {
      transform: translate(-50%, -50%);
    }
  }

  @media (min-width: 2000px) {
    .content-ring {
      transform: translate(-40%, -60%);
    }
  }
</style>
