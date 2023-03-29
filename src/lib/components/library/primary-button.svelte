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
  class="rounded-xl no-underline px-6 py-2 text-sm font-bold {isDisabled
    ? 'bg-bg outline hover:outline-4'
    : 'border-2 text-bg bg-headlines hover:bg-rose hover:border-rose'}
  }   {className}"
  {target}
  {href}
  {rel}
  {...$$restProps}
>
  {@html text}
</svelte:element>
