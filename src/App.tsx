import { useCallback, useState } from "react";
import logo from "/frame-kit.svg";
import { loadAndRotate } from "./lib/image-magick/load-and-rotate";
import ReloadPrompt from "./ReloadPrompt";
import Button from "./components/Button";

function App() {
  const [url, setUrl] = useState("");

  const loadImage = useCallback(async () => {
    const imgUrl: string | null = await loadAndRotate();
    if (imgUrl) setUrl(imgUrl);
  }, []);

  return (
    <div className="min-h-screen bg-tan">
      <div>
        <img src={logo} alt="Frame Kit Logo" />
      </div>
      <h1 className="text-3xl font-bold underline">Frame Kit</h1>
      <div>
        <Button onClick={() => void loadImage()}>Load Rotated Image</Button>
        {url && <img src={url} width={150} height={150}></img>}
        <hr />
        <Button color="bg-tan">Tan Button</Button>
        <Button color="bg-yellow">Yellow Button</Button>
        <Button color="bg-blue">Blue Button</Button>
        <Button color="bg-green">Green Button</Button>
        <Button color="bg-pink">Pink Button</Button>
        <Button color="bg-red">Red Button</Button>
      </div>
      <ReloadPrompt />
    </div>
  );
}

export default App;
