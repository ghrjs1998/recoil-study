import React,{useState} from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from './TodoStore';

export default function TodoItemCreator() {
  // 새로운 todo 아이템을 생성하기 위해 todoListState 내용을 업데이트하는 setter 함수에 접근해야 한다. TodoItemCreator 컴포넌트의 setter 함수를 얻기 위해 useSetRecoilState() 훅을 사용할 수 O.
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
  
    const addItem = () => {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue('');
    };
  
    const onChange = ({target: {value}}) => {
      setInputValue(value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={addItem}>Add</button>
      </div>
    );
  }
  
  // 고유한 Id 생성을 위한 유틸리티
  let id = 0;
  function getId() {
    return id++;
  }