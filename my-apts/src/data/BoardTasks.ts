import TBoardTaskItem from '../types/TBoardTaskItem'
import ETaskGroup from '../enums/ETaskGroup'
import ETaskStatus from '../enums/ETaskStatus'

const BoardTasks : TBoardTaskItem[] = [
    {
        title: "UX Adjustments",
        description: "It just needs to adapt the UI from what you did before.",
        group: ETaskGroup.TODO,
        status: ETaskStatus.RESEARCH
    },
    {
        title: "Slack Integration",
        description: "Add a field in the portal to let the user connect their Slack account.",
        group: ETaskGroup.WORK,
        status: ETaskStatus.DEVELOPMENT
    },
    {
        title: "Copywriting of the app",
        description: "Composing words to provide people with decision-making clarity when interacting with a product.",
        group: ETaskGroup.WORK,
        status: ETaskStatus.WRITING
    },
    {
        title: "TEST QA",
        description: "QA TEST",
        group: ETaskGroup.QA,
        status: ETaskStatus.WRITING
    },
    {
        title: "TEST COMPLETED",
        description: "COMPLETED TEST",
        group: ETaskGroup.COMPLETED,
        status: ETaskStatus.WRITING
    },
]
export default BoardTasks;