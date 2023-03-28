<script lang="ts">
  export let href = "";
  const target = href.startsWith("http") ? "_blank" : null;
  export let rel = "";
  export let isDisabled = false;
  export let element: "a" | "button" = "a";
  let className = "";
  export { className as class };
</script>

<!-- <span
  class="inline-block rounded-lg bg-black px-3 py-[1.5px] text-xs font-bold leading-4 text-explicit-grey-slight dark:bg-explicit-white-light dark:text-bg"	  class="inline-block rounded-lg bg-black px-3 py-[1.5px] text-xs font-bold leading-4 text-explicit-grey-slight dark:bg-explicit-white-light dark:text-bg"
>	>
  <slot />	  <slot />
</span>	</span> -->

<svelte:element
  this={element}
  class:disabled={isDisabled}
  {target}
  {href}
  {rel}
  {...$$restProps}
  class="inline-block rounded-2xl text-bg px-5 py-1 text-sm font-bold bg-explicit-white-light no-underline {className}"
>
  <slot />
</svelte:element>
