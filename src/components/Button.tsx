import { MouseEventHandler } from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: `bg-${string}`;
}

export default function Button({
  children,
  onClick,
  color = "bg-white",
}: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${color} mx-2 my-1 rounded-3xl border border-solid border-black p-2 text-base font-medium shadow transition-[box-shadow,transform] duration-150 ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-sm`}
    >
      {children}
    </button>
  );
}
