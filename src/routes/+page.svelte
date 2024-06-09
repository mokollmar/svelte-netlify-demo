<script>
    import LazyLoad from "$lib/LazyLoad.svelte";
    import watermelon_image from "../images/watermelon.png?enhanced";
    import { onMount } from "svelte";
    import { page_views } from "../store";

    onMount(() => {
        const storedValue = localStorage.getItem("page_views");
        if (storedValue) {
            console.log("Stored value: ", storedValue);
            page_views.set(storedValue);
        }

        page_views.subscribe((value) => {
            localStorage.setItem("page_views", ++value); // add page_views by one
        });
    });
</script>

<div
    class="flex flex-grow items-center flex-col justify-center space-y-12 py-12"
>
    <LazyLoad>
        <h1
            class="text-center font-bold text-2xl sm:text-3xl xl:text-5xl px-5 md:px-12 xl:px-24 text-primary py-5"
        >
            {$page_views < 1
                ? "Welcome to the Svelte Netlify Demo"
                : "Welcome back!"}
        </h1>

        <div class="flex justify-center items-center px-5 sm:px-12">
            <enhanced:img
                src={watermelon_image}
                alt="watermelon"
                class="h-[50vh] object-contain"
            />
        </div>
        {#if $page_views > 1}
            <h2
                class="text-primary px-5 sm:px-12 text-md py-5 flex items-center text-center justify-center"
            >
                You have visited this site {$page_views} times
            </h2>
        {/if}
    </LazyLoad>
</div>
