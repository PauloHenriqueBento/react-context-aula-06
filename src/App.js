import Buscar from './buscar';
import Header from './Header';
import Video from './Video';
import { Videos } from "./data/videos"
import { VideoContext } from './VideoContext';
import ListVideo from './ListVideo';

function App() {
  return (
    <div className="container" >
      <VideoContext.Provider value={(Videos)}>
        <Header />
        <Buscar />
        <ListVideo />
      </VideoContext.Provider>
    </div>
  );
}

export default App;
