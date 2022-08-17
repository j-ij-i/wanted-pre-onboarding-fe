import { deleteTodo, updateTodo } from 'api/Todo';
import { todoListState } from 'atoms/atoms';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  BsCheckCircleFill,
  BsCircle,
  BsFillTrashFill,
  BsPencilSquare,
  BsFillCheckSquareFill,
  BsXSquareFill,
} from 'react-icons/bs';
import styles from './TodoItem.module.css';

export default function TodoItem({ id, des, complete }) {
  const [todolist, setList] = useRecoilState(todoListState);
  const [updateMode, setUpdateMode] = useState(false);
  const [value, setValue] = useState(des);
  const [complete_value, setComplete] = useState(complete);

  // 삭제
  const deletetodo = async () => {
    const res = await deleteTodo(id);
    setList(todolist.filter((todo) => res !== todo.id));
  };

  //수정 토글버튼 클릭
  const UpdateToggleBtn = () => {
    setUpdateMode(!updateMode);
  };

  //수정 완료버튼 클릭
  const setUpdate = async () => {
    await updateTodo(id, value, complete_value);
    const index = todolist.findIndex((e) => e.id === id);
    setList([
      ...todolist.slice(0, index),
      { id: id, todo: value, isComplete: complete_value },
      ...todolist.slice(index + 1),
    ]);
    setUpdateMode(!updateMode);
  };

  // input 입력값 수정
  const onChange = (event) => {
    setValue(event.target.value);
  };

  // 체크박스 체크
  const CheckHandler = async () => {
    setComplete(!complete_value);
    const res = await updateTodo(id, value, !complete_value);
    const index = todolist.findIndex((e) => e.id === id);
    setList([
      ...todolist.slice(0, index),
      { id: id, todo: value, isComplete: complete_value },
      ...todolist.slice(index + 1),
    ]);
  };

  return (
    <div>
      <div>
        {updateMode ? (
          <div className={styles.container}>
            <div className={styles.btnIcon} onClick={CheckHandler}>
              {complete_value ? <BsCheckCircleFill /> : <BsCircle />}
            </div>
            <div>
              <input
                className={styles.updateInput}
                value={value}
                onChange={onChange}
              />
            </div>
            <div className={styles.editArea}>
              <div className={styles.btnIcon}>
                <BsFillCheckSquareFill onClick={setUpdate} />
              </div>
              <div className={styles.btnIcon}>
                <BsXSquareFill onClick={UpdateToggleBtn} />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.container}>
              <div className={styles.btnIcon} onClick={CheckHandler}>
                {complete_value ? <BsCheckCircleFill /> : <BsCircle />}
              </div>
              <div>{des}</div>
              <div className={styles.editArea}>
                <div className={styles.btnIcon}>
                  <BsPencilSquare onClick={UpdateToggleBtn} />
                </div>
                <div className={styles.btnIcon}>
                  <BsFillTrashFill onClick={deletetodo} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
