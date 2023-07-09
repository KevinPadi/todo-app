import { Center } from '@chakra-ui/react'
import BgImage from './components/BgImage'
import TodoListCntr from './components/TodoListCntr'

function App () {
  return (
    <Center position='relative'>
      <BgImage />
      <TodoListCntr />
    </Center>
  )
}

export default App
