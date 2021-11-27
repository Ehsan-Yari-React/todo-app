import { Badge, StackDivider, VStack } from "@chakra-ui/react";
import { useAppSelector } from "../app/hooks";
import Todo from "./Todo";

const TodosList = () => {
  const todos = useAppSelector((state) => state.todos);

  if (!todos.length) {
    return (
      <Badge colorScheme="green" p={4} borderRadius="lg" boxShadow="md">
        Start by adding your first todo!
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth={2}
      p={4}
      borderRadius="lg"
      boxShadow="md"
      w="100%"
      maxW={["90vw", "80vw", "50vw", "40vw"]}
      align="stretch"
    >
      {todos.map(({ id, text, completed, editing }) => (
        <Todo
          key={id}
          id={id}
          text={text}
          completed={completed}
          editing={editing}
        />
      ))}
    </VStack>
  );
};

export default TodosList;
