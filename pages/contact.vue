<template>
	<div>

		<section class="relative min-h-screen md:pl-20">

			<h1>
				{{ title }}
			</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam exercitationem quod error culpa beatae, provident saepe pariatur vitae eius obcaecati hic harum quaerat fugiat dolorum officia maiores voluptates ipsam in numquam. Enim corrupti consequuntur, illo odit atque aperiam ea asperiores consectetur facilis quibusdam explicabo iusto delectus dolor repellendus quam praesentium totam? Fuga sit recusandae magni totam nobis voluptatibus praesentium cupiditate veritatis quod ut. Soluta rerum aspernatur repellat accusantium, sint, fugiat deleniti nostrum quas optio dolore minus perferendis ullam eaque. Alias enim dignissimos unde eligendi, expedita eum dolore vero voluptatum officia voluptatem fugit, laboriosam consequuntur nisi aliquam optio neque aspernatur!
			</p>

			<br /><br />

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis eaque numquam molestiae. Debitis, error tempora quibusdam perferendis veniam ipsa necessitatibus omnis nisi totam tenetur neque mollitia. Animi saepe officiis, aliquam architecto similique fugit quaerat vel doloremque vitae modi tempore tenetur tempora autem, aliquid neque quasi ipsa ut, beatae illo!
			</p>

			<br /><br />
			
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
				title: 'Contact'
			}
		},
		head() {
			return {
				title: this.title,
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: 'Contact description'
					}
				]
			}
		}
	}
</script>

<router>
	{
		name: 'Contact'
	}
</router>