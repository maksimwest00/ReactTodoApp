import './App.css';
import SideBar from './components/SideBar/SideBar';
import ContentBody from './components/ContentBody/ContentBody';
import { BrowserRouter as Router} from 'react-router-dom';
import SideBarBodyItems from './data/SideBarBodyItems';
import WorkSpaceItems from './data/WorkSpaceItems';
function App() {
  return (
    <Router>
      <div className='mainContainer'>
        <SideBar Items={SideBarBodyItems} ItemsWorkSpace={WorkSpaceItems}/>           
        <ContentBody/>        
      </div>
    </Router>
  );
}
export default App;
