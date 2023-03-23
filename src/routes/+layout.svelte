<script lang="ts">
  import Container from "$lib/components/layout/container.svelte";
  import Footer from "$lib/components/layout/footer.svelte";
  import "../app.css";
</script>

<div class="flex min-h-screen flex-col">
  <Container element="main" class="pt-xx-small sm:pt-x-small md:pt-small">
    <slot />
  </Container>
  <Footer />
</div>
