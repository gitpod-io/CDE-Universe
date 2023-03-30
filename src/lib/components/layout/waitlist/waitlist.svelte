<script lang="ts">
  import type { ActionData } from "../../../../routes/join/$types";
  import PrimaryButton from "../../library/primary-button.svelte";
  import OpenGraph from "../../library/open-graph.svelte";
  import { jobRoles, JOB_ROLE_OTHER } from "$lib/data";
  import FieldError from "./field-error.svelte";
  import { enhance } from "$app/forms";

  export let form: ActionData;

  let disabled = false;
  let role: string | undefined = undefined;
</script>

<OpenGraph
  data={{
    title: "Join the waitlist",
    description: "Join the waitlist for CDE Universe 2023",
  }}
/>

<div class="flex flex-col items-start gap-10 ">
  <h1 class="text-7xl md:text-8xl font-normal mx-auto">Join the waitlist</h1>

  <p class="text-xl mx-auto">Apply below for a ticket to CDE Universe 2023.</p>

  <form
    method="POST"
    class="grid grid-cols-2 gap-10 max-w-xl mx-auto"
    use:enhance={() => {
      disabled = true;

      return ({ update, result }) => {
        disabled = false;
        // Only reset the form when it is successful
        update({ reset: result.type == "success" });
      };
    }}
  >
    <label>
      Full Name*
      <input required {disabled} name="name" type="text" />
      <FieldError error={form?.fieldErrors?.name} />
    </label>

    <label>
      Work e-mail*
      <input required {disabled} name="email" type="email" />
      <FieldError error={form?.fieldErrors?.email} />
    </label>

    <label>
      Company website*
      <input required {disabled} name="website" type="url" value="https://" />
      <FieldError error={form?.fieldErrors?.website} />
    </label>

    <label>
      Role*

      <select {disabled} name="role" bind:value={role}>
        <option value={undefined} disabled>Please select one</option>

        {#each jobRoles as role}
          <option value={role.value}>{role.label}</option>
        {/each}
      </select>

      {#if role == JOB_ROLE_OTHER}
        <input
          {disabled}
          required
          name="role"
          type="text"
          placeholder="Specify your role"
        />
      {/if}

      <FieldError error={form?.fieldErrors?.role} />
    </label>

    <label class="col-span-2">
      What do you want to learn?*
      <textarea required {disabled} name="question" rows="6" />
      <FieldError error={form?.fieldErrors?.question} />
    </label>

    <p class="col-span-2 text-xs">
      By submitting this form, I confirm that I acknowledge the collection and
      processing of personal data by CDE universe, as further described in the
      <a href="/privacy">Privacy Policy</a>.
    </p>

    {#if form?.error}
      <p class="text-rose col-span-2">{form?.error}</p>
    {/if}

    <div class="col-span-2">
      <PrimaryButton element="button" {disabled} text="Submit" />
    </div>
  </form>
</div>

<style lang="postcss">
  label {
    @apply flex flex-col gap-2;
  }
</style>
