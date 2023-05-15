import React from 'react'
import { filteredTodoListState } from './TodoStore'
import { useRecoilValue } from 'recoil'
import TodoItem from './TodoItem'
import TodoListCreator from './TodoListCreator'
import TodoListStats from './TodoListStats'
import TodoListFilters from './TodoListFilters'

// todo 아이템 추가
// todo 아이템 수정
// todo 아이템 삭제
// todo 아이템 필터링
// 유용한 통계 표시

export default function TodoList() {
    // atom에 고유한 key를 주고 비어있는 배열 값을 default로 설정할 것이다. 이 atom의 항목을 읽기 위해, 우리는 useRecoilValue() 훅을 우리의 TodoList 컴포넌트에서 사용할 수 O
    const todoList = useRecoilValue(filteredTodoListState)
  return (
    <div>
        <TodoListStats />
        <TodoListFilters />
        <TodoListCreator />
        {todoList.map((item)=> (
            <TodoItem key={item.id} item={item} />
        ))}
    </div>
  )
}

