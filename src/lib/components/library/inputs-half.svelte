<script lang="ts">
  let className = "";
  export { className as class };
</script>

<div class="{className} sm:flex sm:justify-between">
  <slot />
</div>

<style lang="postcss">
  div {
    & > :global(*) {
      flex: 0 0 46%;
      @apply mt-x-small sm:mt-0;
    }
  }
</style>
