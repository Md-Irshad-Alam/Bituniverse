import { useMemo } from "react";

const TypeOpenIcon = ({
  typeOpenIconTypeOpen,
  typeOpenIconWidth,
  typeOpenIconHeight,
  typeOpenIconPosition,
  typeOpenIconMargin,
  typeOpenIconTop,
  typeOpenIconRight,
  typeOpenIconOpacity,
}) => {
  const typeOpenIconStyle = useMemo(() => {
    return {
      width: typeOpenIconWidth,
      height: typeOpenIconHeight,
      position: typeOpenIconPosition,
      margin: typeOpenIconMargin,
      top: typeOpenIconTop,
      right: typeOpenIconRight,
      opacity: typeOpenIconOpacity,
    };
  }, [
    typeOpenIconWidth,
    typeOpenIconHeight,
    typeOpenIconPosition,
    typeOpenIconMargin,
    typeOpenIconTop,
    typeOpenIconRight,
    typeOpenIconOpacity,
  ]);

  return (
    <img
      className="w-8 max-w-full overflow-hidden h-[26px]"
      alt=""
      src={typeOpenIconTypeOpen}
      style={typeOpenIconStyle}
    />
  );
};

export default TypeOpenIcon;
