import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState } from './CounterStore';
import { charCountState } from './CounterStore';

export default function CharacterCounter() {
    return (
      <div>
        <TextInput />
        <CharacterCount />
      </div>
    );
  }
  
  function TextInput() {
    const [text, setText] = useRecoilState(textState);
  
    const onChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
  }

  function CharacterCount() {
    // useRecoilValue() 훅을 사용해서 charCountState 값을 읽을 수 있다
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }