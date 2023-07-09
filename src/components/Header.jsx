import { HStack, Heading, IconButton, useColorMode } from '@chakra-ui/react'
import SunIcon from '../assets/icons/SunIcon'
import MoonIcon from '../assets/icons/MoonIcon'

function Header () {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack display='flex' justify='space-between' mb={10}>
      <Heading color='white' letterSpacing={12} fontWeight={700}>
        TODO
      </Heading>
      <IconButton
        onClick={toggleColorMode}
        _hover={{ bg: 'transparent' }}
        bg='transparent'
        aria-label='Search database'
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      />
    </HStack>
  )
}

export default Header
