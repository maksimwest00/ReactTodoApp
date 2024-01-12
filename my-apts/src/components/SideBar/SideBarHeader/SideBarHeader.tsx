import './SideBarHeader.css'
function SideBarHeader({IsExpanded, ChangeExpandSideBar} : {IsExpanded : boolean, ChangeExpandSideBar : any}) {
    return (
        <div className='sidebar_header'>
            <div className='sidebar_header_container'>
                <div className='outer_ellipse'>
                    <div className='inner_ellipse'/>
                </div>
                <span>Hiro</span>
                <button className='sidebar_header_expand_button' 
                        onClick={()=>{ChangeExpandSideBar()}}>
                        {IsExpanded ? "<<" : ">>"}
                </button>
            </div> 
        </div>
    )
}
export default SideBarHeader;