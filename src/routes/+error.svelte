<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center text-center text-primary">
	<h1 class="text-center my-5 text-3xl">Sorry there was an error!</h1>
	<p class="py-5">{$page.status}: {$page.error.message}</p>
</div>
