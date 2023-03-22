import './app.css'
import AiArt from './Components/AiArt';
import Chatbox from './Components/Chatbox';
import SideMenu from './Components/SideMenu';
import { useGlobalContext } from './Context';


function App() {

  const { art } = useGlobalContext();

  return (
    <div className="App">
      <SideMenu />
      {art ? <AiArt /> : <Chatbox />}
    </div>
  );
}

export default App;
