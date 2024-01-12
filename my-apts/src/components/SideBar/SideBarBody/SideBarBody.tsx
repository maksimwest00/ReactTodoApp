import { useNavigate } from 'react-router-dom';
import TSideBarItem from '../../../types/TSideBarItem';
import './SideBarBody.css'
function SideBarBody({IsExpanded , Items} : {IsExpanded : boolean, Items : TSideBarItem[]}) {
    const navigate = useNavigate();
    function HandleClick (title : string) {
        switch (title){
            case "Home":
                navigate(`/home`);
                break;
            case "My Tasks":
                navigate(`/mytasks`);
                break;
            case "Goals":
                navigate(`/goals`);
                break;
            case "Members":
                navigate(`/members`)
                break;
        }     
    }
    return (
        <nav className='sidebar_body'>
                {Items.map((item, index) => (
                    <button className='sidebar_body_button' key={index} onClick={() =>{HandleClick(item.title)}} >
                        <img className='sidebar_body_button_image' src={item.filepathImage}/>
                        {IsExpanded && <label className='sidebar_body_title'>{item.title}</label>}          
                    </button>
                ))}
        </nav>
    )
}
export default SideBarBody;