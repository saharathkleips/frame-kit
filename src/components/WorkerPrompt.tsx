import Button from "./Button";
import BellIcon from "~icons/teenyicons/bell-outline";
import XIcon from "~icons/teenyicons/x-outline";
import RefreshIcon from "~icons/teenyicons/refresh-outline";
import ThumbUpIcon from "~icons/teenyicons/thumb-up-outline";
import PowerIcon from "~icons/teenyicons/power-outline";
import { useRegisterSW } from "virtual:pwa-register/react";

export default function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered() {
      console.log("Service worker state=registered");
    },
    onRegisterError(error) {
      console.error("Service worker state=error", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  const prompt = offlineReady ? (
    <OfflineReady onClose={close} />
  ) : needRefresh ? (
    <NeedRefresh
      onIgnore={close}
      onUpdate={() => {
        console.log("Service worker state=reloading");
        void updateServiceWorker(true);
      }}
    />
  ) : undefined;

  return (
    (prompt && (
      <div className="absolute inset-x-0 bottom-0 mx-2 mb-2 border border-black bg-white p-4 text-base shadow">
        {prompt}
      </div>
    )) ?? <></>
  );
}

interface NeedRefreshProps {
  onIgnore: () => void;
  onUpdate: () => void;
}

function NeedRefresh({ onIgnore, onUpdate }: NeedRefreshProps) {
  return (
    <>
      <div className="font-medium">
        <BellIcon className="-mt-0.5 mr-1 inline" />A new version is available!
        Click update to upgrade to the latest version.
      </div>
      <div className="mt-2 flex justify-center">
        <Button color="bg-tan" onClick={onIgnore}>
          <div className="mx-4">
            <XIcon className="-mt-0.5 mr-1 inline" />
            Ignore
          </div>
        </Button>
        <Button color="bg-green" onClick={onUpdate}>
          <div className="mx-4">
            <RefreshIcon className="-mt-0.5 mr-1 inline" />
            Update
          </div>
        </Button>
      </div>
    </>
  );
}

interface OfflineReadyProps {
  onClose: () => void;
}

function OfflineReady({ onClose }: OfflineReadyProps) {
  return (
    <>
      <div className="font-medium">
        <PowerIcon className="-mt-0.5 mr-1 inline" />
        Frame Kit is now ready to be used offline.
      </div>
      <div className="mt-2 flex justify-center">
        <Button color="bg-tan" onClick={onClose}>
          <div className="mx-4">
            <ThumbUpIcon className="-mt-0.5 mr-1 inline" />
            Got It!
          </div>
        </Button>
      </div>
    </>
  );
}
