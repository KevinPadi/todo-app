import React, { useState, useEffect } from 'react'
import { VStack, Stack, InputGroup, InputLeftElement, Checkbox, Input, List, Card, CardBody, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { Reorder } from 'framer-motion'
import TodoItem from './TodoItem'
import { MobileButtonsCntr, DesktopButtonsCntr } from './ButtonsCntr'
import Footer from './Footer'
import { v4 as uudiv4 } from 'uuid'

function TodoListItem () {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState(todos)
  const [filter, setFilter] = useState('all')
  const [firstValue, setFirstValue] = useState(true)
  const [secValue, setSecValue] = useState(false)
  const [thirdValue, setThirdValue] = useState(false)

  const KEY = 'todoApp.todos'

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    if (filter === 'all') {
      const newTodos = [...todos]
      setFilteredTodos(newTodos)
    } else if (filter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodos(activeTodos)
    } else if (filter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilteredTodos(completedTodos)
    }
  }, [filter, todos])

  const handleChange = (e) => setValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === '') {
      return
    }
    const newTodos = [...todos, { id: uudiv4(), task: value, completed: false }]
    setTodos(newTodos)
    setValue('')
  }

  const setCompleted = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  const onDelete = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    const i = newTodos.indexOf(todo)
    newTodos.splice(i, 1)
    setTodos(newTodos)
  }

  const deleteCompletedTodos = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.filter(todo => todo.completed === false)
    setTodos(todo)
  }

  const firstClick = () => {
    setFirstValue(current => !current)
    setSecValue(false)
    setThirdValue(false)
    setFilter('all')
  }

  const secClick = () => {
    setFirstValue(false)
    setSecValue(current => !current)
    setThirdValue(false)
    setFilter('active')
  }

  const thirdClick = () => {
    setFirstValue(false)
    setSecValue(false)
    setThirdValue(current => !current)
    setFilter('completed')
  }

  const isMobileSize = useBreakpointValue({
    base: true,
    md: false
  })

  const bg = useColorModeValue('light.100', 'dark.900')
  const color = useColorModeValue('light.900', 'dark.100')
  const borderColor = useColorModeValue('light.400', 'dark.400')
  const checkedColor = useColorModeValue('light.200', 'dark.300')
  const hoverColor = useColorModeValue('dark.300', 'light.200')
  const scrollBarThumb = useColorModeValue('hsl(233, 21%, 87%)', 'hsl(237, 24%, 16%)')

  return (
    <VStack spacing={5}>
      <InputGroup as='form' onSubmit={handleSubmit} size='lg'>
        <InputLeftElement pl={3} h={16}>
          <Checkbox cursor='arrow' borderColor={borderColor} isReadOnly />
        </InputLeftElement>
        <Input
          value={value}
          onChange={handleChange}
          color={color}
          css={{ caretColor: 'blue' }}
          _hover={{ borderColor: 'transparent' }}
          borderColor='transparent'
          focusBorderColor='none'
          bg={bg}
          pl={14}
          h={16}
          type='text'
          placeholder='Create a new todo...'
          _placeholder={{ color: 'dark.200' }}
          autoFocus
        />
      </InputGroup>

      <Card
        boxShadow='lg'
        justify='space-between'
        borderRadius='md'
        color='white'
        h='440px'
        bg={bg}
        w='100%'
      >
        <CardBody
          borderTopRadius='md' overflowY='auto' h='auto' p='0px'
          css={{ '::-webkit-scrollbar': { width: '16px' }, '::-webkit-scrollbar-thumb': { backgroundColor: scrollBarThumb, borderRadius: '100px' } }}
        >
          <Stack spacing='0px'>
            <List
              values={todos}
              as={Reorder.Group}
              onReorder={setTodos}
            >
              {/* <TodoItem todos={todo} onDelete={onDelete} setCompleted={setCompleted} /> */}
              {todos === undefined
                ? 'undefined'
                : filteredTodos.map((todo) => (<TodoItem value={todo} key={todo.id} todo={todo} setCompleted={setCompleted} onDelete={onDelete} bg={bg} borderColor={borderColor} color={color} checkedColor={checkedColor} />))}
            </List>
          </Stack>
        </CardBody>
        {isMobileSize
          ? <MobileButtonsCntr todo={todos} firstValue={firstValue} firstClick={firstClick} secValue={secValue} secClick={secClick} thirdValue={thirdValue} thirdClick={thirdClick} deleteCompletedTodos={deleteCompletedTodos} borderColor={borderColor} hoverColor={hoverColor} bg={bg} />
          : <DesktopButtonsCntr todo={todos} firstValue={firstValue} firstClick={firstClick} secValue={secValue} secClick={secClick} thirdValue={thirdValue} thirdClick={thirdClick} deleteCompletedTodos={deleteCompletedTodos} borderColor={borderColor} hoverColor={hoverColor} />}

      </Card>
      <Footer />
    </VStack>
  )
}

export default TodoListItem
