import { useRegisterSW } from "virtual:pwa-register/react";
import OfflineDialogBox from "./OfflineDialogBox";
import UpdateDialogBox from "./UpdateDialogBox";

export default function ServiceWorkerDialogBox() {
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

  const dialogBox = offlineReady ? (
    <OfflineDialogBox onClose={close} />
  ) : needRefresh ? (
    <UpdateDialogBox
      onIgnore={close}
      onClose={close}
      onUpdate={() => {
        console.log("Service worker state=reloading");
        void updateServiceWorker(true);
      }}
    />
  ) : undefined;

  return (
    (dialogBox && (
      <div className="absolute inset-x-0 bottom-0">{dialogBox}</div>
    )) ?? <></>
  );
}
