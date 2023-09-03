import ThumbUpIcon from "~icons/teenyicons/thumb-up-outline";
import DialogBox from "./DialogBox";
import Button from "../Button";

interface Props {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

export default function OfflineDialogBox({ onClose }: Props) {
  return (
    <DialogBox onClose={onClose}>
      <div className="font-medium">
        Frame Kit is now ready to be used completely offline.
      </div>
      <div className="my-2" />
      <div className="flex justify-center">
        <Button color="bg-tan" onClick={onClose}>
          <div className="mx-6">
            <ThumbUpIcon className="-mt-1.5 mr-1.5 inline-block" />
            Got It!
          </div>
        </Button>
      </div>
    </DialogBox>
  );
}
