<script lang="ts">
  import type { Speaker } from "$lib/types/speakers";
  import Linkedin from "../svgs/linkedin.svelte";
  import Mastodon from "../svgs/mastodon.svelte";
  import Twitter from "../svgs/twitter.svelte";
  import Github from "../svgs/github.svelte";

  export let speakers: Speaker[];
</script>

<div class="flex flex-col gap-14">
  <h1 class="text-7xl text-center md:text-left md:text-8xl font-normal">
    Speakers
  </h1>

  <div class="flex gap-x-24 gap-y-12 flex-wrap justify-center md:justify-start">
    {#each speakers as speaker}
      <div class="w-56 mb-4">
        <div class="rounded-xl bg-blue w-fit p-2 mb-3">
          <img
            class="rounded-lg"
            src={speaker.image}
            alt="{speaker.name}'s pfp"
          />
        </div>

        <div class="ml-2">
          <h4 class="font-bold text-xl">{speaker.name}</h4>
          <p>{speaker.title}</p>

          <div class="flex gap-3 items-center mt-2">
            {#if speaker.twitter}
              <a
                href="https://twitter.com/{speaker.twitter}"
                target="_blank"
                class="social-link"
              >
                <Twitter fill="#EF9D83" />
              </a>
            {/if}

            {#if speaker.mastodon}
              <a href={speaker.mastodon} target="_blank" class="social-link">
                <Mastodon fill="#EF9D83" />
              </a>
            {/if}

            {#if speaker.linkedin}
              <a href={speaker.linkedin} target="_blank" class="social-link">
                <Linkedin fill="#EF9D83" />
              </a>
            {/if}

            {#if speaker.github}
              <a
                href="https://github.com/{speaker.github}"
                target="_blank"
                class="social-link"
              >
                <Github fill="#EF9D83" />
              </a>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .social-link {
    @apply w-5 h-5 block;
  }

  .social-link:hover {
    @apply opacity-30;
  }
</style>
