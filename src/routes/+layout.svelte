<script lang="ts">
  import Nav from "$lib/components/layout/nav.svelte";
  import Container from "$lib/components/layout/container.svelte";
  import Footer from "$lib/components/layout/footer.svelte";
  import "../app.css";
  import { page } from "$app/stores";
</script>

<div class="flex min-h-screen flex-col">
  <Nav />
  <Container
    element="main"
    class="pt-xx-small sm:pt-x-small md:pt-small w-11/12 mx-auto"
  >
    <slot />
  </Container>
  {#if $page.url.pathname !== "/notify/success"}
    <Footer />
  {/if}
</div>
