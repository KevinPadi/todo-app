import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  control: {
    padding: 3,
    rounded: 'full',
    _checked: {
      background: 'linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      _hover: {
        background: 'linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
      }
    }
  },
  icon: {
    color: 'white'
  }
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })
