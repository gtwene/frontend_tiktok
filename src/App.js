import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          url="https://d2of6bhnpl91ni.cloudfront.net/cms/1920x1080_Final_2020_Homepage%20Video-36f138a5ab.mp4"
          channel="kwame"
          description="YOOO I'm there missing you"
          song="99 problems but REACT aint one!"
          likes={123}
          messages={456}
          shares={789}
        />
        <Video
          url="https://ak.picdn.net/shutterstock/videos/1034159981/preview/stock-footage-digital-information-flows-through-network-and-data-servers-behind-mesh-panels-in-a-server-room-of-a.webm"
          channel="kwame"
          description="YOOO I'm there missing you"
          song="99 problems but REACT aint one!"
          likes={999}
          messages={456}
          shares={789}
        />
      </div>

      {/* app container */}
      {/* videos */}
    </div>
  );
}

export default App;
