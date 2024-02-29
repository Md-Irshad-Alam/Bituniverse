const KeyFeatures = ({ prop, heading, prop1 }) => {
  return (
    <div className="w-[314px] rounded-xl [backdrop-filter:blur(26px)] flex flex-col items-center justify-start relative text-center text-xl text-white font-body-md-regular">
      <img
        className="w-[103.3px] absolute !m-[0] top-[10.9px] left-[2.5px] h-[103.3px] overflow-hidden shrink-0 object-contain z-[0]"
        alt=""
        src={prop}
      />
      <img
        className="w-[108.3px] absolute !m-[0] top-[272.3px] left-[206.3px] h-[108.3px] overflow-hidden shrink-0 object-contain z-[1]"
        alt=""
        src="/105@2x.png"
      />
      <div className="w-[314px] rounded-xl bg-gray1-500 [backdrop-filter:blur(26px)] box-border flex flex-col items-center justify-start pt-[184px] px-2 pb-14 relative gap-[8px_0px] z-[2] border-[3px] border-solid border-gold-400">
        <div className="w-[298px] flex flex-col items-center justify-center py-0 px-6 box-border gap-[12px_0px] z-[0]">
          <b className="self-stretch relative tracking-[0.39px]">{heading}</b>
          <img className="w-[169px] relative max-h-full" alt="" src="/5.svg" />
          <div className="self-stretch relative text-base leading-[140%] text-lightgray">{`Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada `}</div>
        </div>
        <img
          className="w-[159px] absolute !m-[0] top-[16px] left-[calc(50%_-_80px)] h-[159px] object-cover z-[1]"
          alt=""
          src={prop1}
        />
      </div>
    </div>
  );
};

export default KeyFeatures;
