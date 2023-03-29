<script lang="ts">
  import PrimaryButton from "../library/primary-button.svelte";
  import OpenGraph from "../library/open-graph.svelte";
  import { jobRoles } from "$lib/data";
  import type { Form } from "$lib/types/form";
  import Input from "$lib/components/library/input/input.svelte";
  import InputsHalf from "$lib/components/library/inputs-half.svelte";

  let resultMessage = "";
  let isSubmissionInProgress = false;

  const formData: Form = {
    name: {
      el: null,
      valid: false,
      value: "",
    },
    email: {
      el: null,
      valid: false,
      value: "",
    },
    companyWebsite: {
      el: null,
      valid: false,
      value: "",
    },
    jobRole: {
      el: null,
      valid: false,
      value: "",
    },
    message: {
      el: null,
      valid: false,
      value: "",
    },
  };

  let isFormDirty = false;
  $: isFormValid = Object.values(formData).every((field) => field.valid);

  async function submitEmail() {
    isSubmissionInProgress = true;
    isFormDirty = true;
    // if (!isFormValid) {
    //   return;
    // }

    // isSubmissionInProgress = true;
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name.value,
        email: formData.email.value,
        companyWebsite: formData.companyWebsite.value,
        jobRole: formData.jobRole.value,
        message: formData.message.value,
        signupType: "CDE Universe 2023 Waitlist",
      }),
    });

    if (response.status === 200) {
      isSubmissionInProgress = false;
      resultMessage = "Thank you for your interest! We'll be in touch soon.";
    } else if (response.status === 409) {
      isSubmissionInProgress = false;
      resultMessage =
        "You've already joined the waitlist. Just lean back, you will hear from us soon.";
    } else {
      isSubmissionInProgress = false;
      resultMessage = "Something went wrong. Please try again later.";
    }

    setTimeout(() => {
      formData.name.value = "";
      formData.email.value = "";
      formData.companyWebsite.value = "";
      formData.jobRole.value = "";
      formData.message.value = "";
    }, 5000);
  }
</script>

<OpenGraph
  data={{
    title: "Join the waitlist",
    description: "Join the waitlist for CDE Universe 2023",
  }}
/>

<div class="flex flex-col items-start gap-10">
  <h1 class="text-7xl md:text-8xl font-normal mx-auto">Join the waitlist</h1>

  <p class="text-xl mx-auto">Apply below for a ticket to CDE Universe 2023.</p>

  <!-- <form
  class="grid grid-cols-2 gap-10 max-w-xl mx-auto label"
  on:submit|preventDefault={submitEmail}
  > -->
  <form
    class="w-11/12 mx-auto grid grid-cols-2 gap-10"
    on:submit|preventDefault={submitEmail}
  >
    <div class="space-y-8">
      <!-- <label>
      Full Name*
      <input type="text" />
    </label> -->

      <!-- <label>
      Work e-mail*
      <input type="text" />
    </label>

    <label>
      Company website*
      <input type="text" />
    </label> -->
      <InputsHalf>
        <Input
          label="Full Name*"
          id="name"
          type="text"
          bind:value={formData.name.value}
          bind:valid={formData.name.valid}
          bind:el={formData.name.el}
          {isFormDirty}
        />

        <Input
          label="Work e-mail*"
          id="email"
          type="email"
          bind:value={formData.email.value}
          bind:valid={formData.email.valid}
          bind:el={formData.email.el}
          {isFormDirty}
        />
      </InputsHalf>
      <InputsHalf>
        <Input
          label="Company website*"
          id="companyWebsite"
          type="text"
          bind:value={formData.companyWebsite.value}
          bind:valid={formData.companyWebsite.valid}
          bind:el={formData.companyWebsite.el}
          {isFormDirty}
        />
        <Input
          label="Job Role*"
          id="jobRole"
          type="text"
          bind:value={formData.jobRole.value}
          bind:valid={formData.jobRole.valid}
          bind:el={formData.jobRole.el}
          {isFormDirty}
        />

        <!-- <label>
      Role*
      <select>
        {#each jobRoles as role}
          <option value={role.value}>{role.label}</option>
        {/each}
      </select>
    </label> -->

        <!-- <label class="col-span-2">
      What do you want to learn?*
      <textarea rows="6" />
    </label> -->

        <Input
          label="What do you want to learn?*"
          id="message"
          type="text"
          bind:value={formData.message.value}
          bind:valid={formData.message.valid}
          bind:el={formData.message.el}
          {isFormDirty}
        />
      </InputsHalf>

      <p class="col-span-2 text-xs">
        By submitting this form, I confirm that I acknowledge the collection and
        processing of personal data by CDE universe, as further described in the
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <div>
        <!-- <PrimaryButton text="Submit" type="submit" /> -->
        <button
          class="rounded-xl no-underline px-6 py-2 text-sm font-bold border-2 text-bg bg-headlines hover:bg-rose hover:border-rose"
          type="submit">Submit</button
        >
      </div>
    </div>
  </form>
</div>

<style lang="postcss">
  .label {
    @apply flex flex-col gap-2;
  }
</style>
