import { useCallback, useState } from "react";
import logo from "/frame-kit.svg";
import "./App.css";
import { loadAndRotate } from "./lib/image-magick/load-and-rotate";
import ReloadPrompt from "./ReloadPrompt";

function App() {
  const [url, setUrl] = useState("");

  const loadImage = useCallback(async () => {
    const imgUrl: string | null = await loadAndRotate();
    if (imgUrl) setUrl(imgUrl);
  }, []);

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Frame Kit Logo" />
      </div>
      <h1>Frame Kit</h1>
      <div className="card">
        <button onClick={() => void loadImage()}>Load Rotated Image</button>
        {url && <img src={url} width={150} height={150}></img>}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <ReloadPrompt />
    </>
  );
}

export default App;
