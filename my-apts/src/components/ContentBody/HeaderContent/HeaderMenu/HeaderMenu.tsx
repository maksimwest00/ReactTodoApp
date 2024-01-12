import './HeaderMenu.css'
import HeaderItems from '../../../../data/HeaderItems';
import THeaderItem from '../../../../types/THeaderItem';
import { useState } from 'react'

function HeaderMenu () {
    const [selectedItem, setSelectedItem] = useState<THeaderItem>(HeaderItems[1])
    const handleItemClick = (item : THeaderItem) => {
      if (selectedItem === item) {
        setSelectedItem(null);
      } else {
        setSelectedItem(item);
      }
    };
    return (
        <ul className='header_list'>
            {HeaderItems.map((item : THeaderItem,index : any) =>(     
                <li 
                    onClick={()=>{handleItemClick(item)}}
                    className={`header_list_child ${selectedItem?.title === item?.title ? 'selected' : 'default'}`}
                    key={index}>
                  <button className='list_button' key={index}>
                        <img className='list_button_icon' src={item?.icon}/>
                        <label className='list_button_title'>{item?.title}</label>        
                  </button>
                </li>  
            ))}
        </ul>
    )
}
export default HeaderMenu;