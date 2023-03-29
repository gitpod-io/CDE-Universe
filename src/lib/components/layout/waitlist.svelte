<script>
  import PrimaryButton from "../library/primary-button.svelte";
</script>

<div class="flex flex-col items-start gap-10">
  <h1 class="text-7xl md:text-8xl font-normal">Partners</h1>

  <p class="text-xl">Apply below for a ticket to CDE Universe 2023.</p>

  <form class="grid grid-cols-2 gap-10">
    <label>
      Full Name
      <input type="text" />
    </label>

    <label>
      Work e-mail
      <input type="text" />
    </label>

    <label>
      Company website
      <input type="text" />
    </label>

    <label>
      Role
      <select>
        <option value="SOMETHING">Role</option>
      </select>
    </label>

    <label class="col-span-2">
      Why do you want to join?
      <textarea rows="6" />
    </label>

    <p class="col-span-2 text-sm">
      By submitting this form, I confirm that I acknowledge the collection and
      processing of personal data by CDE universe, as further described in the
      <a href="/privacy">Privacy Policy</a>.
    </p>

    <div>
      <PrimaryButton text="Submit" />
    </div>
  </form>
</div>

<style>
  label {
    @apply flex flex-col gap-2;
  }
</style>
