import { Box, useColorMode, useBreakpointValue } from '@chakra-ui/react'

function BgImage () {
  const { colorMode } = useColorMode()
  const isMobileSize = useBreakpointValue({
    base: true,
    md: false
  })

  const bgImage = () => {
    if (colorMode === 'dark') {
      if (isMobileSize) {
        return "url('/bg-mobile-dark.jpg')"
      } else {
        return "url('/bg-desktop-dark.jpg')"
      }
    } else if (colorMode === 'light') {
      if (isMobileSize) {
        return "url('/bg-mobile-light.jpg')"
      } else {
        return "url('/bg-desktop-light.jpg')"
      }
    }
  }
  return (
    <Box
      w='100%'
      h={300}
      bgImage={bgImage}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
    />
  )
}

export default BgImage
