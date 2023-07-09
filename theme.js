import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { checkboxTheme } from './src/components/checkbox'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSistemColorMode: true
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'Josefin Sans',
        bg: mode('hsl(236, 33%, 92%)', 'hsl(235, 21%, 11%)')(props)
      }
    })
  },
  colors: {
    brand: {
      100: 'hsl(220, 98%, 61%)',
      200: 'linear-gradient( 140deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      900: 'linear(140deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
    },
    light: {
      100: 'hsl(0, 0%, 98%)',
      200: 'hsl(233, 11%, 84%)',
      300: 'hsl(236, 9%, 61%)',
      400: 'hsl(236, 33%, 92%)',
      900: 'hsl(235, 19%, 35%)'
    },
    dark: {
      100: 'hsl(234, 39%, 85%)',
      200: 'hsl(234, 11%, 52%)',
      300: 'hsl(233, 14%, 35%)',
      400: 'hsl(237, 14%, 26%)',
      900: 'hsl(235, 24%, 19%)'
    }
  },
  fonts: {
    body: 'Rubik'
  },
  components: { Checkbox: checkboxTheme }
})

export default theme
