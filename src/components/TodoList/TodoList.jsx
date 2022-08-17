import { getTodos } from 'api/Todo';
import { todoListState } from 'atoms/atoms';
import TodoItem from 'components/TodoItem/TodoItem';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function TodoList() {
  const [isLoading, setIsLoading] = useState(true);
  const [todolist, setList] = useRecoilState(todoListState);
  const dolist = async () => {
    const res = await getTodos();
    setList(res);
    setIsLoading(true);
  };

  useEffect(() => {
    setIsLoading(false);
    dolist();
  }, []);

  return (
    <>
      {!isLoading ? (
        <div>로딩중</div>
      ) : (
        <div>
          {todolist.length > 0 ? (
            <div>
              {todolist?.map((data) => (
                <div>
                  <TodoItem
                    id={data.id}
                    des={data.todo}
                    complete={data.isCompleted}
                  />
                  {data.id}
                </div>
              ))}
            </div>
          ) : (
            <div>리스트가 없습니다.</div>
          )}
        </div>
      )}
    </>
  );
}
