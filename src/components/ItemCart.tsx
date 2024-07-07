import Image from "next/image";

interface ItemCartProps {
  data: {
    name: string;
    code: string;
    color: string;
    price: string;
    image?: string;
  };
}

export function ItemCart(props: ItemCartProps) {
  const { name, code, color, price, image = "/tiger.webp" } = props.data;
  return (
    <div className="flex">
      <div className="relative">
        <Image
          src={image}
          alt="Product"
          className="w-48 h-32 rounded-md border"
          width={100}
          height={100}
        />
        <div className="flex justify-center items-center absolute top-[-12px] right-[-12px] rounded-full border-2 h-7 w-7 bg-white">
          <span className="p-2">1</span>
        </div>
      </div>

      <div className="ml-4">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-xs text-gray-500">Product Code: {code}</div>
            <div className="text-sm text-gray-500 font-medium">
              Color: {color}
            </div>
          </div>
          <div className="text-lg font-medium">{price}</div>
        </div>
      </div>
    </div>
  );
}
