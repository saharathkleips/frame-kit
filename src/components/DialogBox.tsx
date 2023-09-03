import XIcon from "~icons/teenyicons/x-outline";
import BellIcon from "~icons/teenyicons/bell-outline";

interface Props {
  header?: string;
  children?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function DialogBox({
  children,
  header = "Notification",
  onClose,
}: Props) {
  return (
    <div className="m-2 border border-black shadow">
      <div className="flex h-8 bg-black">
        <div className="inline-block aspect-square h-full border bg-yellow">
          <BellIcon className="m-auto h-full" />
        </div>
        <span className="ml-4 mt-0.5 text-lg font-semibold text-white">
          {header}
        </span>
        <button
          className="ml-auto inline-block aspect-square h-full border bg-red"
          onClick={onClose}
        >
          <XIcon className="m-auto h-full" />
        </button>
      </div>
      <div className="bg-white p-4">{children}</div>
    </div>
  );
}
