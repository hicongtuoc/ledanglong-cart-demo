import { InputCustom } from "@/components/InputCustom";
import { ItemCart } from "@/components/ItemCart";
import { SelectCustom } from "@/components/SelectCustom";
import { TitleCustom } from "@/components/TitleCustom";
import { ArrowLeft } from "lucide-react";
import { ShippingAddress } from "./components/shippingAddress";
import { OrderSummary } from "./components/orderSummary";

export function CartPage() {
  return (
    <div className="min-h-screen bg-white divide-y divide-slate-200 flex flex-col">
      <header className="bg-white p-4 shadow-sm flex justify-between sm:justify-center items-center relative h-14">
        <button className="text-gray-600 flex items-center space-x-1 sm:absolute sm:left-4">
          <ArrowLeft className="w-5 h-5" />
          <TitleCustom title="Back to My Bag" />
        </button>
        <h1 className="text-2xl font-semibold">hanoia</h1>
      </header>

      <div className="flex-1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 divide-x divide-slate-200">
          <ShippingAddress />

          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
