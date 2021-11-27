import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
import { useEffect } from "react";
import { useAppSelector } from "./app/hooks";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const todos = useAppSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <VStack p={4}>
      <IconButton
        aria-label="toggle-dark-mode"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        isRound
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <AddTodo />
      <TodosList />
    </VStack>
  );
};

export default App;
