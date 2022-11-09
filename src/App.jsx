import blueBlob from "./assets/blue-blob.png";
import yellowBlob from "./assets/yellow-blob.png";

function App() {
  return (
    <main className="main">
      <img 
        className="blob--left"
        src={blueBlob}
        alt=""
      />
      <img 
        className="blob--right"
        src={yellowBlob}
        alt=""
      />
      Quizzical
    </main>
  )
}

export default App
