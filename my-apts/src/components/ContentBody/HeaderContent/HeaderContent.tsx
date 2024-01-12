import './HeaderContent.css'

import content_header_profile_message_icon from './../../../Assets/content_header_profile_message_icon.png'
import content_header_profile_notify from './../../../Assets/content_header_profile_notify.png'
import content_header_search_icon from './../../../Assets/content_header_search_icon.png'

import HeaderMenu from './HeaderMenu/HeaderMenu'
function HeaderContent() {
    return (
          <div className='header_container'>
                <HeaderMenu />
                <div className='header_inputs_container'>
                    <div className="search_container">
                        <input className="search_input" 
                                   type="text" 
                                   placeholder="Search..."/>
                         <span className="search_icon">
                                <img src={content_header_search_icon}/>
                            </span>
                    </div>
                    <div className='header_buttons'>
                      <button className='message_button'>
                          <img src={content_header_profile_message_icon}/>
                      </button>  
                      <button className='notify_button'>
                          <img src={content_header_profile_notify}/>
                      </button>  
                      <button className='profile_button'>
                          <div className='profile_logo'/>
                      </button>  
                    </div>
                </div>
            </div>
    )
}
export default HeaderContent;