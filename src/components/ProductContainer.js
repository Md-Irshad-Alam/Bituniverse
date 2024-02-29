import ProductSection from "./ProductSection";
import KeyFeatures from "./KeyFeatures";

const ProductContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[60px] px-0 gap-[60px_0px] text-center text-37xl text-white font-kanit">
      <ProductSection itemCategory=" Products" />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-16 gap-[60px_48px] text-xl font-body-md-regular">
        <KeyFeatures
          prop="/106@2x.png"
          heading="Bita Marketplace"
          prop1="/4@2x.png"
        />
        <KeyFeatures prop="/106@2x.png" heading="Bitadex" prop1="/4@2x.png" />
        <KeyFeatures
          prop="/106@2x.png"
          heading="Bitabridge"
          prop1="/4@2x.png"
        />
        <KeyFeatures prop="/106@2x.png" heading="Bitapad" prop1="/4@2x.png" />
        <KeyFeatures prop="/106@2x.png" heading="BitaLend" prop1="/4@2x.png" />
      </div>
    </div>
  );
};

export default ProductContainer;
