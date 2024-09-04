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
