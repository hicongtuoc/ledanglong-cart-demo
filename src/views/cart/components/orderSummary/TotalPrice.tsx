export function TotalPrice() {
  return (
    <>
      <div className="py-6 space-y-1 border-b-2">
        <div className="flex justify-between">
          <span className="text-base font-medium uppercase">Subtotal</span>
          <span className="text-base">17,950,000₫</span>
        </div>
        <div className="flex justify-between">
          <span className="text-base font-medium uppercase">Discount</span>
          <span className="text-base">(0)₫</span>
        </div>
        <div className="flex justify-between">
          <span className="text-base font-medium uppercase">Shipping</span>
          <span className="text-base">Shipping fee</span>
        </div>
      </div>

      <div className="py-6">
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>18,000,000₫</span>
        </div>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="gift-wrap"
            name="gift-wrap"
            className="h-4 w-4 border-gray-300 rounded"
          />
          <label
            htmlFor="gift-wrap"
            className="ml-2 text-sm font-medium text-gray-700"
          >
            Free gift wrapping
          </label>
        </div>
      </div>
    </>
  );
}
