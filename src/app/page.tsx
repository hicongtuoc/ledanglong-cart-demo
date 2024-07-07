import { InputCustom } from "@/components/InputCustom";
import { ItemCart } from "@/components/ItemCart";
import { SelectCustom } from "@/components/SelectCustom";
import { TitleCustom } from "@/components/TitleCustom";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  const optionsCountry = ["Viet Nam", "United States", "Japan", "Korea"];
  const optionsCity = ["Ho Chi Minh", "Ha Noi", "Da Nang", "Can Tho"];
  const optionsDistrict = [
    "District 1",
    "District 2",
    "District 3",
    "District 4",
  ];
  const optionsWard = [
    "Ward 1",
    "Ward 2",
    "Ward 3",
    "Ward 4",
    "Ward 5",
    "Ward 6",
    "Ward 7",
    "Ward 8",
  ];

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
    <div className="min-h-screen bg-gray-100 divide-y divide-slate-200">
      <header className="bg-white p-4 shadow-sm flex justify-between items-center">
        <button className="text-gray-600 flex items-center space-x-1">
          <ArrowLeft className="w-5 h-5" />
          <TitleCustom title="Back to My Bag" />
        </button>
        <h1 className="text-2xl font-semibold">hanoia</h1>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 divide-x divide-slate-200">
        <div className="bg-white p-6 shadow-sm">
          <TitleCustom no={1} title="Shipping Address" />
          <h3 className="my-7 text-lg font-semibold">
            Enter shipping information
          </h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <InputCustom
                  label="First name"
                  name="firstName"
                  id="firstName"
                  required
                />
              </div>
              <div className="form-group">
                <InputCustom
                  label="Last name"
                  name="lastName"
                  id="lastName"
                  required
                />
              </div>
            </div>

            <div className="mt-4 form-group">
              <InputCustom
                type="email"
                label="Email"
                name="email"
                id="email"
                required
              />
            </div>

            <div className="mt-4 form-group">
              <InputCustom
                label="Phone number"
                name="phoneNumber"
                id="phoneNumber"
                required
              />
            </div>

            <h3 className="mt-8 text-lg font-semibold">Enter address</h3>
            <div className="mt-4 form-group">
              <SelectCustom label="Country" options={optionsCountry} required />
            </div>

            <div className="mt-4 form-group">
              <SelectCustom label="City" options={optionsCity} required />
            </div>

            <div className="mt-4 form-group">
              <InputCustom
                label="Address"
                name="address"
                id="address"
                required
              />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <SelectCustom
                  label="District"
                  options={optionsDistrict}
                  required
                />
              </div>
              <div className="form-group">
                <SelectCustom label="Ward" options={optionsWard} required />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-black text-white py-2 rounded-md shadow-sm hover:bg-gray-800"
            >
              Use this address
            </button>
          </form>
        </div>

        <div className="bg-white p-6 shadow-sm">
          <TitleCustom title="Order Summary" />
          <div className="space-y-4 py-4 border-b-2">
            {itemsCart.map((item, index) => (
              <ItemCart key={index} data={item} />
            ))}
          </div>

          <div className="py-6 border-b-2">
            <div className="flex w-full">
              <div className="flex-1">
                <InputCustom
                  label="Coupon/gift card"
                  name="coupon"
                  id="coupon"
                />
              </div>
              <button
                type="button"
                className="bg-black text-white px-4 shadow-sm hover:bg-gray-800"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="py-6 space-y-1 border-b-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium uppercase">Subtotal</span>
              <span className="text-sm">17,950,000₫</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium uppercase">Discount</span>
              <span className="text-sm">(0₫)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium uppercase">Shipping</span>
              <span className="text-sm">Shipping fee</span>
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
              className="mt-1 block w-full border-gray-300 shadow-sm h-[100px] border-2 p-2"
              placeholder="Please note order information"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
