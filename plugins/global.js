import Vue from 'vue'

const mixin = {
	methods: {
		setBodyClass() {
			let body = document.body
			body.classList.toggle('menu-is-open')
		},
   	},
 }

 Vue.mixin(mixin)