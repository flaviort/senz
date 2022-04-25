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
								<li class="mb-5 text-4xl font-bold text-black menu-link md:mb-7 md:text-5xl" v-for="(item, i) in menu" :key="i" @click="toggle">
									<NuxtLink :to="{name:item.link}" class="transition-all duration-300" ref="menu">{{ item.name }}</NuxtLink>
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

		methods: {
			toggle() {
				this.isOpen = !this.isOpen;
				this.$parent.$emit('isActive')
				this.$setBodyClass()
			},

			animateMenuItem() {
				//const menuLink = this.$refs.menu;
				//let hover = this.$gsap.to(menuLink, { autoAlpha: 0 });
				//menuLink.addEventListener("mouseenter", () => hover.play());
			},
		},

		mounted() {
			//this.animateMenuItem()
			var that = this;
			this.$parent.$on('isOpen', function(){
				that.isOpen = !that.isOpen;
			});
		}
	}
</script>

<style lang="scss" scoped>
	.active {
		transform: none;
	}
</style>