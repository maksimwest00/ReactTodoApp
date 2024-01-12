import sidebar_home_image from '../Assets/sidebar_home_image.png'
import sidebar_mytasks_image from '../Assets/sidebar_mytasks_image.png';
import sidebar_goals_image from '../Assets/sidebar_goals_image.png';
import sidebar_members_image from '../Assets/sidebar_members_image.png';

import TSideBarItem from '../types/TSideBarItem'

const SideBarBodyItems : TSideBarItem[] = [
    {
      filepathImage : sidebar_home_image,
      title : 'Home',
    },
    {
      filepathImage : sidebar_mytasks_image,
      title : 'My Tasks',
    },
    {
      filepathImage : sidebar_goals_image,
      title : 'Goals',
    },
    {
      filepathImage : sidebar_members_image,
      title : 'Members',
    },
]
export default SideBarBodyItems ;