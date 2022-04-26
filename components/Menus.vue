<template>
	<div>
		
		<!-- FS MENU -->
		<section class="fs-menu fixed left-0 z-40 block w-[calc(100vw-80px)] md:w-[600px] h-screen py-32 pl-7 md:pl-5 text-black bg-white top-o will-change-transform -translate-x-full pointer-events-none" :class="{ active: isOpen }" ref="fsMenu">
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

		<!-- SIDE MENU -->
		<section class="absolute z-50 w-full pl-6 pr-6 mx-auto mt-5 md:fixed md:items-center md:justify-between md:flex md:pr-0 md:w-auto md:flex-col md:h-screen mix-blend-difference md:mx-0 md:mt-0">

			<NuxtLink :to="{ name: 'Home' }" class="inline-block float-left w-24 h-auto md:mt-5 md:w-10 md:float-none md:block">
				<LogosSenzVertical class="hidden text-white transition-all duration-300 md:block hover:text-zinc-400" />
				<LogosSenzHorizontal class="block text-white transition-all duration-300 md:hidden hover:text-zinc-400" />
			</NuxtLink>

			<button class="fixed inline-block w-8 p-0 cursor-pointer top-4 md:-top-auto right-6 md:right-auto md:relative md:-translate-y-20 small:-translate-y-10 md:mx-auto open-fs-menu group button-side-menu" :class="{ active: isOpen }" @click="toggle">
				<span class="relative overflow-hidden block w-full h-[2px] bg-zinc-400 my-1.5 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-translate-x-full before:transition-all before:duration-300 group-hover:before:translate-x-0 rounded will-change-transform transition-all duration-300"></span>
				<span class="relative overflow-hidden block w-full h-[2px] bg-zinc-400 my-1.5 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-translate-x-full before:transition-all before:duration-300 group-hover:before:translate-x-0 before:delay-100 rounded will-change-transform transition-all duration-300"></span>
				<span class="relative overflow-hidden block w-full h-[2px] bg-zinc-400 my-1.5 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-translate-x-full before:transition-all before:duration-300 group-hover:before:translate-x-0 before:delay-200 rounded will-change-transform transition-all duration-300"></span>
			</button>

			<a href="mailto:hello@senzdsn.com" class="hidden w-0 mb-5 transition-all duration-300 -rotate-90 small:hidden text-zinc-400 md:inline-block hover:text-white">hello@senzdsn.com</a>

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
				this.setBodyClass()
				this.animateFs()
			},

			animateFs() {
				this.tl.reversed(!this.tl.reversed());
			}
		},

		mounted: function() {
			let fsmenu = this.$refs.fsMenu
			let fsmenuTitle = this.$refs.menuTitle
			let fsmenuLink = this.$refs.menuLink

			this.tl = this.$gsap.timeline({ paused: true })
				.to(fsmenu, { x: 0 })
				.fromTo(fsmenuTitle, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0 }, .1)
				.fromTo(fsmenuLink, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, stagger: .1 }, .2)
				.reverse();
		}
	}
</script>

<style lang="scss" scoped>
	.button-side-menu {
		&.active {
			span {
				&:nth-child(1) {
					transform: translateY(8px) rotate(45deg);

					&:before {
						transform: none;
					}
				}

				&:nth-child(2) {
					transform: translateX(-100%);
					opacity: 0;
				}

				&:nth-child(3) {
					transform: translateY(-8px) rotate(-45deg);

					&:before {
						transform: none;
					}
				}
			}
		}
	}

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