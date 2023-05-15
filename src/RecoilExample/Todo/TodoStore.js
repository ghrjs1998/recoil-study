import { atom, selector } from "recoil";

// atom 리스트를 todoListState라고 하고 이것을 atom() 함수를 이용해 생성할 것
export const todoListState = atom({
  key: "todoListState",
  default: [],
});

// 필터링 된 todo 리스트를 구현하기 위해서 atom에 저장될 수 있는 필터 기준을 선택해야 함. 사용하게 될 필터 옵션은 "Show All", "Show Completed"과 "Show Uncompleted"가 있다. 기본값은 "Show All"이 될 것.
export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

// todoListFilterState와 todoListState를 사용해서 필터링 된 리스트를 파생하는 filteredTodoListState selector를 구성할 수 있다.
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
