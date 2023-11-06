import brownZebra from "../assets/brownZebraPrint.jpg";
const Statscard = ({ title, amount }) => {
  return (
    <>
      <div className=" rounded-2xl  bg-white border-slate-400 border flex justify-between items-center space-x-4   ">
        <div className="w-1/2">
          <img src={brownZebra} className="h-[5rem] rounded-lg " alt="" />
        </div>
        <div className="px-8">
          <p className="text-black text-3xl text-center font-bold">{title}</p>
          <p className="text-black text-3xl text-center font-bold">{amount}</p>
        </div>
      </div>
    </>
  );
};

export default Statscard;
