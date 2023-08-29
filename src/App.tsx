import { useCallback, useState } from "react";
import logo from "/frame-kit.svg";
import { loadAndRotate } from "./lib/image-magick/load-and-rotate";
import Button from "./components/Button";
import WorkerPrompt from "./components/WorkerPrompt";

function App() {
  const [url, setUrl] = useState("");

  const loadImage = useCallback(async () => {
    const imgUrl: string | null = await loadAndRotate();
    if (imgUrl) setUrl(imgUrl);
  }, []);

  return (
    <div className="min-h-screen bg-tan selection:bg-yellow">
      <h1 className="font-heading text-xl font-bold">
        <span className="text-red">[</span>
        <span> frame kit </span>
        <span className="text-red">]</span>
      </h1>
      <h2 className="text-lg">
        A simple tool for adding frames and borders around your images.
      </h2>
      <div>
        <img src={logo} width={200} height={200} alt="Frame Kit Logo" />
      </div>
      <div>
        <Button onClick={() => void loadImage()}>Load Rotated Image</Button>
        {url && <img src={url} width={150} height={150}></img>}
      </div>
      <div>
        <Button color="bg-tan">Tan Button</Button>
        <Button color="bg-yellow">Yellow Button</Button>
        <Button color="bg-blue">Blue Button</Button>
        <Button color="bg-green">Green Button</Button>
        <Button color="bg-pink">Pink Button</Button>
        <Button color="bg-red">Red Button</Button>
      </div>
      <WorkerPrompt />
    </div>
  );
}

export default App;
