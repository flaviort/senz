<template>
	<div>

		<section class="relative min-h-screen text-white md:pl-20">
			
			<h1>
				{{ title }}
			</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam exercitationem quod error culpa beatae, provident saepe pariatur vitae eius obcaecati hic harum quaerat fugiat dolorum officia maiores voluptates ipsam in numquam. Enim corrupti consequuntur, illo odit atque aperiam ea asperiores consectetur facilis quibusdam explicabo iusto delectus dolor repellendus quam praesentium totam? Fuga sit recusandae magni totam nobis voluptatibus praesentium cupiditate veritatis quod ut. Soluta rerum aspernatur repellat accusantium, sint, fugiat deleniti nostrum quas optio dolore minus perferendis ullam eaque. Alias enim dignissimos unde eligendi, expedita eum dolore vero voluptatum officia voluptatem fugit, laboriosam consequuntur nisi aliquam optio neque aspernatur!
			</p>

			<NuxtLink :to="{ name: 'Home'}">go home</NuxtLink>

			<div class="block w-full h-screen bg-green-100"></div>

			<div class="block w-full h-screen bg-blue-100"></div>

			<div class="block w-full h-screen bg-red-100"></div>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam exercitationem quod error culpa beatae, provident saepe pariatur vitae eius obcaecati hic harum quaerat fugiat dolorum officia maiores voluptates ipsam in numquam. Enim corrupti consequuntur, illo odit atque aperiam ea asperiores consectetur facilis quibusdam explicabo iusto delectus dolor repellendus quam praesentium totam? Fuga sit recusandae magni totam nobis voluptatibus praesentium cupiditate veritatis quod ut. Soluta rerum aspernatur repellat accusantium, sint, fugiat deleniti nostrum quas optio dolore minus perferendis ullam eaque. Alias enim dignissimos unde eligendi, expedita eum dolore vero voluptatum officia voluptatem fugit, laboriosam consequuntur nisi aliquam optio neque aspernatur!
			</p>

			<NuxtLink :to="{ name: 'Home'}">go home</NuxtLink>

		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'About'
			}
		},

		head() {
			return {
				title: this.title,
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: 'About description'
					}
				]
			}
		},
	}
</script>

<router>
	{
		name: 'About'
	}
</router>