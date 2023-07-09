import React from 'react'
import { Flex, ButtonGroup, Button, Text, CardFooter, useColorModeValue } from '@chakra-ui/react'

export function MobileButtonsCntr ({ todo, firstValue, firstClick, secValue, secClick, thirdValue, thirdClick, deleteCompletedTodos, borderColor, hoverColor, bg }) {
  const color = useColorModeValue('light.300', 'dark.300')

  return (
    <>
      <Flex
        w='100%'
        p={4}
        h={16}
        borderTop='1px solid'
        borderColor={borderColor}
        justify='space-between'
        align='center'
      >
        <Text color={color} fontWeight='600' fontSize='md'>
          {todo.filter(todo => todo.completed === false).length} items left
        </Text>
        <Button
          onClick={deleteCompletedTodos}
          color={color}
          size='md'
          _hover={{ textDecoration: 'none', color: hoverColor }}
          text='1px solid red'
          variant='link'
        >
          Clear Completed
        </Button>
      </Flex>
      <Flex pos='absolute' justify='center' bottom='-5.5rem' mt={0} borderRadius='md' bg={bg} w='100%' h={16}>
        <ButtonGroup
          css={{ '.special': { color: 'hsl(220, 98%, 61%)' } }}
          spacing={6}
        >
          <Button
            className={firstValue ? 'special' : ''}
            colorScheme='blue'
            color={color}
            onClick={firstClick}
            size='md'
            _hover={{ textDecoration: 'none', color: hoverColor }}
            _active={{ }}
            variant='link'
          >
            All
          </Button>
          <Button
            className={secValue ? 'special' : ''}
            colorScheme='blue'
            color={color}
            onClick={secClick}
            size='md'
            _hover={{ textDecoration: 'none', color: hoverColor }}
            variant='link'
          >
            Active
          </Button>
          <Button
            className={thirdValue ? 'special' : ''}
            colorScheme='blue'
            color={color}
            onClick={thirdClick}
            size='md'
            _hover={{ textDecoration: 'none', color: hoverColor }}
            variant='link'
          >
            Completed
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  )
}

export function DesktopButtonsCntr ({ todo, firstValue, firstClick, secValue, secClick, thirdValue, thirdClick, deleteCompletedTodos, borderColor, hoverColor }) {
  const color = useColorModeValue('light.300', 'dark.300')

  return (
    <CardFooter
      borderTop='1px solid'
      borderColor={borderColor}
      h={14}
      display='flex'
      flexDirection='row'
      justify='space-between'
      alignItems='center'
    >
      <Text color={color} fontWeight='600' fontSize='xs'>
        {todo.filter(todo => todo.completed === false).length} items left
      </Text>
      <ButtonGroup
        css={{ '.special': { color: 'hsl(220, 98%, 61%)' } }}
        spacing='2'
      >
        <Button
          className={firstValue ? 'special' : ''}
          colorScheme='blue'
          color={color}
          onClick={firstClick}
          size='md'
          _hover={{ textDecoration: 'none', color: hoverColor }}
          _active={{ }}
          variant='link'
        >
          All
        </Button>
        <Button
          className={secValue ? 'special' : ''}
          colorScheme='blue'
          color={color}
          onClick={secClick}
          size='md'
          _hover={{ textDecoration: 'none', color: hoverColor }}
          variant='link'
        >
          Active
        </Button>
        <Button
          className={thirdValue ? 'special' : ''}
          colorScheme='blue'
          color={color}
          onClick={thirdClick}
          size='md'
          _hover={{ textDecoration: 'none', color: hoverColor }}
          variant='link'
        >
          Completed
        </Button>
      </ButtonGroup>
      <Button
        onClick={deleteCompletedTodos}
        color={color}
        size='xs'
        _hover={{ textDecoration: 'none', color: hoverColor }}
        text='1px solid red'
        variant='link'
      >
        Clear Completed
      </Button>
    </CardFooter>
  )
}
