<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { beforeNavigate } from "$app/navigation";
  import Navigations from "$lib/navigations.svelte";
  import PoweredBy from "$lib/powered_by.svelte";

  export let mobileNav = false;
  export let yScroll = 0;

  let mounted = false;
  onMount(() => (mounted = true));

  // get current link:
  let current_link = "";
  $: if (mounted) current_link = $page.url.pathname;

  // Cancel on navigation:
  beforeNavigate(() => (mobileNav = false));
</script>

<header
  class={"sticky z-[10] top-0 px-6 flex items-center py-5 transition-all duration-500 border-opacity-25 border-primary border-b-4 justify-end sm:justify-between" +
    (yScroll > 0 ? " bg-white  bg-opacity-90" : " bg-white")}
>
  <Navigations {current_link} />

  <div class="px-10 sm:hidden">
    <button on:click={() => (mobileNav = !mobileNav)}>
      <i
        class={!mobileNav
          ? "fa-solid fa-bars-staggered text-primary text-3xl"
          : "fa-solid fa-bars-staggered text-white text-3xl"}
      ></i>
    </button>
  </div>
</header>

<!-- Mobile Navigation Bar: -->

{#if mobileNav}
  <div
    class="h-screen w-5/6 sm:hidden bg-white px-10 py-5 z-50 border-2 border-primary fixed right-0 rounded-l-lg flex flex-col space-y-10"
    transition:slide={{ duration: 300, easing: quintOut, axis: "x" }}
  >
    <div class="flex justify-end">
      <button on:click={() => (mobileNav = !mobileNav)}
        ><i class="fa-solid fa-circle-xmark text-primary text-3xl"></i></button
      >
    </div>

    <div class="flex-grow flex flex-col">
      <Navigations {current_link} isMobileNav={true} />
    </div>

    <PoweredBy />
  </div>
{/if}
