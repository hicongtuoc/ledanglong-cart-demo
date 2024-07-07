import { InputCustom } from "@/components/InputCustom";
import { SelectCustom } from "@/components/SelectCustom";

export function Address() {
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
  return (
    <>
      <h3 className="mt-8 text-lg font-semibold">Enter address</h3>
      <div className="mt-4 form-group">
        <SelectCustom label="Country" options={optionsCountry} required />
      </div>

      <div className="mt-4 form-group">
        <SelectCustom label="City" options={optionsCity} required />
      </div>

      <div className="mt-4 form-group">
        <InputCustom label="Address" name="address" id="address" required />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <SelectCustom label="District" options={optionsDistrict} required />
        </div>
        <div className="form-group">
          <SelectCustom label="Ward" options={optionsWard} required />
        </div>
      </div>
    </>
  );
}
