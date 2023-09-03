import XIcon from "~icons/teenyicons/x-outline";
import RefreshIcon from "~icons/teenyicons/refresh-outline";
import DialogBox from "./DialogBox";
import Button from "../Button";

interface Props {
  onUpdate: React.MouseEventHandler<HTMLButtonElement>;
  onIgnore: React.MouseEventHandler<HTMLButtonElement>;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

export default function UpdateDialogBox({
  onUpdate,
  onIgnore,
  onClose,
}: Props) {
  return (
    <DialogBox onClose={onClose}>
      <div className="font-medium">
        <span className="inline-block">
          A new version is available! Click update to upgrade to the latest
          version.
        </span>
      </div>
      <div className="my-2" />
      <div className="flex justify-center">
        <Button color="bg-tan" onClick={onIgnore}>
          <div className="mx-6">
            <XIcon className="-mt-1 mr-1 inline-block" />
            Ignore
          </div>
        </Button>
        <Button color="bg-green" onClick={onUpdate}>
          <div className="mx-6">
            <RefreshIcon className="-mt-1 mr-1 inline-block" />
            Update
          </div>
        </Button>
      </div>
    </DialogBox>
  );
}
