export default {
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Senz®',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'author', content: 'Senz Design'},

			// facebook
			{ property: 'og:locale', content: 'en-US' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:title', content: 'Senz®' },
			{ property: 'og:description', content: "Whether you're a startup or a growing company, we provide everything you need to reach your clients." },
			{ property: 'og:url', content: 'https://senzdsn.com/' },
			{ property: 'og:site_name', content: 'Senz®' },
			{ property: 'og:image', content: 'https://senzdsn.com/og-image.jpg' },
			{ property: 'og:image:secure_url', content: 'https://senzdsn.com/og-image.jpg' },
			{ property: 'og:image:width', content: '1200' },
			{ property: 'og:image:height', content: '630' },
		],
		link: [
			{ rel: 'shortcut icon', type: 'image/png', href: 'favicon.png' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
		],
		script: [
			
		]
	},

	// Global CSS (and scss/sass too): https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/scss/main'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		//'~/assets/js/global.js'
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/router-extras',
		'@nuxt/postcss8',
		'nuxt-gsap-module'
	],

	// gsap
	gsap: {
		extraPlugins: {
			scrollTo: true,
			scrollTrigger: true
		},
		extraEases: {
			expoScaleEase: true
		}
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/style-resources',
		'vue-scrollto/nuxt',
	],

	// Insert all global variables here
	styleResources: {
		scss: [
			'~/assets/scss/variables.scss'
		]
	},

	// Rerite router routes (insert here the name on the subfolder)
	router: {
		//base: '/test/'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},

	// Specify a transition to use on all pages
	/*
	pageTransition: {
		name: 'page',
		mode: 'out-in',
		css: false,
	
		beforeEnter(el) {
			this.$gsap.set(el, {
				opacity: 0
			})
		},
	
		enter(el, done) {
			this.$gsap.to(el, {
				opacity: 1,
				duration: 0.5,
				ease: 'power2.inOut',
				onComplete: done
			})
		},
	
		leave(el, done) {
			this.$gsap.to(el, {
				opacity: 0,
				duration: 0.5,
				ease: 'power2.inOut',
				onComplete: done
			})
		}
	}
	*/
}
