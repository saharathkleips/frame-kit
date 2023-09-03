import { useCallback, useState } from "react";
import logo from "/frame-kit.svg";
import { loadAndRotate } from "./lib/image-magick/load-and-rotate";
import Button from "./components/Button";
import ServiceWorkerDialogBox from "./components/dialog/ServiceWorkerDialogBox";
import UpdateDialogBox from "./components/dialog/UpdateDialogBox";
import OfflineDialogBox from "./components/dialog/OfflineDialogBox";
function App() {
  const [url, setUrl] = useState("");

  const loadImage = useCallback(async () => {
    const imgUrl: string | null = await loadAndRotate();
    if (imgUrl) setUrl(imgUrl);
  }, []);

  const noop = () => {
    /** noop */
  };

  return (
    <div className="min-h-screen bg-tan p-2 selection:bg-yellow">
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
      <UpdateDialogBox onClose={noop} onIgnore={noop} onUpdate={noop} />
      <OfflineDialogBox onClose={noop} />
      <ServiceWorkerDialogBox />
    </div>
  );
}

export default App;
