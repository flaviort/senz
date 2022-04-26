<template>
	<div>

		<section class="relative flex items-center justify-start pt-40 pb-28 sm:py-52 md:py-40 md:pl-20">

			<NuxtLink :to="{name: 'Contact'}" class="absolute z-10 hidden px-8 py-3 text-sm text-white transition-all duration-300 border border-white rounded-full md:inline-block top-6 right-6 hover:bg-white hover:text-black link">
				Get in touch
			</NuxtLink>

			<a href="#" v-scroll-to="'#projects'" class="absolute right-5 bottom-5 sm:right-10 sm:bottom-10 md:right-16 md:bottom-16 lg:right-24 lg:bottom-24 z-2 animate-fade-in-out-down">
				<ButtonsArrowDown />
			</a>

			<div class="text-white container-wrapper">
				
				<h1 class="xs:text-6xl text-[12vw] font-bold sm:text-7xl lg:text-8xl xl:text-9xl leading-none">
					<span>We create</span><br />
					<span><span class="text-white-shadow">unique</span> digital</span><br />
					<span>experiences</span>
				</h1>

				<p class="block w-2/3 max-w-full mt-10 mb-12 sm:w-1/2 lg:w-4/12">
					Whether you're a startup or a growing company, we provide everything you need to reach your clients.
				</p>

				<NuxtLink :to="{ name: 'Services'}" class="inline-block px-10 py-4 transition-all duration-300 border border-white rounded-full hover:bg-white hover:text-black">
					Our services
				</NuxtLink>

			</div>
		</section>

		<section class="relative py-24 text-white md:pl-20 md:py-52" id="projects">
			<div class="container-wrapper">
				
				<h3 class="mb-20 text-5xl font-bold sm:mb-32 sm:text-6xl lg:text-7xl md:mb-72 projects-title mix-blend-difference">
					<span>Featured</span><br />
					<span class="text-white-shadow">projects</span>
				</h3>

				<div class="relative flex projects">

					<div class="w-full md:w-1/2 description md:pt-[25vh] relative z-2 text-black">

						<div class="items-center w-full mb-20 md:mb-0 md:flex md:h-screen md:w-3/4 xl:w-2/3">
							<div class="project-infos-01">

								<NuxtLink :to="{ name: 'LP Fitness' }" class="block mb-7 md:hidden">
									<picture class="relative h-0 pb-[90%] w-full block">
										<img src="~/assets/img/projects/thumb-lp-fitness.jpg" srcset="~/assets/img/projects/thumb-lp-fitness@2x.jpg 2x" alt="LP Fitness" class="absolute object-cover object-top w-full h-full">
									</picture>
								</NuxtLink>

								<p class="text-base sm:text-xl md:text-2xl">
									LP Fitness
								</p>

								<h2 class="block mt-1 mb-4 text-2xl font-bold md:mt-4 md:mb-6 sm:text-3xl md:text-4xl">
									Online couching and personal trainer
								</h2>

								<p class="text-sm md:text-base">
									branding, web
								</p>

							</div>
						</div>

						<div class="items-center w-full mb-20 md:mb-0 md:flex md:h-screen md:w-3/4 xl:w-2/3">
							<div class="project-infos-02">

								<NuxtLink :to="{ name: 'LP Fitness' }" class="block mb-7 md:hidden">
									<picture class="relative h-0 pb-[90%] w-full block">
										<img src="~/assets/img/projects/thumb-lp-fitness.jpg" srcset="~/assets/img/projects/thumb-lp-fitness@2x.jpg 2x" alt="LP Fitness" class="absolute object-cover object-top w-full h-full">
									</picture>
								</NuxtLink>

								<p class="text-base sm:text-xl md:text-2xl">
									Ultra Capital
								</p>

								<h2 class="block mt-1 mb-4 text-2xl font-bold md:mt-4 md:mb-6 sm:text-3xl md:text-4xl">
									Lorem, ipsum dolor sit amet consectetur adipisicing
								</h2>

								<p class="text-sm md:text-base">
									web
								</p>

							</div>
						</div>

						<div class="md:flex items-center w-full md:h-screen md:w-3/4 xl:w-2/3 md:mb-[20vh] mb-20">
							<div class="project-infos-03">

								<NuxtLink :to="{ name: 'LP Fitness' }" class="block mb-7 md:hidden">
									<picture class="relative h-0 pb-[90%] w-full block">
										<img src="~/assets/img/projects/thumb-lp-fitness.jpg" srcset="~/assets/img/projects/thumb-lp-fitness@2x.jpg 2x" alt="LP Fitness" class="absolute object-cover object-top w-full h-full">
									</picture>
								</NuxtLink>

								<p class="text-base sm:text-xl md:text-2xl">
									Mender
								</p>

								<h2 class="block mt-1 mb-4 text-2xl font-bold md:mt-4 md:mb-6 sm:text-3xl md:text-4xl">
									Find the perfect professional for you
								</h2>

								<p class="text-sm md:text-base">
									web
								</p>

							</div>
						</div>

					</div>

					<div class="hidden md:block project-image h-[90vh] w-1/2 xl:w-5/12 overflow-hidden float-right">
						<div class="relative w-full h-full">
							
							<div class="absolute top-0 left-0 block w-full h-full project-link-01 bg-slate-300 z-3">
								<NuxtLink :to="{ name: 'LP Fitness' }" class="block w-full h-full project-link">
									<picture>
										<img src="~/assets/img/projects/thumb-lp-fitness.jpg" srcset="~/assets/img/projects/thumb-lp-fitness@2x.jpg 2x" alt="LP Fitness" class="object-cover w-full h-full">
									</picture>
								</NuxtLink>
							</div>

							<div class="absolute top-0 left-0 block w-full h-full project-link-02 bg-slate-300 z-2">
								<NuxtLink :to="{ name: 'Services' }" class="block w-full h-full project-link">
									bbbbb
								</NuxtLink>
							</div>

							<div class="absolute top-0 left-0 block w-full h-full project-link-03 bg-slate-300 z-1">
								<NuxtLink :to="{ name: 'Contact' }" class="block w-full h-full project-link">
									ccccc
								</NuxtLink>
							</div>

						</div>
					</div>
					
				</div>

				<div class="block text-center md:pt-28 md:pb-52">
					<NuxtLink :to="{ name: 'Projects' }" class="inline-block px-10 py-5 text-black transition-all duration-300 border border-black rounded-full hover:bg-black hover:text-white">
						View all projects
					</NuxtLink>
				</div>

			</div>
		</section>

	</div>
</template>

<script>
	const vh = (coef) => window.innerHeight * (coef/100);

	export default {
		data() {
			return {
				title: "Senz®"
			}
		},

		head() {
			return {
				title: this.title,
				meta: [{
					hid: "description",
					name: "description",
					content: "Whether you're a startup or a growing company, we provide everything you need to reach your clients."
				}]
			}
		},

		methods: {
			animateOnScroll() {
				this.$ScrollTrigger.create({
					trigger: '.projects .project-image',
					start: vh(-5) + 'top',
					end: vh(250) + 'top',
					pin: true,
				})
    		},

			bgColor() {
				let tl = this.$gsap.timeline({ paused: true });
				tl.to('body', { backgroundColor: '#fff' });

				this.$ScrollTrigger.create({
					trigger: '.projects-title',
					start: '-100 top',
					end: '200 top',
					scrub: true,
					animation: tl,
					//markers: true,
				})
			},

			projectImagesScroll01() {
				let tl = this.$gsap.timeline({ paused: true });
				tl.to('.project-link-01', { autoAlpha: 0, });

				this.$ScrollTrigger.create({
					trigger: '.project-infos-01',
					start: 'top top',
					end: vh(30) + 'top',
					scrub: true,
					animation: tl,
				})
			},

			projectImagesScroll02() {
				let tl = this.$gsap.timeline({ paused: true });
				tl.to('.project-link-02', { autoAlpha: 0, });

				this.$ScrollTrigger.create({
					trigger: '.project-infos-02',
					start: 'top top',
					end: vh(30) + 'top',
					scrub: true,
					animation: tl,
				})
			},
		},

		mounted() {
			this.animateOnScroll()	
			this.projectImagesScroll01()
			this.projectImagesScroll02()
			this.bgColor()
		},

		beforeRouteLeave(from, to, next) {
			this.$nextTick(() => {
				this.$gsap.to('body', { clearProps: 'all', })
				this.$ScrollTrigger.getAll().forEach(ST => ST.kill());
				next();
			})
		},
	}
</script>

<style lang="scss">

</style>

<router>
	{
		name: 'Home'
	}
</router>