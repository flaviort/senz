export default ({ app }, inject) => {
	inject('setBodyClass', (string) => {
		let body = document.body
		body.classList.toggle('menu-is-open')
	})
}