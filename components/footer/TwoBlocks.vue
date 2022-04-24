<template>
	<section class="relative md:pl-20 bg-zinc-900">
		<div class="flex flex-col container-wrapper md:gap-4 two-blocks md:columns-2 md:flex-row">
			
			<div class="relative w-full border-b border-solid border-zinc-800 py-14 md:py-40 md:w-1/2 md:static md:border-0">
				
				<NuxtLink :to="{ name: 'Projects'}" class="absolute overflow-hidden top-0 left-0 w-screen md:w-[50vw] h-full z-0 hover:bg-black transition-all duration-300 -ml-6 md:ml-0 group">
					<span :style="{ backgroundImage: `url(${projectsBg})` }" class="absolute top-0 left-0 block w-full h-full transition-all duration-1000 opacity-0 group-hover:opacity-20 group-hover:scale-110"></span>
				</NuxtLink>

				<h3 class="relative text-2xl font-bold text-white pointer-events-none z-2">
					Projects
				</h3>

				<p class="relative block mt-5 mb-10 text-white pointer-events-none z-2 md:w-[250px] max-w-full">
					Take a look at what we've created and get inspired
				</p>

				<p class="relative text-white pointer-events-none z-2">
					View our Projects
				</p>

			</div>

			<div class="relative w-full py-14 md:py-40 md:w-1/2 md:static">
				
				<NuxtLink :to="{ name: 'Services' }" class="absolute overflow-hidden top-0 right-0 w-screen md:w-[50vw] h-full z-0 hover:bg-black transition-all duration-1000 -mr-6 md:mr-0 group">
					<span :style="{ backgroundImage: `url(${servicesBg})` }" class="absolute top-0 left-0 block w-full h-full transition-all duration-1000 opacity-0 group-hover:opacity-20 group-hover:scale-110"></span>
				</NuxtLink>

				<h3 class="relative text-2xl font-bold text-white pointer-events-none z-2">
					Services
				</h3>

				<p class="relative block mt-5 mb-10 text-white pointer-events-none z-2 md:w-[250px] max-w-full">
					See what we can do and learn more about working together
				</p>

				<p class="relative text-white pointer-events-none z-2">
					View our Services
				</p>

			</div>

		</div>
	</section>
</template>

<script>
	import servicesBg from '~/assets/img/services-bg.jpg'
	import projectsBg from '~/assets/img/projects-bg.jpg'
	
	export default {
		data() {
			return {
				servicesBg,
				projectsBg
			}
		}
	}
</script>

<style lang="scss" scooped>

</style>