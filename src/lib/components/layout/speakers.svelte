<script lang="ts">
  import type { Speaker } from "$lib/types/speakers";
  import Linkedin from "../svgs/linkedin.svelte";
  import Mastodon from "../svgs/mastodon.svelte";
  import Twitter from "../svgs/twitter.svelte";
  import GitHub from "../svgs/github.svelte";

  export let speakers: Speaker[];
</script>

<div class="mt-xx-large md:mt-xxx-large" id="speakers">
  <div class="flex flex-col gap-14 items-center md:items-start">
    <h1
      class="flex text-7xl md:text-8xl font-normal md:w-11/12 max-w-6xl mx-auto "
    >
      Speakers
    </h1>
    <div
      class="flex gap-x-20 gap-y-12 flex-wrap justify-center md:justify-start w-11/12 max-w-6xl mx-auto items-stretch"
    >
      {#each speakers as speaker}
        <div class="w-56 mb-4">
          <div class="rounded-xl bg-bg border-blue border-8 mb-3 spkrsqr">
            <img
              class="rounded-md image"
              width="100%"
              height="100%"
              src={speaker.image}
              alt="{speaker.name}'s picture"
            />
            <div class="middle w-44">
              <div class="text">{@html speaker.imgTitle || speaker.title}</div>
            </div>
          </div>

          <div class="ml-2">
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
                <a href={speaker.mastodon} target="_blank" class="social-link">
                  <Mastodon class="fill-[#EF9D83] fill:bg-[#ffc0be]" />
                </a>
              {/if}

              {#if speaker.linkedin}
                <a href={speaker.linkedin} target="_blank" class="social-link">
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
    opacity: 0.3;
  }

  .middle {
    opacity: 0;
    position: absolute;
    text-align: start;
    -webkit-transform: translate(10%, -130%);
    -moz-transform: translate(10%, -130%);
    transform: translate(10%, -130%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .text {
    color: #fdfbfb;
    font-size: 16px;
  }
</style>
