import { cn } from "@/lib/utils";

interface TitleCustomProps {
  no?: number;
  title: string;
  classNameTitle?: string;
  classNameComponent?: string;
  classNameNo?: string;
}

export function TitleCustom(props: TitleCustomProps) {
  const { no, title, classNameTitle, classNameComponent, classNameNo } = props;
  return (
    <div className={cn("flex items-center", classNameComponent)}>
      {no && (
        <div className="flex rounded-full outline outline-offset-2 outline-[#D8D8D8] h-7 w-7 justify-center items-center font-bold mr-4">
          <span className={cn("p-2", classNameNo)}>{no}</span>
        </div>
      )}
      <div className={cn("font-bold uppercase", classNameTitle)}>{title}</div>
    </div>
  );
}
