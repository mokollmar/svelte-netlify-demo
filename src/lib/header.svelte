<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { beforeNavigate } from "$app/navigation";

  let mounted = false;
  onMount(() => (mounted = true));

  let current_link = "";
  $: if (mounted) current_link = $page.url.pathname;

  const navigations = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "/contact" },
  ];

  let mobileNav = false;

  const resetMobileNav = () => {
    mobileNav = false;
  };

  beforeNavigate(resetMobileNav);
</script>

<div
  class="flex justify-end sm:justify-center border-b-2 border-opacity-25 border-primary text-primary py-5"
>
  <div class="hidden sm:flex flex-row justify-evenly w-full sm:w-1/2">
    {#each navigations as nav}
      <a
        href={nav.link}
        class={current_link === nav.link
          ? "border-y-4 rounded-full px-6 2xl:px-12 border-primary"
          : "border-y-4 border-primary hover:border-primary border-opacity-10 rounded-full px-6 2xl:px-12 "}
      >
        <p class="text-xl sm:text-2xl py-1">{nav.title}</p>
      </a>
    {/each}
  </div>
  <div class="pr-10 sm:hidden">
    {#if !mobileNav}
      <button on:click={() => (mobileNav = !mobileNav)}
        ><iconify-icon class="text-5xl" icon="ci:hamburger"
        ></iconify-icon></button
      >
    {/if}
  </div>
</div>

{#if mobileNav}
  <div
    class="h-screen w-full sm:hidden bg-primary px-10 z-50 fixed bg-opacity-90"
    transition:fade={{ duration: 200 }}
  >
    <div
      class="flex flex-col justify-end sm:justify-center border-b-2 border-opacity-25 border-primary text-primary py-5"
    >
      <div class="flex justify-end mb-10">
        <button on:click={() => (mobileNav = !mobileNav)}
          ><iconify-icon
            class="text-5xl text-white"
            icon="material-symbols:cancel-rounded"
          ></iconify-icon></button
        >
      </div>
      <div class="flex flex-col justify-evenly text-white w-full sm:hidden">
        {#each navigations as nav}
          <a
            href={nav.link}
            class={current_link === nav.link
              ? "border-y-4 rounded-full  2xl:px-12 border-primary"
              : "border-y-4 border-primary hover:border-primary border-opacity-10 rounded-full 2xl:px-12 "}
          >
            <p class="text-5xl sm:text-2xl py-1">{nav.title}</p>
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}
