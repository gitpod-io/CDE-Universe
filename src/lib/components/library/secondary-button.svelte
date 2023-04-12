<script lang="ts">
  export let href = "";
  const target = href.startsWith("http") ? "_blank" : null;
  export let rel = "";
  export let text = "";
  export let disabled = false;
  export let element: "a" | "button" = "a";
  export let style: "fill" | "line" = "fill";
  let className = "";
  export { className as class };
</script>

<svelte:element
  this={element}
  class="rounded-xl no-underline px-3.5 py-1.5 text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed
  {style == 'fill'
    ? 'bg-headlines hover:bg-transparent text-bg border-2 border-headlines hover:border-headlines hover:text-headlines'
    : 'border-2 border-rose bg-bg hover:bg-rose text-headlines hover:text-bg'} {className}"
  {disabled}
  {target}
  {href}
  {rel}
  {...$$restProps}
  on:click
>
  {@html text}
</svelte:element>
