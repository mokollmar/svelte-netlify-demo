<script>
    export let current_link;
    export let isMobileNav = false;

    const navigations = [
        { title: "Home", link: "/" },
        { title: "Contact", link: "/contact" },
    ];
</script>

<div
    class={isMobileNav
        ? "flex flex-col justify-evenly w-full space-y-5"
        : "hidden sm:flex flex-row justify-evenly w-full"}
>
    {#each navigations as nav}
        <a
            href={nav.link}
            class={current_link === nav.link
                ? "border-y-4 rounded-full mx-8 2xl:px-12 border-primary"
                : "border-y-4 border-primary hover:border-primary border-opacity-10 rounded-full mx-8  2xl:px-12 "}
        >
            <p class="text-xl sm:text-2xl py-1 text-primary text-center">{nav.title}</p>
        </a>
    {/each}
</div>
