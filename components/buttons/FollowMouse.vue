<template>
    <div>

        <div class="fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform" ref="circle">
			<div class="w-5 h-5 transition-all duration-500" ref="inner">
				<svg class="w-full h-full text-blue-600 stroke-blue-600 stroke-[3px] transition-transform duration-500" viewbox="-100 -100 200 200" preserveAspectRatio="xMidYMid" ref="svg">
					<path fill="currentColor" class="transition-colors transition-transform duration-500">
						<animate attributeName="d" dur="7s" repeatCount="indefinite" values="
							M46.4,-16.7C52.3,2.8,43.6,25.4,23.9,41.9C4.2,58.3,-26.6,68.6,-46.7,55.9C-66.9,43.2,-76.5,7.6,-67,-17C-57.4,-41.6,-28.7,-55.3,-4.2,-53.9C20.3,-52.6,40.6,-36.2,46.4,-16.7Z;

							M54.8,-18.7C63.8,9.9,58.9,42.2,38.7,57.9C18.6,73.7,-16.9,72.9,-40.3,55.9C-63.7,38.8,-74.9,5.4,-66.1,-22.8C-57.4,-51,-28.7,-74.1,-2.9,-73.2C22.9,-72.2,45.8,-47.3,54.8,-18.7Z;

							M65,-25.9C69.9,-5.8,49.9,17.6,25.4,35.5C1,53.4,-27.9,65.7,-43.7,55.3C-59.6,44.9,-62.5,11.8,-53.1,-14.4C-43.6,-40.6,-21.8,-59.9,4.1,-61.3C30,-62.6,60,-45.9,65,-25.9Z;

							M49.4,-11.1C58.5,12.2,56.8,44,38.7,58.3C20.6,72.7,-13.9,69.6,-34.3,53.3C-54.7,37,-61.1,7.5,-53.1,-14.2C-45,-36,-22.5,-50,-1.2,-49.6C20.1,-49.2,40.2,-34.4,49.4,-11.1Z;

							M65,-25.9C69.9,-5.8,49.9,17.6,25.4,35.5C1,53.4,-27.9,65.7,-43.7,55.3C-59.6,44.9,-62.5,11.8,-53.1,-14.4C-43.6,-40.6,-21.8,-59.9,4.1,-61.3C30,-62.6,60,-45.9,65,-25.9Z;

							M54.8,-18.7C63.8,9.9,58.9,42.2,38.7,57.9C18.6,73.7,-16.9,72.9,-40.3,55.9C-63.7,38.8,-74.9,5.4,-66.1,-22.8C-57.4,-51,-28.7,-74.1,-2.9,-73.2C22.9,-72.2,45.8,-47.3,54.8,-18.7Z;

							M46.4,-16.7C52.3,2.8,43.6,25.4,23.9,41.9C4.2,58.3,-26.6,68.6,-46.7,55.9C-66.9,43.2,-76.5,7.6,-67,-17C-57.4,-41.6,-28.7,-55.3,-4.2,-53.9C20.3,-52.6,40.6,-36.2,46.4,-16.7Z;
						"/>
					</path>
				</svg>
			</div>

			<span class="absolute text-white transition-all duration-500 scale-50 -rotate-180 -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 z-2" ref="span">
				View
			</span>

		</div>
        
    </div>
</template>

<script>
	export default {
		methods: {
			followMouse() {
				const gsap = this.$gsap
				const circle = this.$refs.circle;
				const circleSpan = this.$refs.inner;
				const circleSpanSvg = this.$refs.svg;
				const circleSpanText = this.$refs.span;
				let links = this.$root.$el.querySelectorAll('a, button');
				let projectLink = this.$root.$el.querySelectorAll('.project-link');

				for (let i = 0; i < links.length; i++) {
					links[i].addEventListener('mouseover', function(){
						circleSpan.classList.add('!w-[150px]', '!h-[150px]');
						circleSpanSvg.classList.add('!text-transparent');
					});
				};

				for (let i = 0; i < links.length; i++) {
					links[i].addEventListener('mouseleave', function(){
						circleSpan.classList.remove('!w-[150px]', '!h-[150px]');
						circleSpanSvg.classList.remove('!text-transparent');
					});
				};
				
				for (let i = 0; i < projectLink.length; i++) {
					projectLink[i].addEventListener('mouseover', function(){
						circleSpan.classList.add('!w-[150px]', '!h-[150px]');
						circleSpanSvg.classList.add('!text-blue-600');
						circleSpanText.classList.add('opacity-100', '!rotate-0', '!scale-100');
					});
				};

				for (let i = 0; i < projectLink.length; i++) {
					projectLink[i].addEventListener('mouseleave', function(){
						circleSpan.classList.remove('!w-[150px]', '!h-[150px]');
						circleSpanSvg.classList.remove('!text-blue-600');
						circleSpanText.classList.remove('opacity-100', '!rotate-0', '!scale-100');
					});
				};

				for (let i = 0; i < links.length; i++) {
					links[i].addEventListener('click', function(){
						setTimeout(function(){
							circleSpan.classList.remove('!w-[150px]', '!h-[150px]');
							circleSpanText.classList.remove('opacity-100', '!rotate-0', '!scale-100');
							circleSpanSvg.classList.remove('!text-transparent','!text-blue-600');
						}, 200);
					});
				};

				window.addEventListener("mousemove", moveCircle);

				function moveCircle(e) {
					gsap.to(circle, 0.3, {
						x: e.clientX,
						y: e.clientY
					});
				}
			}
		},

		mounted() {
			this.followMouse()
		},

		watch: {
			"$route.path": function() {
				this.$nextTick(function () {
					setTimeout(() => {
						this.followMouse()
					}, 600)
					// the timeout should be a little longer than the gsap / page transition itself
				})
			}
		}
	}
</script>