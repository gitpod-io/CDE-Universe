<script lang="ts">
  import type { ActionData } from "../../../../routes/notify/$types";
  import OpenGraph from "../../library/open-graph.svelte";
  import FieldError from "./field-error.svelte";
  import { enhance } from "$app/forms";
  import SecondaryButton from "$lib/components/library/secondary-button.svelte";

  export let form: ActionData;

  let disabled = false;
</script>

<OpenGraph
  data={{
    title: "Get notified | CDE Universe",
    description: "Make sure not to miss the next CDE universe.",
  }}
/>

<div class="flex flex-col items-center mb-12 mx-auto">
  <h1
    class="font-bold md:font-extrabold text-[64px] leading-none mb-4 max-w-xl"
  >
    Get notified
  </h1>
  <p class="text-base md:text-lg !mx-auto max-w-xl">
    Make sure not to miss the next CDE universe.
  </p>
</div>
<div
  class="rounded-[40px] border-rose border-[10px] px-8 md:px-14 py-14 max-w-2xl mx-auto"
>
  <h1 class="font-bold max-w-xl text-h4 leading-none mb-8 mx-auto">
    Sign-up for email updates
  </h1>
  <form
    method="POST"
    class="grid grid-cols-2 gap-4 md:gap-10 max-w-xl mx-auto"
    use:enhance={() => {
      disabled = true;

      return ({ update, result }) => {
        disabled = false;
        // Only reset the form when it is successful
        update({ reset: result.type == "success" });
      };
    }}
  >
    <label class="col-span-2">
      Full Name*
      <input required {disabled} name="name" type="text" />
      <FieldError error={form?.fieldErrors?.name} />
    </label>

    <label class="col-span-2">
      E-Mail*
      <input required {disabled} name="email" type="email" />
      <FieldError error={form?.fieldErrors?.email} />
    </label>

    <label class="col-span-2">
      Your message (optional)
      <textarea required={false} {disabled} name="question" rows="6" />
    </label>

    <p class="col-span-2 text-xs md:text-[15px] leading-5">
      By submitting this form, I confirm that I acknowledge the collection and
      processing of personal data by CDE universe, as further described in the
      <a href="/privacy">Privacy Policy</a>.
    </p>

    {#if form?.error}
      <p class="text-rose col-span-2">{form?.error}</p>
    {/if}

    <div class="col-span-2">
      <SecondaryButton element="button" {disabled} text="Submit" />
    </div>
  </form>
</div>

<style lang="postcss">
  label {
    @apply flex flex-col gap-2;
  }
</style>
