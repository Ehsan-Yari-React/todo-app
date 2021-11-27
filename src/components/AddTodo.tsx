import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useAppDispatch } from "../app/hooks";
import { useState } from "react";
import { addTodo } from "../features/todosSlice";
import { v4 as uuid } from "uuid";

const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [inputText, setInputText] = useState<string>("");
  const toast = useToast();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputText.trim().length) {
          dispatch(
            addTodo({
              id: uuid(),
              text: inputText,
              completed: false,
              editing: false,
            })
          );
          setInputText("");
        } else {
          toast({
            title: "Please enter a todo text",
            status: "error",
            duration: 1000,
            isClosable: true,
          });
          setInputText("");
        }
      }}
    >
      <HStack m={8}>
        <Input
          variant="filled"
          placeholder="Add a Todo..."
          autoComplete="off"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
        <Button colorScheme="pink" px={8} type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
