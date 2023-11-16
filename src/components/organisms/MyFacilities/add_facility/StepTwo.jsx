import UploadImageTwo from "../../../molecules/UploadImageTwo";

export default function StepTwo() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      <div>
        <UploadImageTwo
          name="registration"
          label="صورة السجل التجاري"
        />
      </div>
      <div>
        <UploadImageTwo
          name="national_address"
          label="صورة العنوان الوطني "
        />
      </div>
    </div>
  );
}
