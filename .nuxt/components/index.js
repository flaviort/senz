export { default as FsMenu } from '../../components/FsMenu.vue'
export { default as SideMenu } from '../../components/SideMenu.vue'
export { default as ButtonsArrowDown } from '../../components/buttons/ArrowDown.vue'
export { default as ButtonsCircleArrowRight } from '../../components/buttons/CircleArrowRight.vue'
export { default as ButtonsFollowMouse } from '../../components/buttons/FollowMouse.vue'
export { default as Footer } from '../../components/footer/Footer.vue'
export { default as FooterTwoBlocks } from '../../components/footer/TwoBlocks.vue'
export { default as LogosSenzHorizontal } from '../../components/logos/SenzHorizontal.vue'
export { default as LogosSenzVertical } from '../../components/logos/SenzVertical.vue'

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
