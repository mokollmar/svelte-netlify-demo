<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    let mounted = false;
    onMount(() => (mounted = true));

    let current_link = "";
    $: if (mounted) current_link = $page.url.pathname;

    const navigations = [
        { title: "Home", link: "/" },
        { title: "Contact", link: "/contact" },
    ];
</script>

<div
    class="flex justify-center border-b-2 border-opacity-25 border-primary text-primary py-5"
>
    <div class=" flex flex-row justify-evenly w-full sm:w-1/2">
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
</div>
