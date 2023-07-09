import { ListItem, Checkbox, HStack, IconButton } from '@chakra-ui/react'
import { Reorder } from 'framer-motion'
import CrossIcon from '../assets/icons/CrossIcon'

function TodoItem ({ todo, setCompleted, onDelete, bg, borderColor, color, checkedColor, value }) {
  const { id, task, completed } = todo

  const onChange = () => {
    setCompleted(id)
  }

  const onClick = () => {
    onDelete(id)
  }

  return (
    <ListItem
      value={value}
      as={Reorder.Item}
      css={{ ':hover .todo-cross-button': { opacity: 1.0 } }}
      borderBottom='1px solid'
      borderColor={borderColor}
      size='lg'
      bg={bg}
      w='100%'
      h={16}
      cursor='grab'
    >
      <HStack justify='space-between'>
        <Checkbox
          color={color}
          onChange={onChange}
          isChecked={completed}
          size='lg'
          borderColor={borderColor}
          colorScheme='brand'
          spacing={4} pl={4} h={16}
          _hover={{
            borderColor:
                'brand.100'
          }}
          _checked={{ textDecoration: 'line-through', color: checkedColor }}
        >
          {task}
        </Checkbox>
        <IconButton
          mr={2}
          bg='transparent'
          _hover={{ bg: 'transparent' }}
          className='todo-cross-button'
          opacity={{ base: undefined, md: '0' }}
          colorScheme='teal'
          aria-label='Call Segun'
          size='sm'
          icon={<CrossIcon />}
          onClick={onClick}
        />
      </HStack>
    </ListItem>
  )
}

export default TodoItem
