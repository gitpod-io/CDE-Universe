<script lang="ts">
  import type { PrincipleListItem } from "$lib/types/principles";

  export let PrincipleItems: PrincipleListItem[];
</script>

<div class="mt-xx-large md:mt-xxx-large" id="principles">
  <div class="mb-small md:mb-medium">
    <h2 class="text-center h2 mb-macro md:!mb-micr mx-auto">
      Principles of CDEs
    </h2>

    <p class="text-large text-center mx-auto">
      Cloud Development Environments value the following principles:
    </p>
  </div>
  <ol
    class="list-outside grid-flow-row md:grid-flow-col grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-x-x-small gap-y-medium py-0"
  >
    {#each PrincipleItems as item, i}
      <li class="break-inside-avoid flex w-10/12 mx-auto">
        <div class="mr-xx-small font-bold text-blue h4">
          0{i + 1}
        </div>
        <div>
          <h4 class="!sm lg:!sm">
            <span class="font-bold text-rose">{@html item.heading} </span><span
              class="text-white"
            >
              {item.subHeading}</span
            >
          </h4>
          <p class="text-p-medium">{item.description}</p>
        </div>
      </li>
    {/each}
  </ol>
</div>
