<template>
	<div>
		
		<section class="fixed left-0 z-40 block w-[calc(100vw-80px)] md:w-[600px] h-screen py-32 pl-7 md:pl-5 text-black transition-all duration-500 bg-white top-o will-change-transform -translate-x-full" :class="{ active: isOpen }" ref="fsmenu">
			<div class="flex items-center w-full h-full md:justify-center">
				<div class="flex">
					<div class="block">
						
						<p class="block mb-6 md:mb-10 text-zinc-400">
							Menu
						</p>

						<nav>
							<ul>
								<li class="mb-5 text-4xl font-bold text-black md:mb-7 md:text-5xl" v-for="(item, i) in menu" :key="i">
									<NuxtLink :to="{name:item.link}" class="transition-all duration-300">{{ item.name }}</NuxtLink>
								</li>
							</ul>
						</nav>

					</div>

					<!--div class="block">
						
						<p class="block mb-10 text-zinc-400">
							Social
						</p>

						<nav>
							<ul>
								<li class="mb-6 text-large">
									<a href="#" class="hvr-underline-from-left before:h-[1px]" target="_blank">Facebook</a>
								</li>

								<li class="mb-6 text-large">
									<a href="#" class="hvr-underline-from-left before:h-[1px]" target="_blank">Instagram</a>
								</li>

								<li class="mb-6 text-large">
									<a href="#" class="hvr-underline-from-left before:h-[1px]" target="_blank">Behance</a>
								</li>
							</ul>
						</nav>

					</div-->
				</div>
			</div>
		</section>

	</div>
</template>

<script>
	export default {
		data () {
			return {
				isOpen: false,
				menu: [
					{ name: 'Home', link: 'Home' },
					{ name: 'About', link: 'About' },
					{ name: 'Services', link: 'Services' },
					{ name: 'Projects', link: 'Projects' },
					{ name: 'Contact', link: 'Contact' }
				]
			}
		},

		mounted() {
			var _this = this;

			this.$root.$on('isOpen', function(){
				_this.isOpen = !_this.isOpen;
			});
		}
	}
</script>

<style lang="scss" scoped>
	.active {
		transform: none;
	}
</style>