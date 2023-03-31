<script lang="ts">
  export let href = "";
  const target = href.startsWith("http") ? "_blank" : null;
  export let rel = "";
  export let text = "";
  export let disabled = false;
  export let element: "a" | "button" = "a";
  export let style: "fill" | "line" = "fill";
  export let cardCTA = false;
  let className = "";
  export { className as class };
</script>

<svelte:element
  this={element}
  class="rounded-2xl no-underline px-6 py-2 text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed
  {style == 'fill'
    ? 'bg-headlines hover:bg-transparent text-bg hover:text-headlines border-4 border-headlines hover:border-headlines'
    : 'border-4 border-rose bg-bg hover:bg-rose text-headlines hover:text-bg'} {className}"
  {disabled}
  {target}
  {href}
  {rel}
  {...$$restProps}
  on:click
>
  {@html text}
</svelte:element>
