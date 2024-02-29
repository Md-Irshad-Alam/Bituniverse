import { useMemo } from "react";

const PhaseContainer = ({ prop, pHASE1, propLeft }) => {
  const b1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="w-[351px] absolute !m-[0] top-[-129px] left-[24px] h-[170px] overflow-hidden shrink-0 z-[1] text-center text-181xl text-[transparent] font-kanit">
      <div className="absolute top-[0px] left-[0px] w-[351px] h-[129px] overflow-hidden">
        <b
          className="absolute top-[23px] left-[calc(50%_-_120.5px)] [-webkit-text-stroke:7px_rgba(255,_255,_255,_0.4)]"
          style={b1Style}
        >
          {prop}
        </b>
      </div>
      <div className="absolute top-[109px] left-[calc(50%_-_97.5px)] w-[196px] h-[61px] overflow-hidden text-xl text-gray1-200">
        <img
          className="absolute top-[0px] left-[0px] w-[196px] h-5"
          alt=""
          src="/rectangle-2753.svg"
        />
        <img
          className="absolute top-[0px] left-[13px] w-[170px] h-[61px]"
          alt=""
          src="/rectangle-2752.svg"
        />
        <b className="absolute top-[16px] left-[56px]">{pHASE1}</b>
      </div>
    </div>
  );
};

export default PhaseContainer;
