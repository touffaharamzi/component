import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Address'
function App() {
  return (
    <div className="App">
      <FullName className="fn"/>
      <ProfilePhoto/>
      <Address/>
    </div>
  );
}

export default App;
