interface Props {
  onChange: (value: string) => void;
  items: any[];
  selector: string;
  label?: string;
  selected?: string;
}

const Selector = (props: Props) => {
  return (
    <div className="flex ">
      <div className="mb-3 w-96">
        <label className="py-2 text-sm text-gray-500 capitalize">
          {props.label ?? ""}
        </label>
        <select
          value={props.selected}
          onChange={(e: any) => props.onChange(e.target.value)}
          className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-amber-400 focus:outline-none"
          aria-label="Default select example"
        >
          <option>{props.label ?? "Select Project"}</option>
          {props.items.map((item, i) => {
            return (
              <option key={i} value={item.id}>
                {item[props.selector]}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Selector;
