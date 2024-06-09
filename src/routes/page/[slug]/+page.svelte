<script>
    import { onMount } from "svelte";

    let slug = "";
    $: console.log("The Slug was: ", slug);

    export let data;

    onMount(() => (slug = data.props.slug));
</script>

<svelte:head>
    <title>Couldn't find: {slug}</title>
</svelte:head>

<div class="flex flex-grow flex-col items-center justify-center">
    <h1 class="text-3xl text-primary">The slug is: "{slug}"</h1>
</div>
