import Property1Default1 from "./Property1Default1";

const BitcoinCard = () => {
  return (
    <div className="w-[314px] rounded-xl [backdrop-filter:blur(26px)] flex flex-col items-center justify-start relative text-left text-base text-lightgray font-body-md-regular">
      <img
        className="w-[103.3px] absolute !m-[0] top-[10.9px] left-[2.5px] h-[103.3px] overflow-hidden shrink-0 object-contain z-[0]"
        alt=""
        src="/106@2x.png"
      />
      <img
        className="w-[108.3px] absolute !m-[0] top-[272.3px] left-[206.3px] h-[108.3px] overflow-hidden shrink-0 object-contain z-[1]"
        alt=""
        src="/105@2x.png"
      />
      <div className="w-[314px] rounded-xl bg-gray1-500 [backdrop-filter:blur(26px)] box-border flex flex-col items-center justify-start pt-[184px] px-2 pb-10 relative gap-[24px_0px] z-[2] border-[3px] border-solid border-gold-400">
        <div className="w-[298px] flex flex-col items-center justify-center py-0 px-6 box-border gap-[12px_0px] z-[0]">
          <b className="self-stretch relative text-5xl tracking-[0.39px] text-white">
            Bitcoin
          </b>
          <div className="self-stretch flex flex-row items-center justify-center gap-[0px_8px]">
            <div className="flex-1 relative leading-[140%] font-semibold">
              Symbol
            </div>
            <div className="flex-1 relative leading-[140%]">BTC</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[0px_8px]">
            <div className="flex-1 relative leading-[140%] font-semibold">
              Decimals
            </div>
            <div className="flex-1 relative leading-[140%]">18</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[0px_8px]">
            <div className="flex-1 relative leading-[140%] font-semibold">
              Market Cap
            </div>
            <div className="flex-1 relative leading-[140%]">$100000</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[0px_8px]">
            <div className="flex-1 relative leading-[140%] font-semibold">
              Chain
            </div>
            <div className="flex-1 relative leading-[140%]">Bitcoin</div>
          </div>
        </div>
        <img
          className="w-[111px] absolute !m-[0] top-[40.1px] left-[calc(50%_-_56px)] h-[111px] object-cover z-[1]"
          alt=""
          src="/4@2x.png"
        />
        <Property1Default1 text="Details" />
      </div>
    </div>
  );
};

export default BitcoinCard;
