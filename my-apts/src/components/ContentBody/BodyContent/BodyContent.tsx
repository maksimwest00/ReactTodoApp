import './BodyContent.css'
import TaskBoards from './TaskBoards/TaskBoards';
function BodyContent() {
    return (
        <div className='body_main_container'>
            <div className='body_content_header'>
                <h1>Hikoko Design</h1>
                <div className='body_content_header_buttons'>
                    <button>4</button>
                    <button>Fav</button>
                    <button>Share</button>
                </div>
            </div>
            <div className='body_content'>
                <TaskBoards/>
            </div>
        </div>
    )
}
export default BodyContent;