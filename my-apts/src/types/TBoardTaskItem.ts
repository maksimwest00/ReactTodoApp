import ETaskStatus from '../enums/ETaskStatus'

type TBoardTaskItem = {
    title: string;
    description: string;
    group: string;
    status: ETaskStatus;
};
export default TBoardTaskItem;