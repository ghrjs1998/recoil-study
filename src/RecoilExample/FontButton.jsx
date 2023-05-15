import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {fontSizeLabelState, fontSizeState} from './store'

export default function FontButton() {
    // 컴포넌트에서 atom을 읽고 쓰려면 useRecoilState라는 훅을 사용
    // 버튼을 클릭하면 버튼의 글꼴 크기가 1만큼 증가하며, fontSizeState atom을 사용하는 다른 컴포넌트의 글꼴 크기도 같이 변화한다.
    // 버튼을 클릭하면 버튼의 글꼴 크기가 증가하는 동시에 현재 글꼴 크기를 반영하도록 글꼴 크기 레이블을 업데이트하는 두 가지 작업이 수행된다.
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const fontSizeLabel = useRecoilValue(fontSizeLabelState)
    return (
        <>
        <div>Current font size: {fontSizeLabel}</div>
      <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
        Click to Enlarge
      </button>
      </>
    );
  }