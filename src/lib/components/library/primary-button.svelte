<script lang="ts">
  export let href = "";
  const target = href.startsWith("http") ? "_blank" : null;
  export let rel = "";
  export let text = "";
  export let disabled = false;
  export let element: "a" | "button" = "a";
  let className = "";
  export { className as class };
</script>

<svelte:element
  this={element}
  class="rounded-xl no-underline px-6 py-2 text-sm font-bold border-2 text-bg bg-headlines hover:bg-rose hover:border-rose disabled:opacity-50 disabled:cursor-not-allowed {className}"
  {disabled}
  {target}
  {href}
  {rel}
  {...$$restProps}
  on:click
>
  {@html text}
</svelte:element>
