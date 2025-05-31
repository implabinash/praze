<script lang="ts">
	import {
		LayoutDashboard,
		PaintbrushVertical,
		Settings,
		RefreshCw,
		ChevronsDownUp,
		CircleHelp
	} from '@lucide/svelte';

	let isClicked = $state(false);
</script>

<section class="flex h-full flex-col justify-between">
	<div>
		<!-- Praze Logo -->
		<div class="mb-8 flex items-center gap-2">
			<img
				src="images/app_logo.png"
				alt="Praze Logo"
				height="32px"
				width="32px"
				class="rounded-sm"
			/>
			<p class="text-2xl font-semibold">Praze</p>
		</div>

		<!-- Sidebar Navigation -->
		<nav>
			<ul class="space-y-1">
				<li class="rounded-lg bg-[#f5f5f5] px-3 py-3">
					<a href="/app" class="flex items-center gap-3 font-medium text-gray-700">
						<LayoutDashboard color="gray" size="22" />
						Dashboard
					</a>
				</li>

				<li class="rounded-lg px-3 py-3 hover:bg-[#f5f5f5]">
					<a href="/app/customization" class="flex items-center gap-3 font-medium text-gray-700">
						<PaintbrushVertical color="gray" size="22" />
						Customize
					</a>
				</li>

				<li class="rounded-lg px-3 py-3 hover:bg-[#f5f5f5]">
					<a href="/app/settings" class="flex items-center gap-3 font-medium text-gray-700">
						<Settings color="gray" size="22" />
						Settings
					</a>
				</li>
			</ul>
		</nav>
	</div>

	<!-- Bottom Sidebar -->
	<div class="w-full space-y-3 rounded-lg p-2">
		<nav>
			<ul class="space-y-1">
				<li class="rounded-lg px-3 py-3 hover:bg-[#f5f5f5]">
					<a href="/app/customization" class="flex items-center gap-3 font-medium text-gray-700">
						<CircleHelp color="gray" size="22" />
						Help
					</a>
				</li>

				<li class="rounded-lg px-3 py-3 hover:bg-[#f5f5f5]">
					<a href="/app/updates" class="flex items-center gap-3 font-medium text-gray-700">
						<RefreshCw color="gray" size="22" class="" />
						<!-- Animate spin when there is an update -->
						Updates
					</a>
				</li>
			</ul>
		</nav>

		<!-- Profile Button -->
		<div class="flex flex-col gap-3 rounded-lg bg-[#f5f5f5] p-2">
			{#if isClicked}
				<button
					class="cursor-pointer rounded-lg bg-red-500 py-3 font-semibold text-white transition duration-300 hover:bg-red-400 focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:outline-none active:scale-[0.99]"
					>Logout</button
				>
			{/if}

			<button
				class="relative flex w-full cursor-pointer items-center justify-between gap-2"
				onclick={() => {
					isClicked = !isClicked;
				}}
			>
				<div class="flex items-center gap-2">
					<img src="images/4.jpeg" alt="User Profile" class="h-8 w-8 rounded-full object-cover" />
					<p class="font-medium">User Name</p>
				</div>
				<ChevronsDownUp color="gray" size="22" />
			</button>
		</div>
	</div>
</section>
