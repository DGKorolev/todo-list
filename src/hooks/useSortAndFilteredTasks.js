import {useMemo} from "react";
import {DONE, UNDONE} from "../App";
import {getTime} from "../library/library";

export const useSortAndFilteredTasks = (tasks, filter) => {

    const sortTasks = useMemo(() => {

        return [...tasks].sort((a, b) => (
                filter.sortDirection
                    ? getTime(b.createdAt) - getTime(a.createdAt)
                    : getTime(a.createdAt) - getTime(b.createdAt)
            )
        )

    }, [tasks, filter.sortDirection])


    return useMemo(() => {

        switch (filter.filterType) {
            case DONE:
                return sortTasks.filter(item => item.done)

            case UNDONE:
                return sortTasks.filter(item => !item.done)

            default: //ALL
                return sortTasks
        }

    }, [sortTasks, filter.filterType])

}