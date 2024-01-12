import BodyContent from './BodyContent/BodyContent';
import './ContentBody.css'
import HeaderContent from './HeaderContent/HeaderContent';
function ContentBody() {
    return (
      <div className='content_body'>
        <HeaderContent/>
        <div className='route_content'>
          <BodyContent/>
          {/* <Routes>
              <Route path="/" element={<h1>StartPage</h1>} />
              <Route path="/home" Component={HomePage} />
              <Route path="/mytasks" Component={TasksPage} />
              <Route path="/goals" Component={GoalsPage} />
              <Route path="/members" Component={MembersPage} />
          </Routes> */}
        </div>
      </div>
    )
}
export default ContentBody;