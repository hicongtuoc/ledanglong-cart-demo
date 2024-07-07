export function OrderNote() {
  return (
    <div className="mt-4">
      <label
        htmlFor="order-note"
        className="block text-sm font-medium text-gray-700"
      >
        Order note
      </label>
      <textarea
        id="order-note"
        name="order-note"
        className="mt-1 block w-full border-gray-300 shadow-sm h-[100px] border-2 p-2 text-base rounded-none"
        placeholder="Please note order information"
      ></textarea>
    </div>
  );
}
