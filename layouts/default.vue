<template>
	<div>
		
		<FsMenu />
		<SideMenu />
		
		<div class="transition-all duration-300 body-wrapper will-change-auto">

			<Nuxt class="relative main-container" />

			<Footer />

		</div>

		<ButtonsFollowMouse />

	</div>
</template>

<script>
	export default {
		// set the name of the transition you want to use
		layoutTransition: 'my-layouts'
	}
</script>

<style>
	
</style>