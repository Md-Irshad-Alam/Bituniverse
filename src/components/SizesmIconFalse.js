import { useMemo } from "react";

const SizesmIconFalse = ({
  text,
  sizesmIconFalseBackgroundColor,
  sizesmIconFalseBorder,
  sizesmIconFalseFlex,
  textFontWeight,
  textColor,
}) => {
  const sizesmIconFalseStyle = useMemo(() => {
    return {
      backgroundColor: sizesmIconFalseBackgroundColor,
      border: sizesmIconFalseBorder,
      flex: sizesmIconFalseFlex,
    };
  }, [
    sizesmIconFalseBackgroundColor,
    sizesmIconFalseBorder,
    sizesmIconFalseFlex,
  ]);

  const textStyle = useMemo(() => {
    return {
      fontWeight: textFontWeight,
      color: textColor,
    };
  }, [textFontWeight, textColor]);

  return (
    <div
      className="rounded-lg bg-brand-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2 px-3.5 text-left text-sm text-white font-body-md-regular border-[1px] border-solid border-brand-600"
      style={sizesmIconFalseStyle}
    >
      <div className="relative leading-[20px] font-semibold" style={textStyle}>
        {text}
      </div>
    </div>
  );
};

export default SizesmIconFalse;
