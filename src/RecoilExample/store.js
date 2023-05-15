import { atom, selector } from "recoil";

// Atoms는 atom함수를 사용해 생성한다.
export const fontSizeState = atom({
  key: "fontSizeState",
  default: 14,
});

// Selectors는 selector함수를 사용해 정의한다.
// get 속성은 계산될 함수다. 전달되는 get 인자를 통해 atoms와 다른 selectors에 접근할 수 있다. 다른 atoms나 selectors에 접근하면 자동으로 종속 관계가 생성되므로, 참조했던 다른 atoms나 selectors가 업데이트되면 이 함수도 다시 실행된다.
// 이 fontSizeLabelState 예시에서 selector는 fontSizeState라는 하나의 atom에 의존성을 갖는다. 개념적으로 fontSizeLabelState selector는 fontSizeState를 입력으로 사용하고 형식화된 글꼴 크기 레이블을 출력으로 반환하는 순수 함수처럼 동작한다.
// Selectors는 useRecoilValue()를 사용해 읽을 수 있다. useRecoilValue()는 하나의 atom이나 selector를 인자로 받아 대응하는 값을 반환한다. fontSizeLabelState selector는 writable하지 않기 때문에 useRecoilState()를 이용하지 않는다.
export const fontSizeLabelState = selector({
  key: "fontSizeLabelState",
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = "px";

    return `${fontSize}${unit}`;
  },
});
