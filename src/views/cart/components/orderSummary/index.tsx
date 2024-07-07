import { TitleCustom } from "@/components/TitleCustom";
import { ListItemCart } from "./ListItemCart";
import { Coupon } from "./Coupon";
import { TotalPrice } from "./TotalPrice";
import { OrderNote } from "./OrderNote";

export function OrderSummary() {
  return (
    <div className="bg-white p-6">
      <TitleCustom title="Order Summary" />
      <ListItemCart />

      <Coupon />

      <TotalPrice />

      <OrderNote />
    </div>
  );
}
