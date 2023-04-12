<script lang="ts">
  import type { PrincipleListItem } from "$lib/types/principles";

  export let PrincipleItems: PrincipleListItem[];
</script>

<div class="mt-xx-large md:mt-xxx-large" id="principles">
  <div class="mb-small md:mb-medium">
    <h2
      class="text-center text-7xl md:text-6xl mb-macro font-medium mb-2 md:mb-4 mx-auto"
    >
      To create a new developer experience
    </h2>

    <p class="text-large text-center mx-auto">
      We're building cloud development environments (CDEs) with these principles
      in mind:
    </p>
  </div>
  <ol
    class="list-outside grid-flow-row md:grid-flow-col grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-x-x-small gap-y-medium py-0"
  >
    {#each PrincipleItems as item, i}
      <li class="break-inside-avoid flex w-10/12 mx-auto">
        <div class="mr-xx-small font-bold text-white h4">
          0{i + 1}
        </div>
        <div>
          <h4 class="!sm lg:!sm mb-1 md:mb-2">
            <span class="font-bold text-rose text-xl"
              >{@html item.heading}
            </span><span class="text-white text-xl"> {item.subHeading}</span>
          </h4>
          <p class="text-p-medium">{item.description}</p>
        </div>
      </li>
    {/each}
  </ol>
</div>
