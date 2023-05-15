import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from './TodoStore'

export default function TodoListStats() {
    const {
        percentCompleted,
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
    } = useRecoilValue(todoListStatsState)
    const formattedPercentCompleted = Math.round(percentCompleted * 100);

    return (
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    );
}
