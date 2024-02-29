import { useMemo } from "react";

const TypeDefaultStyleGraySoci = ({
  email,
  typeDefaultStyleGraySociBorderRadius,
}) => {
  const typeDefaultStyleGraySociStyle = useMemo(() => {
    return {
      borderRadius: typeDefaultStyleGraySociBorderRadius,
    };
  }, [typeDefaultStyleGraySociBorderRadius]);

  return (
    <div
      className="rounded-[31px] flex flex-row items-center justify-center self-stretch flex-1"
      style={typeDefaultStyleGraySociStyle}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
        alt=""
        src={email}
      />
    </div>
  );
};

export default TypeDefaultStyleGraySoci;
