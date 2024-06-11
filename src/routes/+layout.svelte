<script>
  import "../app.css";
  import "iconify-icon";
  import Footer from "$lib/footer.svelte";
  import Header from "$lib/header.svelte";
</script>

<div class="flex flex-col overflow-x-clip min-h-screen">
  <Header />

  <div class="flex-grow flex-col flex"><slot /></div>

  <Footer />
</div>
