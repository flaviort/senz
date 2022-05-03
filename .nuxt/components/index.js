export const FsMenu = () => import('../../components/FsMenu.vue' /* webpackChunkName: "components/fs-menu" */).then(c => wrapFunctional(c.default || c))
export const SideMenu = () => import('../../components/SideMenu.vue' /* webpackChunkName: "components/side-menu" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/footer/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const FooterTwoBlocks = () => import('../../components/footer/TwoBlocks.vue' /* webpackChunkName: "components/footer-two-blocks" */).then(c => wrapFunctional(c.default || c))
export const ButtonsArrowDown = () => import('../../components/buttons/ArrowDown.vue' /* webpackChunkName: "components/buttons-arrow-down" */).then(c => wrapFunctional(c.default || c))
export const ButtonsCircleArrowRight = () => import('../../components/buttons/CircleArrowRight.vue' /* webpackChunkName: "components/buttons-circle-arrow-right" */).then(c => wrapFunctional(c.default || c))
export const ButtonsFollowMouse = () => import('../../components/buttons/FollowMouse.vue' /* webpackChunkName: "components/buttons-follow-mouse" */).then(c => wrapFunctional(c.default || c))
export const LogosSenzHorizontal = () => import('../../components/logos/SenzHorizontal.vue' /* webpackChunkName: "components/logos-senz-horizontal" */).then(c => wrapFunctional(c.default || c))
export const LogosSenzVertical = () => import('../../components/logos/SenzVertical.vue' /* webpackChunkName: "components/logos-senz-vertical" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
