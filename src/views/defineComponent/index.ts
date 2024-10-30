import { defineComponent, h } from 'vue'
import Test from './test.vue'

export function useButton() {
  const Button = defineComponent((props, { attrs, slots }: any) => {
    return () => h(
      'button',
      {
        ...attrs,
        style: {
          color: props.color,
          fontSize: props.fontSize,
        },
      },
      slots,
    )
  }, {
    name: 'Afe1Button',
    inheritAttrs: false,
  })
  return Button
}

export function useTest() {
  const Demo = defineComponent(() => {
    return () => h(Test, {
      name: '123',
      age: '456',
    })
  }, {
    name: 'Afe1Test',
    inheritAttrs: false,
  })
  return Demo
}
