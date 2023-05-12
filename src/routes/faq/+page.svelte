<script lang="ts">
  import Faqs from "$lib/components/layout/faqs.svelte";
  import PrimaryButton from "$lib/components/library/primary-button.svelte";
  import { faqs } from "$lib/data";
</script>

<div class="max-w-5xl mx-auto space-y-36 pt-16 pb-20 md:pb-36">
  <Faqs large {faqs} />
</div>

<div class="rounded-xl bg-blue items-start p-8 w-full md:w-fit mx-auto">
  <p class="text-xl font-bold text-white">Attend Conference</p>
  <p class="mt-1">Attend in-person in San Francisco.</p>

  <div class="mt-6 inline-flex">
    <PrimaryButton
      href="https://www.eventbrite.co.uk/e/cde-universe-2023-cloud-development-conference-by-gitpod-tickets-626052498877"
      text="Buy tickets for $60"
    />
  </div>
</div>
