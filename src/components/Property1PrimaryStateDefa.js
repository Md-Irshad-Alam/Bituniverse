import { useMemo } from "react";

const Property1PrimaryStateDefa = ({
  ouvrirMonCompte,
  chevronRightFilled,
  showChevronRightFilledIcon,
  property1PrimaryStateDefaBackgroundColor,
  rectangleDivBackgroundColor,
  rectangleDivWidth,
  rectangleDivLeft,
  rectangleDivRight,
  ouvrirMonCompteFontFamily,
  ouvrirMonCompteColor,
  ouvrirMonCompteFontWeight,
}) => {
  const property1PrimaryStateDefaStyle = useMemo(() => {
    return {
      backgroundColor: property1PrimaryStateDefaBackgroundColor,
    };
  }, [property1PrimaryStateDefaBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
      width: rectangleDivWidth,
      left: rectangleDivLeft,
      right: rectangleDivRight,
    };
  }, [
    rectangleDivBackgroundColor,
    rectangleDivWidth,
    rectangleDivLeft,
    rectangleDivRight,
  ]);

  const ouvrirMonCompteStyle = useMemo(() => {
    return {
      fontFamily: ouvrirMonCompteFontFamily,
      color: ouvrirMonCompteColor,
      fontWeight: ouvrirMonCompteFontWeight,
    };
  }, [
    ouvrirMonCompteFontFamily,
    ouvrirMonCompteColor,
    ouvrirMonCompteFontWeight,
  ]);

  return (
    <div
      className="rounded-2xl bg-white overflow-hidden flex flex-row items-start justify-start pt-[15px] pb-[16.5px] pr-[24.199996948242188px] pl-6 relative gap-[0px_10.55px] text-left text-mini text-darkslategray font-outfit"
      style={property1PrimaryStateDefaStyle}
    >
      <div
        className="w-[100.1%] absolute !m-[0] top-[0px] right-[100.49%] left-[-100.59%] bg-darkslategray h-[49px] z-[0]"
        style={rectangleDivStyle}
      />
      <div
        className="relative leading-[16.5px] z-[1]"
        style={ouvrirMonCompteStyle}
      >
        {ouvrirMonCompte}
      </div>
      <div className="w-[13px] relative leading-[16.5px] font-segoe-ui text-gray1-100 hidden z-[2]">
        →
      </div>
      {showChevronRightFilledIcon && (
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0 z-[3]"
          alt=""
          src={chevronRightFilled}
        />
      )}
    </div>
  );
};

export default Property1PrimaryStateDefa;
