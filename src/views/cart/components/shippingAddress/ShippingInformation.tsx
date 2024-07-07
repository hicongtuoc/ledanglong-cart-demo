import { InputCustom } from "@/components/InputCustom";

export function ShippingInformation() {
  return (
    <>
      <h3 className="my-7 text-lg font-semibold">Enter shipping information</h3>

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
    </>
  );
}
