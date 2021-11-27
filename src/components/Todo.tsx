import { completeTodo, deleteTodo, TodosState } from "../features/todosSlice";
import { HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";
import { useAppDispatch } from "../app/hooks";

const Todo = ({ id, text, completed }: TodosState) => {
  const dispatch = useAppDispatch();
  return (
    <HStack key={id}>
      <Text fontSize="lg" fontWeight="semibold">
        {text}
      </Text>
      <Spacer />
      <IconButton
        aria-label="delete-todo"
        icon={<FaTrash />}
        isRound
        colorScheme="red"
        onClick={() => dispatch(deleteTodo(id))}
      />
      <IconButton
        aria-label="complete-todo"
        icon={completed ? <FaTimes /> : <FaCheck />}
        isRound
        colorScheme={completed ? "yellow" : "green"}
        onClick={() => dispatch(completeTodo(id))}
      />
    </HStack>
  );
};

export default Todo;
