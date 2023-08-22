import "./ReloadPrompt.css";

import { useRegisterSW } from "virtual:pwa-register/react";

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      console.log("SW Registered:" + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className="container">
      {(offlineReady || needRefresh) && (
        <div className="toast">
          <div className="message">
            {offlineReady ? (
              <span>Frame Kit is offline ready.</span>
            ) : (
              <span>A new update is available, click reload to update.</span>
            )}
          </div>
          {needRefresh && (
            <button
              className="toast-button"
              onClick={() => {
                console.log("reloading...");
                void updateServiceWorker(true);
              }}
            >
              Reload
            </button>
          )}
          <button
            className="toast-button"
            onClick={() => {
              close();
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default ReloadPrompt;
