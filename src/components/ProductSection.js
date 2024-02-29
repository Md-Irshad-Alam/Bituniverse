const ProductSection = ({ itemCategory }) => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-0 px-[120px] gap-[24px_0px] text-center text-37xl text-white font-kanit">
      <div className="flex flex-row items-center justify-start p-2 relative gap-[0px_8px]">
        <div className="relative leading-[60px] font-semibold [transform:_rotate(-0.17deg)] z-[0]">
          <span>Our</span>
          <span className="text-gold-200">{itemCategory}</span>
        </div>
        <img
          className="w-[176.7px] absolute !m-[0] top-[61.7px] right-[-1.2px] h-[21.7px] object-contain z-[1]"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div className="self-stretch relative text-xl leading-[169.43%] font-body-md-regular">
        Pellentesque habitant morbi tristique senectus et netus et Pellentesque
        habitant morbi.
      </div>
    </div>
  );
};

export default ProductSection;
