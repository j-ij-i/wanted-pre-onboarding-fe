import { createTodo } from 'api/Todo';
import { todoListState } from 'atoms/atoms';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { BsPlusSquareFill } from 'react-icons/bs';
import styles from './TodoInput.module.css';

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
    <div className={styles.container}>
      <div>
        <input
          placeholder=" To do ..."
          className={styles.todoInput}
          onChange={TodoHandler}
          value={todoitem}
        />
      </div>
      <div>
        <BsPlusSquareFill onClick={addDo} className={styles.createBtn} />
      </div>
    </div>
  );
}
