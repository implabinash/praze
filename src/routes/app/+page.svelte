<script>
	import { MoveRight } from '@lucide/svelte';
</script>

<main class="flex h-screen w-full items-center justify-center text-center">
	<section class="flex flex-col items-center space-y-4">
		<h1 class="text-6xl font-bold">Hi, Username</h1>
		<div class="flex items-center gap-2">
			<p class="text-lg">Check out our latest features</p>
			<a href="/app/updates" class="rounded-sm bg-black px-3 py-1"><MoveRight color="white" /></a>
		</div>
	</section>
</main>
