import { cn } from "@/lib/utils";

interface TitleCustomProps {
  no?: number;
  title: string;
  classTitle?: string;
}

export function TitleCustom(props: TitleCustomProps) {
  const { no, title, classTitle } = props;
  return (
    <div className="flex items-center">
      {no && (
        <div className="flex rounded-full outline outline-offset-2 outline-[#D8D8D8] h-7 w-7 justify-center items-center font-bold mr-4">
          <span className="p-2">{no}</span>
        </div>
      )}
      <div className={cn("font-bold uppercase", classTitle)}>{title}</div>
    </div>
  );
}
