<template>
	<div>

		<section class="relative min-h-screen md:pl-20">

			<h1>
				{{ title }}
			</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam exercitationem quod error culpa beatae, provident saepe pariatur vitae eius obcaecati hic harum quaerat fugiat dolorum officia maiores voluptates ipsam in numquam. Enim corrupti consequuntur, illo odit atque aperiam ea asperiores consectetur facilis quibusdam explicabo iusto delectus dolor repellendus quam praesentium totam? Fuga sit recusandae magni totam nobis voluptatibus praesentium cupiditate veritatis quod ut. Soluta rerum aspernatur repellat accusantium, sint, fugiat deleniti nostrum quas optio dolore minus perferendis ullam eaque. Alias enim dignissimos unde eligendi, expedita eum dolore vero voluptatum officia voluptatem fugit, laboriosam consequuntur nisi aliquam optio neque aspernatur!
			</p>

		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Projects'
			}
		},
		head() {
			return {
				title: this.title,
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: 'Projects description'
					}
				]
			}
		}
	}
</script>

<router>
	{
		name: 'Projects'
	}
</router>