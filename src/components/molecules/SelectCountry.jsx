/* eslint-disable react/prop-types */
import { useFormikContext } from "formik";
import Select from "react-select";
import useFetch from "../../hooks/useFetch";

export default function SelectCountry({ name, label, className }) {
  const { setFieldValue } = useFormikContext();
  const { data: countries } = useFetch({
    endpoint: `countries`,
    queryKey: ["countrie"],
    onError(e) {
      console.log("e", e);
    },
  });
  const options = countries?.countries.map((item) => ({
    value: item.id,
    label: item.name_ar,
  }));

  return (
    <div className={className}>
      <label>{label}</label>
      {/* <SelectComp
        name={name}
        multi={false}
        data={countries?.countries ? countries?.countries : ["gfv"]}
        className="w-full mt-3"
        placeholder="الدوله"
      /> */}
      <div className="mt-3">
        <Select
          options={options}
          name={name}
          onChange={(option) => setFieldValue(name, option.value)}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              padding: "10px",

              borderRadius: " 8px",
              // borderColor: 'rgba(76, 78, 100, 0.87)',
            }),
            option:(baseStyles)=>({
              ...baseStyles
            })
          }}
        />
      </div>
    </div>
  );
}
