<script>
  import "../app.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import Footer from "$lib/footer.svelte";
  import Header from "$lib/header.svelte";

  let isMobileNav = false;
  let yScroll = 0;
</script>

<div class="flex flex-col overflow-x-clip min-h-screen">
  <Header bind:mobileNav={isMobileNav} {yScroll} />

  <!-- Disables scrolling of the background screen when the mobile navigation bar is shown. -->
  {#if !isMobileNav}
    <div class="flex-grow flex-col flex"><slot /></div>
  {:else}
    <div class="flex-grow flex-col flex" />
  {/if}

  <Footer />
</div>

<svelte:window bind:scrollY={yScroll} />
