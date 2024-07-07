import { InputCustom } from "@/components/InputCustom";

export function Coupon() {
  return (
    <div className="py-6 border-b-2">
      <div className="flex w-full">
        <div className="flex-1">
          <InputCustom label="Coupon/gift card" name="coupon" id="coupon" />
        </div>
        <button
          type="button"
          className="bg-black text-white px-4 shadow-sm hover:bg-gray-800"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
