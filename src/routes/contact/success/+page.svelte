<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let count = 5;

    onMount(() => setInterval(countDown, 1000));

    function countDown() {
        --count;
    }

    $: if (count == 0) {
        goto("/");
    }
</script>

<div class="flex flex-grow items-center flex-col justify-center px-5">
    <h2 class="text-center py-5 text-primary text-2xl sm:text-3xl">
        <p>Thanks for your Submission!</p>
    </h2>
    <p class="text-center text-primary text-xl sm:text-2xl">
        You wil be automatically redirected in: {count}
    </p>
</div>
