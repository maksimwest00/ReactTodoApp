import './SideBar.css'
import { useState } from 'react';
import TSideBarItem from '../../types/TSideBarItem';
import TSideBarWorkSpaceItem from '../../types/TSideBarWorkSpaceItem';
import SideBarHeader from './SideBarHeader/SideBarHeader';
import SideBarBody from './SideBarBody/SideBarBody';
import SideBarFooter from './SideBarFooter/SideBarFooter';

function SideBar({Items, ItemsWorkSpace} : {Items : TSideBarItem[], ItemsWorkSpace : TSideBarWorkSpaceItem[]}) {
    const [IsExpanded,setIsExpanded] = useState(false);
    function ChangeExpandSideBar() {
        setIsExpanded(!IsExpanded);
    }
    return (
        <div className={`sidebar ${IsExpanded ? 'expanded' : 'collapsed'}`}>       
            <SideBarHeader IsExpanded={IsExpanded} ChangeExpandSideBar={() => {ChangeExpandSideBar()}}/>
            <SideBarBody IsExpanded={IsExpanded} Items={Items}/>
            {/* <SideBarFooter IsExpanded={IsExpanded} ItemsWorkSpace={ItemsWorkSpace}/> */}
        </div>
    )
}
export default SideBar;