const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

interface TipPercentageFormProps {
  setTip: React.Dispatch<React.SetStateAction<number>>,
  tip:number
}

export const TipPercentageForm = ({ setTip,tip }: TipPercentageFormProps) => {
  return (
    <div>
      <h3 className="font-black text-3xl">Propina:</h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div className="flex gap-2" key={tipOption.id}>
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input checked={tipOption.value === tip} id={tipOption.id} type="radio" name="tipOption" value={tipOption.value} onChange={e=>setTip(+e.target.value)}/>
          </div>
        ))}
      </form>
    </div>
  );
};
