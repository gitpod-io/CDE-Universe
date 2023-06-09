<script lang="ts">
  import type { Speaker } from "$lib/types/speakers";
  import type { PrimarySpeaker } from "$lib/types/primary-speakers";
  import Linkedin from "../svgs/linkedin.svelte";
  import Mastodon from "../svgs/mastodon.svelte";
  import Twitter from "../svgs/twitter.svelte";
  import GitHub from "../svgs/github.svelte";

  export let speakers: Speaker[];
  export let primarySpeakers: PrimarySpeaker[];
</script>

<div
  class="mt-xx-large md:mt-xxx-large md:w-11/12 max-w-6xl mx-auto"
  id="speakers"
>
  <div class="flex flex-col gap-14 items-center md:items-start">
    <div class="space-y-8">
      <h1 class="flex text-7xl md:text-8xl font-normal">Speakers</h1>
    </div>

    <div
      class="flex gap-x-20 gap-y-12 flex-wrap justify-center md:justify-start max-w-6xl mx-auto items-stretch"
    >
      {#each primarySpeakers as primarySpeaker}
        <div class="mb-4 w-[325px]">
          <div
            class="rounded-xl bg-rose border-rose border-8 mb-3 spkrsqr relative"
          >
            <img
              class="rounded-xl image"
              width="100%"
              height="100%"
              src={primarySpeaker.image}
              alt="{primarySpeaker.name}'s picture"
            />
            <div class="middle w-44">
              <div class="text">
                {@html primarySpeaker.imgTitle || primarySpeaker.title}
              </div>
            </div>
          </div>

          <div class="ml-2">
            <h4 class="font-bold text-xl">{primarySpeaker.name}</h4>
            <p>{@html primarySpeaker.title}</p>

            <div class="flex gap-3 items-center mt-2">
              {#if primarySpeaker.twitter}
                <a
                  href="https://twitter.com/{primarySpeaker.twitter}"
                  target="_blank"
                  class="social-link"
                >
                  <Twitter class="fill-[#EF9D83] hover:fill-[#ffc0be]" />
                </a>
              {/if}

              {#if primarySpeaker.mastodon}
                <a
                  href={primarySpeaker.mastodon}
                  target="_blank"
                  class="social-link"
                >
                  <Mastodon class="fill-[#EF9D83] fill:bg-[#ffc0be]" />
                </a>
              {/if}

              {#if primarySpeaker.linkedin}
                <a
                  href={primarySpeaker.linkedin}
                  target="_blank"
                  class="social-link"
                >
                  <Linkedin class="fill-[#EF9D83] hover:fill-[#ffc0be]" />
                </a>
              {/if}

              {#if primarySpeaker.github}
                <a
                  href="https://github.com/{primarySpeaker.github}"
                  target="_blank"
                  class="social-link"
                >
                  <GitHub class="fill-[#EF9D83] hover:fill-[#ffc0be]" />
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div
      class="flex gap-x-20 gap-y-12 flex-wrap justify-center md:justify-start max-w-6xl mx-auto items-stretch"
    >
      {#each speakers as speaker}
        <div class="w-56 mb-4">
          {#if !speaker.large}
            <div
              class="rounded-xl bg-blue border-blue border-8 mb-3 spkrsqr relative"
              class:border-rose={speaker.large}
              class:bg-rose={speaker.large}
            >
              <img
                class="rounded-xl image"
                width="100%"
                height="100%"
                src={speaker.image}
                alt="{speaker.name}'s picture"
              />
              <div class="middle w-44">
                <div class="text">
                  {@html speaker.imgTitle || speaker.title}
                </div>
              </div>
            </div>
          {/if}

          <div class="ml-2">
            {#if !speaker.large}
              <h4 class="font-bold text-xl">{speaker.name}</h4>
              <p>{@html speaker.title}</p>

              <div class="flex gap-3 items-center mt-2">
                {#if speaker.twitter}
                  <a
                    href="https://twitter.com/{speaker.twitter}"
                    target="_blank"
                    class="social-link"
                  >
                    <Twitter class="fill-[#EF9D83] hover:fill-[#ffc0be]" />
                  </a>
                {/if}

                {#if speaker.mastodon}
                  <a
                    href={speaker.mastodon}
                    target="_blank"
                    class="social-link"
                  >
                    <Mastodon class="fill-[#EF9D83] fill:bg-[#ffc0be]" />
                  </a>
                {/if}

                {#if speaker.linkedin}
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    class="social-link"
                  >
                    <Linkedin class="fill-[#EF9D83] hover:fill-[#ffc0be]" />
                  </a>
                {/if}

                {#if speaker.github}
                  <a
                    href="https://github.com/{speaker.github}"
                    target="_blank"
                    class="social-link"
                  >
                    <GitHub class="fill-[#EF9D83] hover:fill-[#ffc0be]" />
                  </a>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .social-link {
    @apply w-5 h-5 block;
  }

  .spkrsqr:hover .middle {
    opacity: 1;
  }

  .spkrsqr:hover .image {
    opacity: 0.15;
  }

  .middle {
    opacity: 0;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    text-align: start;
    transition: all 0.3s ease-in-out 0s;
  }

  .text {
    color: #fdfbfb;
    font-size: 16px;
  }
</style>
