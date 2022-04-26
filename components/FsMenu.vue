<template>
	<div>

		<section class="fs-menu fixed left-0 z-40 block w-[calc(100vw-80px)] md:w-[600px] h-screen py-32 pl-7 md:pl-5 text-black bg-white top-o will-change-transform -translate-x-full pointer-events-none" :class="{ active: isFs }" ref="fsMenu">
			<div class="flex items-center w-full h-full md:justify-center">
				<div class="flex">
					<div class="block">
						
						<p class="block mb-6 md:mb-10 text-zinc-400" ref="menuTitle">
							Menu
						</p>

						<nav>
							<ul>
								<li class="mb-4 text-4xl font-bold text-black menu-link md:mb-6 md:text-5xl" ref="menuLink" v-for="(item, i) in menu" :key="i" @click="toggle">
									<NuxtLink :to="{name:item.link}" class="relative inline-block py-1 overflow-hidden group"><span class="relative block transition-all duration-300 span-1 group-hover:-translate-y-16 group-hover:opacity-0" ref="menuText">{{ item.name }}</span><span class="absolute left-0 text-blue-600 transition-all duration-300 opacity-0 span-2 top-16 group-hover:top-0 group-hover:opacity-100">{{ item.name }}</span></NuxtLink>
								</li>
							</ul>
						</nav>

					</div>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				isFs: false,

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
				this.isFs = !this.isFs
				this.$parent.$emit('isOpen')
				this.setBodyClass()
				this.tl.reversed(!this.tl.reversed())
			},
		},

		mounted() {
			let fsmenu = this.$refs.fsMenu
			let fsmenuTitle = this.$refs.menuTitle
			let fsmenuLink = this.$refs.menuLink

			this.tl = this.$gsap.timeline({ paused: true })
				.to(fsmenu, { x: 0 })
				.fromTo(fsmenuTitle, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0 }, .1)
				.fromTo(fsmenuLink, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, stagger: .1 }, .2)
				.reverse();

			let that = this;
			this.$parent.$on('isFs', function(){
				this.$refs.fsMenuGlobal.isFs = !this.$refs.fsMenuGlobal.isFs
				this.setBodyClass()
				this.$refs.fsMenuGlobal.tl.reversed(!this.$refs.fsMenuGlobal.tl.reversed())
			});
		}
	}
</script>

<style lang="scss" scoped>
	.fs-menu {
		&.active {
			pointer-events: auto;
		}

		.nuxt-link-exact-active {
			pointer-events: none;

			.span-1 {
				opacity: 0;
				transform: translateY(-4rem);
			}

			.span-2 {
				opacity: 1;
				transform: translateY(-4rem);
			}
		}
	}
</style>