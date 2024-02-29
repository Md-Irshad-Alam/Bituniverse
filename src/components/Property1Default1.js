const Property1Default1 = ({ text = "Tokenomics" }) => {
  return (
    <div className="rounded-xl h-[55px] flex flex-col items-start justify-start text-center text-base text-gray1-200 font-body-md-regular">
      <div className="rounded-81xl [background:linear-gradient(94.2deg,_#fecc00,_#fea800)] shadow-[-2px_-2px_20px_rgba(254,_204,_0,_0),_2px_2px_20px_rgba(254,_204,_0,_0)] h-[55px] flex flex-col items-center justify-center p-1 box-border">
        <div className="rounded-81xl [background:linear-gradient(94.62deg,_#fecc00,_#fea800)] flex flex-row items-center justify-center py-2.5 pr-5 pl-6 gap-[0px_8px] border-[2px] border-solid border-white">
          <b className="relative leading-[169.43%]">{text}</b>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/arrow--chevron-right-md.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Default1;
