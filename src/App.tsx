import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { loadAndRotate } from "./lib/image-magick/load-and-rotate";

function App() {
  const [url, setUrl] = useState("");

  const loadImage = useCallback(async () => {
    const imgUrl: string | null = await loadAndRotate();
    if (imgUrl) setUrl(imgUrl);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => void loadImage()}>Load Rotated Image</button>
        {url && <img src={url}></img>}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
