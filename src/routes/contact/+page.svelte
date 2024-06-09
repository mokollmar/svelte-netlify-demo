<script>
    import LazyLoad from "$lib/lazyload.svelte";

    let email = "";
    let message = "";
</script>

<svelte:head>
    <title>Contact</title>
</svelte:head>

<div class="flex flex-grow items-center flex-col justify-center text-primary">
    <form
        name="Contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/contact/success"
        class="w-screen flex flex-col items-center gap-6 md:gap-10 px-5 sm:px-0"
    >
        <input type="hidden" name="form-name" value="Contact" />

        <input
            bind:value={email}
            id="email"
            name="email"
            type="text"
            placeholder="eMail"
            class="w-full sm:w-4/5 px-5 py-3 lg:w-3/5 xl:w-2/5 text-xl rounded-3xl border-primary border-2"
        />

        <textarea
            bind:value={message}
            id="message"
            name="message"
            title="Last Name"
            placeholder="Your Message"
            class="w-full sm:w-4/5 px-5 py-3 lg:w-3/5 xl:w-2/5 text-xl min-h-[20vh] rounded-3xl border-primary border-2"
        />

        <button type="submit" value="Submit">
            <h4
                class={"px-8 sm:px-16 py-3 font-bold rounded-full text-xl hover:bg-opacity-75 my-5 md:text-2xl bg-primary text-white"}
            >
                Submit
            </h4>
        </button>
    </form>
</div>
