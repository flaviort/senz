<template>
	<div>

		<div class="absolute z-50 w-full pl-6 pr-6 mx-auto mt-5 md:fixed md:items-center md:justify-between md:flex md:pr-0 md:w-auto md:flex-col md:h-screen mix-blend-difference md:mx-0 md:mt-0">

			<NuxtLink :to="{ name: 'Home' }" class="inline-block float-left w-24 h-auto md:mt-5 md:w-10 md:float-none md:block">
				<LogosSenzVertical class="hidden text-white md:block" />
				<LogosSenzHorizontal class="block text-white md:hidden" />
			</NuxtLink>

			<button class="fixed inline-block w-8 p-0 cursor-pointer top-4 md:-top-auto right-6 md:right-auto md:relative md:-translate-y-20 small:-translate-y-10 md:mx-auto open-fs-menu group" :class="{ active: isActive }" @click="toggle">
				<span class="relative overflow-hidden block w-full h-[2px] bg-zinc-400 my-1.5 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-translate-x-full before:transition-all before:duration-300 group-hover:before:translate-x-0 rounded will-change-transform transition-all duration-300"></span>
				<span class="relative overflow-hidden block w-full h-[2px] bg-zinc-400 my-1.5 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-translate-x-full before:transition-all before:duration-300 group-hover:before:translate-x-0 before:delay-100 rounded will-change-transform transition-all duration-300"></span>
				<span class="relative overflow-hidden block w-full h-[2px] bg-zinc-400 my-1.5 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-translate-x-full before:transition-all before:duration-300 group-hover:before:translate-x-0 before:delay-200 rounded will-change-transform transition-all duration-300"></span>
			</button>

			<a href="mailto:hello@senzdsn.com" class="hidden w-0 mb-5 transition-all duration-300 -rotate-90 small:hidden text-zinc-400 md:inline-block hover:text-white">hello@senzdsn.com</a>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive: false,
			}
		},

		methods: {
			toggle() {
				this.isActive = !this.isActive;
				this.$parent.$emit('isOpen')
				this.$setBodyClass()
			},
		},

		mounted() {
			var that = this;
			this.$parent.$on('isActive', function(){
				that.isActive = !that.isActive;
			});
		}
	}
</script>

<style lang="scss" scoped>
	.active {
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
</style>