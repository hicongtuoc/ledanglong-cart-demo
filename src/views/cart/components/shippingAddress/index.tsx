import { TitleCustom } from "@/components/TitleCustom";
import { Address } from "./Address";
import { ShippingInformation } from "./ShippingInformation";

export function ShippingAddress() {
  return (
    <div className="bg-white p-6 divide-y divide-slate-200 lg:min-h-[calc(100vh-56px)]">
      <div>
        <TitleCustom no={1} title="Shipping Address" />
        <form>
          <ShippingInformation />
          <Address />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 shadow-sm hover:bg-gray-800"
            >
              Use this address
            </button>
          </div>
        </form>
      </div>

      <TitleCustom
        no={2}
        title="Payment Method"
        classNameComponent="pt-6 mt-6"
        classNameTitle="text-slate-300"
        classNameNo="text-slate-300"
      />
    </div>
  );
}
