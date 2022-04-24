<template>
	<div>
		
		<FooterTwoBlocks />

		<section class="bg-black md:pl-20">
			<div class="container-wrapper">

				<div class="flex items-center justify-between pt-16 md:pt-24">
					
					<h2 class="w-4/5 mr-10 text-3xl text-white xs:text-4xl sm:text-5xl lg:text-6xl md:w-full">
						<b>Have an idea?</b> <br />
						Let's talk about it!
					</h2>

					<NuxtLink :to="{name: 'Contact'}" class="flex items-center group">
						
						<span class="hidden mr-6 font-bold text-right text-white align-middle transition-all duration-300 w-28 group-hover:translate-x-2 md:inline-block">
							Get in touch
						</span>

						<ButtonsCircleArrowRight />

					</NuxtLink>

				</div>

				<div class="block w-full h-[1px] mb-10 md:mb-20 mt-14 md:mt-20 bg-zinc-800"></div>

				<div class="justify-between block md:flex">

					<div class="w-full md:w-1/2">
						<nav class="w-full md:w-fit text-zinc-300">
							<ul class="gap-x-16 lg:gap-x-28 columns-3 md:columns-2">

								<li class="mb-4" v-for="(item, i) in menu" :key="i">
									<NuxtLink :to="{name:item.link}" class="transition-all duration-300 hover:text-white">{{ item.name }}</NuxtLink>
								</li>

							</ul>
						</nav>
					</div>

					<div class="w-full mt-8 md:w-1/2 text-zinc-300 md:mt-0">

						<p class="mb-2 text-xl font-bold">
							Contact us:
						</p>

						<a href="mailto:hello@senzdsn.com" class="transition-all duration-300 hover:text-white hvr-underline-from-left before:h-[2px] before:bg-white">
							hello@senzdsn.com
						</a>

					</div>
					
				</div>

				<div class="block w-full h-[1px] mb-6 mt-10 md:mt-16 md:mb-12 bg-zinc-800"></div>

				<div class="block pb-12 md:text-right">

					<p class="text-zinc-600">
						Copyright@2022 - Senz®
					</p>

				</div>

			</div>
		</section>

	</div>
</template>

<script>
	export default {
		data () {
			return {
				menu: [
					{ name: 'Home', link: 'Home' },
					{ name: 'About', link: 'About' },
					{ name: 'Services', link: 'Services' },
					{ name: 'Projects', link: 'Projects' },
					{ name: 'Contact', link: 'Contact' }
				]
			}
		}
	}
</script>

<style lang="scss" scooped>

</style>