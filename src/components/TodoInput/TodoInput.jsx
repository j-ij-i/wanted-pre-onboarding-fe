import { createTodo } from 'api/Todo';
import { todoListState } from 'atoms/atoms';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

export default function TodoInput() {
  const [todoitem, SetToDo] = useState('');
  const setList = useSetRecoilState(todoListState);

  const TodoHandler = (event) => {
    SetToDo(event.currentTarget.value);
  };

  const addDo = async () => {
    SetToDo('');
    const res = await createTodo(todoitem);
    setList((todos) => [
      ...todos,
      { todo: res.todo, id: res.id, isCompleted: res.isCompleted },
    ]);
  };

  return (
    <div>
      <input onChange={TodoHandler} value={todoitem} />
      <button onClick={addDo}>+</button>
    </div>
  );
}
