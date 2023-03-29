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
  class="rounded-xl no-underline px-4 py-1 text-sm font-bold border-2 hover:border-rose disabled:opacity-50 disabled:cursor-not-allowed
  {style == 'fill' ? 'bg-headlines hover:bg-rose text-bg' : ''} {className}"
  {disabled}
  {target}
  {href}
  {rel}
  {...$$restProps}
  on:click
>
  {@html text}
</svelte:element>
