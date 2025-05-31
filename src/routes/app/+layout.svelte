<script lang="ts">
	import { CircleHelp } from '@lucide/svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let { children } = $props();
</script>

<div class="grid h-screen w-screen grid-cols-6">
	<aside class="border-2 border-r-gray-200 px-6 py-8">
		<Sidebar />
	</aside>
	<main class="col-span-5">
		{@render children()}
	</main>
</div>
