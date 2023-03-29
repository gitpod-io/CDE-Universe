<script>
  import PrimaryButton from "../library/primary-button.svelte";
  import OpenGraph from "../library/open-graph.svelte";
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

  <form class="grid grid-cols-2 gap-10 max-w-xl mx-auto">
    <label>
      Full Name*
      <input type="text" />
    </label>

    <label>
      Work e-mail*
      <input type="text" />
    </label>

    <label>
      Company website*
      <input type="text" />
    </label>

    <label>
      Role*
      <select>
        <option value="SOMETHING">Role</option>
      </select>
    </label>

    <label class="col-span-2">
      What do you want to learn?*
      <textarea rows="6" />
    </label>

    <p class="col-span-2 text-xs">
      By submitting this form, I confirm that I acknowledge the collection and
      processing of personal data by CDE universe, as further described in the
      <a href="/privacy">Privacy Policy</a>.
    </p>

    <div>
      <PrimaryButton text="Submit" />
    </div>
  </form>
</div>

<style lang="postcss">
  label {
    @apply flex flex-col gap-2;
  }
</style>
