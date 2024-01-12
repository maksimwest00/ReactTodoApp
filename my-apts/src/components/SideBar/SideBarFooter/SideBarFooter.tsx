import './SideBarFooter.css'
import sidebar_body_workspace_button_add from '../../../Assets/sidebar_body_workspace_button_add.png'
import TSideBarWorkSpaceItem from '../../../types/TSideBarWorkSpaceItem';
function SideBarFooter({IsExpanded, ItemsWorkSpace} : {IsExpanded : boolean, ItemsWorkSpace : TSideBarWorkSpaceItem[]}) {
    return (
        <div className='sidebar_footer'>
        {IsExpanded ?
        <>
            <div className='sidebar_footer_header'>
                <span className='sidebar_footer_header_text'>WORKSPACE</span>
                <button className='sidebar_footer_header_button'>
                    <img src={sidebar_body_workspace_button_add}/>
                </button>
            </div>
            <div className='sidebar_footer_body'>
                {ItemsWorkSpace.map((item, index) => (
                    <div className='sidebar_footer_body_button_container'>
                    <button className='sidebar_footer_body_button'>
                        <div className='sidebar_footer_body_button_color' color={item.color}/>
                        <label className='sidebar_footer_body_title'>{item.name}</label>          
                    </button>
                    <button className='sidebar_footer_body_button_edit'>{"..."}</button>
                    </div>
                ))}
            </div>
        </>
        : null}
    </div>
    )
}
export default SideBarFooter;