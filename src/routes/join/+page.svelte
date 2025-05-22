<script lang="ts">
</script>

<main class="grid h-screen w-screen grid-cols-1 md:grid-cols-2">
	<div class="flex items-center justify-center text-center">
		<div class="w-[80%] md:w-[50%]">
			<img src="images/logo.svg" alt="Praze Logo" height="50px" width="50px" class="mx-auto mb-8" />

			<p class="mb-1 text-lg font-bold">Welcom to, Praze</p>
			<p class="mb-8 text-gray-500">Receive crypto tips directly in your wallet.</p>

			<div class="grid w-full items-center gap-6">
				<div class="flex flex-col space-y-1.5">
					<lable for="name">Name</lable>
					<input
						id="name"
						placeholder="Your Name"
						type="email"
						class="h-12 border-2 border-gray-300"
					/>
				</div>

				<div class="flex flex-col space-y-1.5">
					<lable for="username">Username</lable>
					<input
						id="username"
						placeholder="Username"
						type="text"
						class="h-12 border-2 border-gray-300"
					/>
				</div>

				<div class="flex flex-col space-y-1.5">
					<label for="address">Address</label>
					<input
						id="address"
						placeholder="Address"
						type="text"
						class="h-12 border-2 border-gray-300"
					/>
				</div>

				<div class="mt-2 grid w-full grid-cols-2 gap-4">
					<button class="h-12 active:scale-[99%]">Back</button>
					<button class="h-12 active:scale-[99%]">Next</button>
				</div>
			</div>

			<p class="mt-20 text-xs text-gray-500">
				By creating an account, you agree to our <span class="border-b border-b-gray-400"
					>terms of service</span
				>.
			</p>
		</div>
	</div>
	<div class="relative hidden h-screen w-full self-stretch bg-black md:block">
		<div class="flex h-full w-full items-center justify-center">
			<img src="images/login-1.jpeg" alt="Logo" class="h-full w-full object-cover" />
		</div>
	</div>
</main>
