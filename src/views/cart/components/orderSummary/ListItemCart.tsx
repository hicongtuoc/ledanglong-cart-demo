import { ItemCart } from "@/components/ItemCart";

export function ListItemCart() {
  const itemsCart = [
    {
      name: "BLISS XOI TEA BOX",
      code: "A22B50307000",
      color: "Pink",
      price: "3.450.000₫",
    },
    {
      name: "BLISS XOI TEA BOX",
      code: "A22B50307000",
      color: "Pink",
      price: "3.450.000₫",
    },
  ];
  return (
    <div className="space-y-4 py-4 border-b-2">
      {itemsCart.map((item, index) => (
        <ItemCart key={index} data={item} />
      ))}
    </div>
  );
}
