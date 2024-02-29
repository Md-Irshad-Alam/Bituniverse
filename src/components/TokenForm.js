import ProductSection from "./ProductSection";
import BitcoinCard from "./BitcoinCard";
import SizesmIconFalse from "./SizesmIconFalse";

const TokenForm = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[60px] px-0 gap-[60px_0px] text-left text-base text-lightgray font-body-md-regular">
      <ProductSection itemCategory=" Tokens" />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-16 gap-[60px_48px]">
        <BitcoinCard />
        <BitcoinCard />
        <BitcoinCard />
        <BitcoinCard />
        <BitcoinCard />
        <BitcoinCard />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center p-6 gap-[0px_100px] text-sm text-white">
        <div className="w-[100px] rounded-lg flex flex-row items-center justify-center">
          <SizesmIconFalse
            text="Previous"
            sizesmIconFalseBackgroundColor="#fff"
            sizesmIconFalseBorder="1px solid #d0d5dd"
            sizesmIconFalseFlex="1"
            textFontWeight="500"
            textColor="#344154"
          />
        </div>
        <div className="relative leading-[20px] font-medium">Page 1 of 10</div>
        <div className="w-[100px] rounded-lg flex flex-row items-center justify-center">
          <SizesmIconFalse
            text="Next"
            sizesmIconFalseBackgroundColor="#fff"
            sizesmIconFalseBorder="1px solid #d0d5dd"
            sizesmIconFalseFlex="1"
            textFontWeight="500"
            textColor="#344154"
          />
        </div>
      </div>
    </div>
  );
};

export default TokenForm;
