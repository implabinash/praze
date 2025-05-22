<script lang="ts">
	let isHovered = $state(false);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- Nav Bar -->
<nav class=" w-screen px-6 py-4 md:px-12 lg:px-20">
	<div class="flex items-center justify-between">
		<div class="flex items-center">
			<a href="/" class="text-xl font-bold">
				<span class="flex items-center gap-2">
					<img src="images/logo.svg" alt="Praze Logo" height="24px" width="24px" />
					Praze
				</span>
			</a>
		</div>
		<div class="hidden items-center md:flex">
			<!-- <a href="#" class="px-4 py-2">Home</a>
		<a href="#" class="px-4 py-2">Features</a>
		<a href="#" class="px-4 py-2">Pricing</a>
		<a href="#" class="px-4 py-2">Gallery</a>
		<a href="#" class="px-4 py-2">Community</a> -->
			<a
				href="/"
				class="ml-4 cursor-pointer rounded-full border-2 border-gray-200 px-3 py-1 text-black transition-colors"
				>Sign In</a
			>
			<a
				href="/"
				class="ml-4 cursor-pointer rounded-full border-2 border-black bg-black px-3 py-1 text-white transition-colors hover:bg-gray-800"
				>Get Started</a
			>
		</div>
	</div>
</nav>

<!-- Hero Section -->
<main class="px-6 md:px-12 lg:px-20">
	<div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-28 lg:grid-cols-2">
		<div>
			<h1 class="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
				Your Work Deserves More Than Likes
			</h1>
			<p class="mb-8 text-lg text-gray-600">
				Let fans send you real tips on-chain. No sign-ups, no middlemen.<br /> Receive crypto tips directly
				in your wallet.
			</p>

			<div class="mb-2 flex flex-wrap gap-4">
				<button
					class="cursor-pointer rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-gray-800"
					>Join Praze</button
				>

				<p
					class="cursor-not-allowed rounded-full border border-gray-300 bg-white px-8 py-3 font-medium text-black transition-colors hover:border-gray-400 hover:bg-[#00FF40]"
					onmouseenter={() => {
						isHovered = !isHovered;
					}}
					onmouseleave={() => {
						isHovered = !isHovered;
					}}
				>
					{isHovered ? 'Comming Soon!' : 'Explore Crearors'}
				</p>
			</div>

			<div class="flex items-center">
				<div class="flex -space-x-3">
					<img
						src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
						class="h-9 w-9 rounded-full border-2 border-white"
						alt="User"
					/>
					<img
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
						class="h-9 w-9 rounded-full border-2 border-white"
						alt="User"
					/>
					<img
						src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
						class="h-9 w-9 rounded-full border-2 border-white"
						alt="User"
					/>
				</div>
				<p class="ml-2 text-sm text-gray-600">
					Join with <span class="font-semibold">10+</span> Creators.
				</p>
			</div>
		</div>

		<div class="grid w-full max-w-4xl grid-cols-2 gap-4 p-4">
			<div class="image-container h-[50vh] md:h-[80vh]">
				<div class="image-list scroll-up space-y-4">
					<img src="images/1.jpeg" alt="User 1" />
					<img src="images/2.jpeg" alt="User 2" />
					<img src="images/3.jpeg" alt="User 3" />
					<img src="images/4.jpeg" alt="User 4" />

					<img src="images/1.jpeg" alt="User 1" />
					<img src="images/2.jpeg" alt="User 2" />
					<img src="images/3.jpeg" alt="User 3" />
					<img src="images/4.jpeg" alt="User 4" />
				</div>
			</div>

			<div class="image-container h-[50vh] md:h-[80vh]">
				<div class="image-list scroll-down space-y-4">
					<img src="images/1.jpeg" alt="User 5" />
					<img src="images/2.jpeg" alt="User 6" />
					<img src="images/3.jpeg" alt="User 7" />
					<img src="images/4.jpeg" alt="User 8" />

					<img src="images/1.jpeg" alt="User 5" />
					<img src="images/2.jpeg" alt="User 6" />
					<img src="images/3.jpeg" alt="User 7" />
					<img src="images/4.jpeg" alt="User 8" />
				</div>
			</div>
		</div>
	</div>
</main>

<!-- Footer -->
<footer class="bg-white px-6 pb-10 md:px-12 lg:px-20">
	<div class="container mx-auto px-6">
		<div
			class="mt-10 flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row"
		>
			<p class="text-sm text-gray-600">© Praze 2025. All rights reserved.</p>
			<div class="mt-4 flex space-x-4 md:mt-0">
				<a href="/" class="text-gray-400 hover:text-gray-600">
					<span class="sr-only">Twitter</span>
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="100"
						height="100"
						viewBox="0 0 30 30"
					>
						<path
							d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
						></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.scroll-up {
		animation: scrollUp 20s linear infinite;
	}
	.scroll-down {
		animation: scrollDown 20s linear infinite;
	}
	@keyframes scrollUp {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}
	@keyframes scrollDown {
		0% {
			transform: translateY(-50%);
		}
		100% {
			transform: translateY(0);
		}
	}

	.image-container {
		overflow: hidden;
		position: relative;
		mask-image: linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%);
	}
	.image-list {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.image-list img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
</style>
