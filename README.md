Recoil을 사용하면 atoms (공유 상태)에서 selectors (순수 함수)를 거쳐 React 컴포넌트로 내려가는 data-flow graph를 만들 수 있다. Atoms는 컴포넌트가 구독할 수 있는 상태의 단위다. Selectors는 atoms 상태 값을 동기 또는 비동기 방식을 통해 변환한다.

Atoms
Atoms는 상태의 단위이며, 업데이트와 구독이 가능하다. atom이 업데이트되면 각각 구독된 컴포넌트는 새로운 값을 반영하여 다시 렌더링 된다. atoms는 런타임에서 생성될 수도 있다. Atoms는 React의 로컬 컴포넌트의 상태 대신 사용할 수 있다. 동일한 atom이 여러 컴포넌트에서 사용되는 경우 모든 컴포넌트는 상태를 공유한다.

Atoms는 디버깅, 지속성 및 모든 atoms의 map을 볼 수 있는 특정 고급 API에 사용되는 고유한 키가 필요하다. 두 개의 atom이 같은 키를 갖는 것은 오류이기 때문에 키값은 전역적으로 고유하도록 해야한다. React 컴포넌트의 상태처럼 기본값도 가진다.

컴포넌트에서 atom을 읽고 쓰려면 useRecoilState라는 훅을 사용한다. React의 useState와 비슷하지만, 상태가 컴포넌트 간에 공유될 수 있다는 차이가 있다.

Atom은 상태(state)의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있다. atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다. 그래서 atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트가 재 렌더링 되는 결과가 발생할 것이다.

Selectors
Selector는 atoms나 다른 selectors를 입력으로 받아들이는 순수 함수(pure function)다. 상위의 atoms 또는 selectors가 업데이트되면 하위의 selector 함수도 다시 실행된다. 컴포넌트들은 selectors를 atoms처럼 구독할 수 있으며 selectors가 변경되면 컴포넌트들도 다시 렌더링 된다.

Selectors는 상태를 기반으로 하는 파생 데이터를 계산하는 데 사용된다. 최소한의 상태 집합만 atoms에 저장하고 다른 모든 파생되는 데이터는 selectors에 명시한 함수를 통해 효율적으로 계산함으로써 쓸모없는 상태의 보존을 방지한다.

Selectors는 어떤 컴포넌트가 자신을 필요로 하는지, 또 자신은 어떤 상태에 의존하는지를 추적하기 때문에 이러한 함수적인 접근방식을 매우 효율적으로 만든다.

컴포넌트의 관점에서 보면 selectors와 atoms는 동일한 인터페이스를 가지므로 서로 대체할 수 있다.

recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 RecoilRoot 가 필요하다. 루트 컴포넌트가 RecoilRoot를 넣기에 가장 좋은 장소다.

Selector는 파생된 상태(derived state)의 일부를 나타낸다. 파생된 상태는 상태의 변화다. 파생된 상태를 어떤 방법으로든 주어진 상태를 수정하는 순수 함수에 전달된 상태의 결과물로 생각할 수 있다.

React의 한계

- 상태 공유를 위해 상위 요소까지 끌어올리면 거대한 트리가 제랜더 될수도 O.
- Context는 단일 값만을 저장할 수 있고 자체 Consumer를 가지는 여러 값의 집합은 담을 수 X.
- 최상단(state가 존재하는 곳)부터 트리의 잎(state가 사용되는 곳)까지의 코드 분할이 어렵다.

Recoil의 주요 개념
[Data Flow Graph]
atoms(상태): 고유한 키를 가짐
|
selectors(순수 함수): atoms이나 selector를 입력으로 받음
|
components
