import BaseInputField from "../../molecules/Formik/BaseInputField";
import DatePickerComp from "../../molecules/Formik/DatePickerComp";
import SelectCountry from "../../molecules/SelectCountry";

export default function AddFacility() {
  return (
    <div className="">
      {/* <MainHeader title='اضافة منشاه' /> */}
      {/* <Formik onSubmit={values => console.log('values', values)} initialValues={{}}> */}
      {/* <Form> */}
      <div className="grid items-start grid-cols-2 gap-2 p-5">
        <div className="flex items-start col-span-12 gap-2 ">
          <div className="w-1/2">
            <BaseInputField
              label=" اسم التجاري للمنشأة بموجب السجل التجاري  "
              placeholder="محمد احمد محمد"
              name="name"
            />
          </div>
          <div className="w-1/2">
            <BaseInputField
              label=" رقم السجل التجاري  "
              placeholder="10********"
              name="registration_number"
              type="number"
            />
          </div>
        </div>
        <div className="flex items-start col-span-12 gap-2 ">
          <div className="w-1/2">
            <DatePickerComp
              name="version_date"
              name_hj="version_date_hj"
              label={"تاريخ إصدار السجل التجاري  بالميلادي"}
            />
          </div>

          <div className="w-1/2">
            <DatePickerComp
              name="end_date"
              name_hj="end_date_hj"
              label={"تاريخ انتهاء السجل التجاري  بالميلادي"}
            />
          </div>
        </div>

        <div className="flex items-start col-span-12 gap-2 ">
          <div className="w-1/2 col-span-6">
            <SelectCountry
              label={"مصدر السجل التجاري "}
              name="registration_source"
              className="mt-[24px]"
            />
          </div>
          <div className="w-1/2 col-span-6">
            <BaseInputField
              label="رقم رخصة مزاولة المهنة الصادرة من أمانة العاصمة المقدسة  "
              placeholder="10********"
              name="license"
              type="number"

            />
          </div>
        </div>

        <div className="flex items-start col-span-12 gap-2 ">
          <div className="flex items-start justify-center w-1/2" >
            <DatePickerComp
              name="license_expired"
              name_hj="license_expired_hj"
              label={
                "تاريخ انتهاء رخصة مزاولة المهنة الصادرة من أمانة العاصمة المقدسة بالميلادي"
              }
            />
          </div>

          <div className="flex items-start justify-center w-1/2 mt-[39px]">
            <BaseInputField
              label="عنوان المنشأة (الحي-الشارع)"
              placeholder="الملك فهد"
              name="address"
            />
          </div>
        </div>

        <div className="flex items-start col-span-12 gap-2 ">
          <div className="w-1/2 mt-[24px]">
            <BaseInputField
              label="شهادة الرقم الضريبي"
              placeholder="***********34"
              name="tax_certificate"
              type="number"

            />
          </div>
          <div className="w-1/2">
            <BaseInputField
              label="عدد الموظفين بموجب بيانات التامينات الاجتماعية "
              placeholder="20"
              name="employee_number"
              type="number"

            />
          </div>
        </div>

        <div className="flex items-start col-span-12 gap-2 ">
          <div className="w-1/2">
            <BaseInputField
              label="عدد الطهاة على راس العمل في المنشاة "
              placeholder="4"
              name="chefs_number"
              type="number"

            />
          </div>
          <div className="w-1/2">
            <BaseInputField
              label=" مساحة المطبخ ( بالمتر المربع)"
              placeholder="500"
              name="kitchen_space"
              type="number"

            />
          </div>
        </div>
        <div className="flex items-start col-span-12 gap-2 ">
          <div className="w-1/2">
            <BaseInputField
              label=" اسم الشارع"
              placeholder="شارع الهدى والنور"
              name="street_name"
            />
          </div>
          <div className="w-1/2">
            <BaseInputField
              label=" اسم الحي"
              placeholder="حي النقع الشرقي"
              name="neighborhood"
            />
          </div>
        </div>

        <div className="flex items-start col-span-12 gap-2 ">
          <div className="w-1/2">
            <BaseInputField
              label=" اسم المدينة"
              placeholder="بريدة"
              name="city"
            />
          </div>
          <div className="w-1/2">
            <BaseInputField
              label="رقم المبنى"
              placeholder="3654"
              name="building_number"
              type="number"

            />
          </div>
        </div>
        <div className="flex items-start col-span-12 gap-2 ">
          <div className="w-1/2">
            <BaseInputField
              label="الرمز البريدي"
              placeholder="56875"
              name="postal_code"
              type="number"

            />
          </div>
          <div className="w-1/2">
            <BaseInputField
              label="الرقم الفرعي"
              placeholder="0541532515"
              name="sub_number"
              type="number"

            />
          </div>
        </div>
      </div>
    </div>
  );
}
