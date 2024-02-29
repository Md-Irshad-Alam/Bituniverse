import { useMemo } from "react";

const RoadmapCard = ({
  heading = "NakaMarketplace Launch",
  subheading = "(Design and Development)",
  body = "Initiating the creation of the BRC20 NFT marketplace. UI/UX design/Development and testing.",
  number = "01",
  phase = "PHASE-1",
  titleWidth,
  titlePosition,
  titleFontSize,
  titleLineHeight,
  titleFontWeight,
  titleFontFamily,
  titleColor,
  titleTextAlign,
  titleDisplay,
  titleMargin,
  frameDivPadding,
  frameDivWidth,
  frameDivDisplay,
  frameDivFlexDirection,
  descriptionColor,
  descriptionFlex,
  descriptionPosition,
  descriptionFontSize,
  descriptionLineHeight,
  descriptionFontFamily,
  descriptionTextAlign,
  descriptionDisplay,
  descriptionMargin,
  frameDivWidth1,
  frameDivPosition,
  frameDivMargin,
  frameDivTop,
  frameDivLeft,
  frameDivHeight,
  frameDivOverflow,
  frameDivFontSize,
  frameDivLineHeight,
  frameDivFontWeight,
  frameDivFontFamily,
  frameDivColor,
  frameDivTextAlign,
  frameDivDisplay1,
  frameDivPosition1,
  frameDivTop1,
  frameDivLeft1,
  frameDivWidth2,
  frameDivHeight1,
  frameDivOverflow1,
  frameDivDisplay2,
  frameDivFlexDirection1,
  bLeft,
  bPosition,
  bTop,
  bFontSize,
  bFontFamily,
  bColor,
  bWebkitTextStroke,
  bFlex,
  bLineHeight,
  bFontWeight,
  frameDivTop2,
  frameDivLeft2,
  frameDivWidth3,
  frameDivHeight2,
  frameDivMargin1,
  frameDivPosition2,
  frameDivOverflow2,
  rectangleIconWidth,
  rectangleIconHeight,
  rectangleIconOverflow,
  rectangleIconPosition,
  rectangleIconTop,
  rectangleIconLeft,
  rectangleIconTop1,
  rectangleIconLeft1,
  rectangleIconWidth1,
  rectangleIconHeight1,
  rectangleIconFontSize,
  rectangleIconDisplay,
  rectangleIconFontFamily,
  rectangleIconColor,
  rectangleIconTextAlign,
  rectangleIconWebkitTextStroke,
  rectangleIconFontWeight,
  rectangleIconPosition1,
  rectangleIconMargin,
  pHASE1Top,
  pHASE1Left,
  pHASE1FontSize,
  pHASE1Display,
  pHASE1FontFamily,
  pHASE1Color,
  pHASE1TextAlign,
  pHASE1Width,
  pHASE1Height,
  pHASE1Overflow,
  pHASE1FontWeight,
  pHASE1Margin,
}) => {
  const titleStyle = useMemo(() => {
    return {
      width: titleWidth,
      position: titlePosition,
      fontSize: titleFontSize,
      lineHeight: titleLineHeight,
      fontWeight: titleFontWeight,
      fontFamily: titleFontFamily,
      color: titleColor,
      textAlign: titleTextAlign,
      display: titleDisplay,
      margin: titleMargin,
    };
  }, [
    titleWidth,
    titlePosition,
    titleFontSize,
    titleLineHeight,
    titleFontWeight,
    titleFontFamily,
    titleColor,
    titleTextAlign,
    titleDisplay,
    titleMargin,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
      width: frameDivWidth,
      display: frameDivDisplay,
      flexDirection: frameDivFlexDirection,
    };
  }, [frameDivPadding, frameDivWidth, frameDivDisplay, frameDivFlexDirection]);

  const descriptionStyle = useMemo(() => {
    return {
      color: descriptionColor,
      flex: descriptionFlex,
      position: descriptionPosition,
      fontSize: descriptionFontSize,
      lineHeight: descriptionLineHeight,
      fontFamily: descriptionFontFamily,
      textAlign: descriptionTextAlign,
      display: descriptionDisplay,
      margin: descriptionMargin,
    };
  }, [
    descriptionColor,
    descriptionFlex,
    descriptionPosition,
    descriptionFontSize,
    descriptionLineHeight,
    descriptionFontFamily,
    descriptionTextAlign,
    descriptionDisplay,
    descriptionMargin,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: frameDivWidth1,
      position: frameDivPosition,
      margin: frameDivMargin,
      top: frameDivTop,
      left: frameDivLeft,
      height: frameDivHeight,
      overflow: frameDivOverflow,
      fontSize: frameDivFontSize,
      lineHeight: frameDivLineHeight,
      fontWeight: frameDivFontWeight,
      fontFamily: frameDivFontFamily,
      color: frameDivColor,
      textAlign: frameDivTextAlign,
      display: frameDivDisplay1,
    };
  }, [
    frameDivWidth1,
    frameDivPosition,
    frameDivMargin,
    frameDivTop,
    frameDivLeft,
    frameDivHeight,
    frameDivOverflow,
    frameDivFontSize,
    frameDivLineHeight,
    frameDivFontWeight,
    frameDivFontFamily,
    frameDivColor,
    frameDivTextAlign,
    frameDivDisplay1,
  ]);

  const frameDiv2Style = useMemo(() => {
    return {
      position: frameDivPosition1,
      top: frameDivTop1,
      left: frameDivLeft1,
      width: frameDivWidth2,
      height: frameDivHeight1,
      overflow: frameDivOverflow1,
      display: frameDivDisplay2,
      flexDirection: frameDivFlexDirection1,
    };
  }, [
    frameDivPosition1,
    frameDivTop1,
    frameDivLeft1,
    frameDivWidth2,
    frameDivHeight1,
    frameDivOverflow1,
    frameDivDisplay2,
    frameDivFlexDirection1,
  ]);

  const bStyle = useMemo(() => {
    return {
      left: bLeft,
      position: bPosition,
      top: bTop,
      fontSize: bFontSize,
      fontFamily: bFontFamily,
      color: bColor,
      webkitTextStroke: bWebkitTextStroke,
      flex: bFlex,
      lineHeight: bLineHeight,
      fontWeight: bFontWeight,
    };
  }, [
    bLeft,
    bPosition,
    bTop,
    bFontSize,
    bFontFamily,
    bColor,
    bWebkitTextStroke,
    bFlex,
    bLineHeight,
    bFontWeight,
  ]);

  const frameDiv3Style = useMemo(() => {
    return {
      top: frameDivTop2,
      left: frameDivLeft2,
      width: frameDivWidth3,
      height: frameDivHeight2,
      margin: frameDivMargin1,
      position: frameDivPosition2,
      overflow: frameDivOverflow2,
    };
  }, [
    frameDivTop2,
    frameDivLeft2,
    frameDivWidth3,
    frameDivHeight2,
    frameDivMargin1,
    frameDivPosition2,
    frameDivOverflow2,
  ]);

  const rectangleIconStyle = useMemo(() => {
    return {
      width: rectangleIconWidth,
      height: rectangleIconHeight,
      overflow: rectangleIconOverflow,
      position: rectangleIconPosition,
      top: rectangleIconTop,
      left: rectangleIconLeft,
    };
  }, [
    rectangleIconWidth,
    rectangleIconHeight,
    rectangleIconOverflow,
    rectangleIconPosition,
    rectangleIconTop,
    rectangleIconLeft,
  ]);

  const rectangleIcon1Style = useMemo(() => {
    return {
      top: rectangleIconTop1,
      left: rectangleIconLeft1,
      width: rectangleIconWidth1,
      height: rectangleIconHeight1,
      fontSize: rectangleIconFontSize,
      display: rectangleIconDisplay,
      fontFamily: rectangleIconFontFamily,
      color: rectangleIconColor,
      textAlign: rectangleIconTextAlign,
      webkitTextStroke: rectangleIconWebkitTextStroke,
      fontWeight: rectangleIconFontWeight,
      position: rectangleIconPosition1,
      margin: rectangleIconMargin,
    };
  }, [
    rectangleIconTop1,
    rectangleIconLeft1,
    rectangleIconWidth1,
    rectangleIconHeight1,
    rectangleIconFontSize,
    rectangleIconDisplay,
    rectangleIconFontFamily,
    rectangleIconColor,
    rectangleIconTextAlign,
    rectangleIconWebkitTextStroke,
    rectangleIconFontWeight,
    rectangleIconPosition1,
    rectangleIconMargin,
  ]);

  const pHASE1Style = useMemo(() => {
    return {
      top: pHASE1Top,
      left: pHASE1Left,
      fontSize: pHASE1FontSize,
      display: pHASE1Display,
      fontFamily: pHASE1FontFamily,
      color: pHASE1Color,
      textAlign: pHASE1TextAlign,
      width: pHASE1Width,
      height: pHASE1Height,
      overflow: pHASE1Overflow,
      fontWeight: pHASE1FontWeight,
      margin: pHASE1Margin,
    };
  }, [
    pHASE1Top,
    pHASE1Left,
    pHASE1FontSize,
    pHASE1Display,
    pHASE1FontFamily,
    pHASE1Color,
    pHASE1TextAlign,
    pHASE1Width,
    pHASE1Height,
    pHASE1Overflow,
    pHASE1FontWeight,
    pHASE1Margin,
  ]);

  return (
    <div className="h-[360px] flex flex-col items-center justify-start relative text-center text-5xl text-white font-body-md-regular">
      <div className="flex-1 rounded-xl bg-gray1-400 overflow-hidden flex flex-col items-center justify-start p-6 z-[0]">
        <div className="flex-1 rounded-2xl bg-gray1-600 shadow-[2px_2px_32px_rgba(255,_255,_255,_0.15)] flex flex-col items-center justify-start py-9 px-4 gap-[24px_0px] border-[2px] border-solid border-gold-400">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px_0px]">
            <b className="w-[319px] relative leading-[32px] inline-block">
              {heading}
            </b>
            <div
              className="w-[319px] relative text-xl leading-[32px] font-semibold text-gray1-800 inline-block"
              style={titleStyle}
            >
              {subheading}
            </div>
          </div>
          <div
            className="w-[319px] flex flex-row items-center justify-start text-base text-gainsboro"
            style={frameDivStyle}
          >
            <div
              className="flex-1 relative leading-[24px]"
              style={descriptionStyle}
            >
              {body}
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[351px] absolute !m-[0] top-[-129px] left-[24px] h-[170px] overflow-hidden shrink-0 z-[1] text-181xl text-[transparent] font-kanit"
        style={frameDiv1Style}
      >
        <div
          className="absolute top-[0px] left-[0px] w-[351px] h-[129px] overflow-hidden"
          style={frameDiv2Style}
        >
          <b
            className="absolute top-[23px] left-[calc(50%_-_103.5px)] [-webkit-text-stroke:7px_rgba(255,_255,_255,_0.4)]"
            style={bStyle}
          >
            {number}
          </b>
        </div>
        <div
          className="absolute top-[109px] left-[calc(50%_-_97.5px)] w-[196px] h-[61px] overflow-hidden text-xl text-gray1-200"
          style={frameDiv3Style}
        >
          <img
            className="absolute top-[0px] left-[0px] w-[196px] h-5"
            alt=""
            src="/rectangle-2753.svg"
            style={rectangleIconStyle}
          />
          <img
            className="absolute top-[0px] left-[13px] w-[170px] h-[61px]"
            alt=""
            src="/rectangle-2752.svg"
            style={rectangleIcon1Style}
          />
          <b className="absolute top-[16px] left-[58px]" style={pHASE1Style}>
            {phase}
          </b>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
