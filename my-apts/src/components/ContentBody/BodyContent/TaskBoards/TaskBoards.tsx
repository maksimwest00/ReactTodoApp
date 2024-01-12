import { useState } from "react";
import TBoardTaskItem from "../../../../types/TBoardTaskItem";
import './TaskBoards.css'

import BoardItems from "../../../../data/BoardItems";
import TBoardItem from "../../../../types/TBoardItem";

function TaskBoards() {
    function DragOver (
        event : React.DragEvent<HTMLLIElement>
              | React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        if(event.currentTarget.className == "board_list_item") {
            event.currentTarget.style.boxShadow = "0 13px 3px gray";
        }
    }

    function DragLeave(event : React.DragEvent<HTMLLIElement>) {
        event.currentTarget.style.boxShadow = "none";
    }

    function DragStart (
        event : React.DragEvent<HTMLLIElement>, 
        board : TBoardItem,  
        task : TBoardTaskItem) {
        setCurrentBoard(board);
        setCurrentItem(task);
    }

    function DragEnd(event : React.DragEvent<HTMLLIElement>) {
        event.currentTarget.style.boxShadow = "none";
    }

    const [currentBoard,setCurrentBoard] = useState<TBoardItem>();
    const [currentItem,setCurrentItem] = useState<TBoardTaskItem>();

    function Drop (
        event : React.DragEvent<HTMLLIElement> 
        | React.DragEvent<HTMLDivElement>,
        board : TBoardItem, 
        task : TBoardTaskItem) {
        
        // board это куда перекинули
        // currentBoard это откуда перекинули
        // currentItem что перекинули
        // task это куда перекинули

        event.stopPropagation();
        event.preventDefault();
        const currentIndex = currentBoard?.items.indexOf(currentItem as TBoardTaskItem);
        currentBoard?.items.splice(currentIndex as number,1);
        const dropIndex = board.items.indexOf(task);
        board?.items.splice(dropIndex + 1, 0, currentItem as TBoardTaskItem);
        setCurrentItem(task);
        event.currentTarget.style.boxShadow = "none";
    }


    function DropCard(event : React.DragEvent<HTMLDivElement>,
                      board : TBoardItem) {
        event.stopPropagation();
        board.items.push(currentItem as TBoardTaskItem);
        const currentIndex = currentBoard?.items.indexOf(currentItem as TBoardTaskItem);
        currentBoard?.items.splice(currentIndex as number,1);
        setCurrentBoard(board);
        event.currentTarget.style.boxShadow = "none"; 
    }

    return (
        <>
            {BoardItems.map((board,index)=>(
                <div key={index} onDragOver={(event) => DragOver(event)}
                     onDrop={(event) => DropCard(event, board)}>
                    <div className="board_title">{board.title}</div>
                    <ul className="board_list">                       
                        {board.items.map((task,index)=>(
                            <li className="board_list_item"              
                                key={index}             
                                draggable={true} 
                                onDragOver={(event) => DragOver(event)}   
                                onDragLeave={(event) => DragLeave(event)}        
                                onDragStart={(event) => DragStart(event,board,task)}           
                                onDragEnd={(event) => DragEnd(event)}      
                                onDrop={(event) => Drop(event, board, task)}>
                                <div className="board_list_item_title">{task?.title}</div>
                                <div className="board_list_item_desc">{task?.description}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}
export default TaskBoards;