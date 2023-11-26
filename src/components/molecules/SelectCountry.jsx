/* eslint-disable react/prop-types */
import useFetch from "../../hooks/useFetch";
import SelectComp from "./Formik/SelectComp";

export default function SelectCountry({ name, label }) {
  const { data: countries } = useFetch({
    endpoint: `countries`,
    queryKey: ["countrie"],
    onError(e) {
      console.log("e", e);
    },
  });

  return (
    <div>
      <label >{label}</label>
      <SelectComp
        name={name}
        multi={false}
        data={countries?.countries ? countries?.countries : ["gfv"]}
        className="w-full mt-3"
        placeholder="الدوله"
      />
    </div>
  );
}
