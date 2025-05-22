<script lang="ts">
	import { ImageUp } from '@lucide/svelte';

	let step = $state(1);
</script>

<main class="relative h-screen w-screen">
	<section
		class="absolute top-1/2 left-1/2 flex h-2/3 w-1/3 -translate-1/2 flex-col items-center justify-between rounded-lg bg-white p-6 shadow-2xl"
	>
		<div class="w-full">
			<img src="images/logo.svg" alt="Praze Logo" height="48px" width="48px" class="mx-auto mb-4" />

			<h2 class="text-center text-2xl font-semibold">Welcome to Praze</h2>
			{#if step === 0}
				<p class="text-center text-gray-500">Receive tips from your supporters hassle free.</p>
			{/if}
		</div>
		{#if step === 0}
			<button
				class="w-[80%] cursor-pointer rounded-lg bg-black py-3 font-semibold text-white transition duration-300 hover:bg-gray-900 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:outline-none active:scale-[0.99] active:bg-gray-900"
				>Connect Wallet</button
			>
		{:else if step === 1}
			<div class="w-full space-y-6 px-10">
				<div class="flex flex-col space-y-2">
					<label for="username" class="font-semibold">Username</label>
					<input
						type="text"
						id="username"
						class="w-full rounded-lg border border-gray-400 px-3 py-3"
						placeholder="Username"
					/>
					<p class="text-xs font-semibold text-red-500">Username is not available.</p>
				</div>

				<div class="mb-8 flex flex-col space-y-2">
					<label for="name" class="font-semibold">Name</label>
					<input
						type="text"
						id="name"
						placeholder="Your Name"
						class="w-full rounded-lg border border-gray-400 px-3 py-3"
					/>
				</div>

				<button
					class="w-full rounded-lg bg-black py-3 font-semibold text-white transition duration-300 hover:bg-gray-900 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:outline-none active:scale-[0.99] active:bg-gray-900"
					>Next</button
				>
			</div>
		{:else if step === 2}
			<div class="w-full space-y-6 px-10">
				<div class="mb-8 flex items-center space-x-2">
					<div class="relative h-20 w-20 rounded-full ring-2 ring-gray-300">
						<ImageUp
							class="absolute top-1/2 left-1/2 -z-10 -translate-1/2"
							color="#ABABAB"
							size="36px"
							strokeWidth="1.5"
						/>
						<input type="file" id="image" alt="User image" class="h-full w-full text-white" />
					</div>
					<label for="image" class="font-semibold">Choose an image </label>
				</div>

				<div class="relative mb-8 flex flex-col space-y-2">
					<label for="about" class="font-semibold">About</label>
					<textarea
						id="about"
						placeholder="About Yourself.."
						class="w-full rounded-lg border border-gray-400 px-3 py-3"
					></textarea>
					<p class="absolute right-3 bottom-3 text-sm font-medium text-gray-500">1/100</p>
				</div>

				<button
					class="w-full rounded-lg bg-black py-3 font-semibold text-white transition duration-300 hover:bg-gray-900 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:outline-none active:scale-[0.99] active:bg-gray-900"
					>Generate</button
				>
			</div>
		{/if}
		<p class="mt-2 text-center text-xs text-gray-400">
			By signing up, you agree to our <span class="border-b border-b-gray-400"
				>Terms of Service</span
			>
			and <span class="border-b border-b-gray-400">Privacy Policy</span>.
		</p>
	</section>

	<section class="h-screen rounded-2xl p-4">
		<div class="h-full w-full rounded-2xl">
			<img src="images/1.jpeg" alt="lgo" class="h-full w-full rounded-2xl object-cover" />
		</div>
	</section>
</main>
