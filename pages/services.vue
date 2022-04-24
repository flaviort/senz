<template>
	<div>

		<section class="relative min-h-screen md:pl-20">

			<h1>
				{{ title }}
			</h1>
			
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, quasi officiis omnis quas a saepe possimus non distinctio eum facilis eligendi cumque! Similique culpa sit, quidem, vel dignissimos maxime laudantium ad repellendus minus quos dolorum accusamus? Numquam, minus architecto tempora earum voluptatibus quaerat sequi magnam voluptate dolor doloribus ipsa reiciendis id expedita. Iste, repellendus excepturi dolorum quae, eius ea pariatur temporibus tempore mollitia rem sapiente, necessitatibus numquam nisi vero voluptatem assumenda? Nulla, natus in, ad et similique dolores dolorum deserunt ex commodi laborum omnis, molestias consequatur labore asperiores? Atque architecto commodi totam, eligendi natus iste fugiat modi non numquam praesentium aut molestias amet cupiditate eos eius animi vero esse. Officia nobis error corporis officiis, sequi deserunt temporibus eaque culpa asperiores quasi quisquam laboriosam aut explicabo beatae porro nemo accusamus assumenda veritatis molestiae iste eius quae. Magnam consequatur dicta voluptate dolore omnis in quas reprehenderit nobis fuga dolorem beatae odit exercitationem, veritatis ipsa illum veniam! Eveniet quaerat non vitae voluptas doloribus dolor reiciendis inventore molestias quia vel qui quo, assumenda, similique autem rerum possimus. Animi quasi sapiente ex magni, aspernatur vitae corporis repellendus incidunt porro earum? Nulla, soluta. At harum ipsam cupiditate, quaerat ducimus, saepe ad dignissimos magnam minima molestias exercitationem?
			</p>

		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Services'
			}
		},
		head() {
			return {
				title: this.title,
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: 'Services description'
					}
				]
			}
		}
	}
</script>

<router>
	{
		name: 'Services'
	}
</router>