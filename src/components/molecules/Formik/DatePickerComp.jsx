/* eslint-disable react/prop-types */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useFormikContext } from "formik";
import { useState, useEffect } from "react";

export default function DatePickerComp({ name,name_hj , label }) {
  const { setFieldValue, values } = useFormikContext();
  const [valueGregorian, setValueGregorian] = useState();
  const [valueHijri, setValueHijri] = useState();


  useEffect(() => {
    if (valueGregorian) {
      // Convert the Gregorian date to Hijri
      const gregorianDate = new Date(valueGregorian);
      const hijriFormatter = new Intl.DateTimeFormat("ar-SA-u-ca-islamic", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const formattedHijriDate = hijriFormatter.format(gregorianDate);
      const hijriDateWithoutHeh = formattedHijriDate.replace("هـ", "").replace(/\//g, "-");

      setValueHijri(hijriDateWithoutHeh);
      setFieldValue(name_hj, hijriDateWithoutHeh);

      console.log("Hijri Date:", hijriDateWithoutHeh);
    }
  }, [name_hj, setFieldValue, valueGregorian]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="my-4">
        <label className="mb-3">{label}</label>
        <DatePicker
          className="bg-white rounded-[10px] w-full"
          name={name}
          defaultValue={dayjs(values[name])}
          onChange={(newValue) => {
            if (values[name] !== undefined) {
              const newDate = dayjs(newValue);
              if (!newDate.isValid()) {
                console.error("تاريخ غير صحيح");
              } else {
                setFieldValue(name, newDate.format("YYYY-MM-DD"));
                setValueGregorian(newDate.format("YYYY-MM-DD"));
              }
            }
          }}
        />
        {valueHijri && <p >الموافق بالهجري :  <span className="font-bold">{valueHijri} </span></p>}

        {/* هنا سيتم طباعة التاريخ الهجري */}
      </div>
    </LocalizationProvider>
  );
}
