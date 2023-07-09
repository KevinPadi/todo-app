import { Box } from '@chakra-ui/react'
import Header from './Header'
import TodoListItem from './TodoListItem'

function TodoListCntr () {
  return (
    <Box top={[10, 10, 20]} position='absolute' w={['90%', '90%', '560px']} maxW='560px'>
      <Header />
      <TodoListItem />
    </Box>
  )
}

export default TodoListCntr
