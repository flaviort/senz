<template>
	<div>
		
		<FsMenu ref="fsMenuGlobal" />
		<SideMenu ref="sideMenuGlobal" />
		
		<div class="body-wrapper">

			<div class="fixed top-0 left-0 z-20 block w-full h-full transition-all duration-300 bg-black pointer-events-none overlay opacity-0 will-change-[opacity]"></div>

			<Nuxt class="relative main-container" />

			<Footer />

		</div>

		<ButtonsFollowMouse v-if="$device.isDesktop" />

	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	
</style>