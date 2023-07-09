import React from 'react'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'

function Footer () {
  const color = useColorModeValue('light.300', 'dark.300')
  return (
    <Box pos={['absolute', 'absolute', 'relative']} bottom={['-8rem', '-8rem', 'auto']}>
      <Text color={color}>Drag and drop to reorder the list</Text>
    </Box>
  )
}

export default Footer
