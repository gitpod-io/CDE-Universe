<script lang="ts">
  export let href = "";
  const target = href.startsWith("http") ? "_blank" : null;
  export let rel = "";
  export let text = "";
  export let isDisabled = false;
  export let element: "a" | "button" = "a";
  let className = "";
  export { className as class };
</script>

<svelte:element
  this={element}
  class="rounded-xl no-underline px-5 py-1.5 text-sm font-bold {isDisabled
    ? 'bg-bg btn-hover-border'
    : 'text-bg bg-headlines hover:bg-rose'} 
}   {className}"
  class:disabled={`${isDisabled} opacity-50 cursor-not-allowed`}
  {target}
  {href}
  {rel}
  {...$$restProps}
>
  {@html text}
</svelte:element>

<style lang="postcss">
  .btn-hover-border {
    @apply outline border-solid;
  }
  .btn-hover-border:hover {
    @apply outline-[3px];
  }
</style>
