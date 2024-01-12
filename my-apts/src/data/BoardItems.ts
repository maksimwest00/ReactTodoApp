import TBoardItem from "../types/TBoardItem";
import ETaskGroup from "../enums/ETaskGroup";
import BoardTasks from "./BoardTasks";

const BoardItems : TBoardItem[] = [
    {
        title : ETaskGroup.TODO,
        items : BoardTasks.filter((item)=> item?.group === ETaskGroup.TODO)
    },
    {
        title : ETaskGroup.WORK,
        items : BoardTasks.filter((item)=> item?.group === ETaskGroup.WORK)
    },
    {
        title : ETaskGroup.QA,
        items : BoardTasks.filter((item)=> item?.group === ETaskGroup.QA)
    },
    {
        title : ETaskGroup.COMPLETED,
        items : BoardTasks.filter((item)=> item?.group === ETaskGroup.COMPLETED)
    },
]
export default BoardItems;