import { useMemo } from "react";

const Footer = ({
  socialMediaIconUrl,
  platformIconId,
  propBackground,
  propLeft,
}) => {
  const behanceStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const behance1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="w-[80.2px] relative rounded-30xl [background:linear-gradient(134.64deg,_#9c530f,_#cfaf06)] h-[80.2px] overflow-hidden shrink-0 text-left text-9xl-6 text-white font-pp-telegraf"
      style={behanceStyle}
    >
      <div
        className="absolute top-[25.1px] left-[-121.7px]"
        style={behance1Style}
      >
        {socialMediaIconUrl}
      </div>
      <div className="absolute top-[17.2px] left-[17.2px] rounded-[57.29px] w-[45.8px] h-[45.8px] flex flex-row items-center justify-center p-[8.59375px] box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
          alt=""
          src={platformIconId}
        />
      </div>
    </div>
  );
};

export default Footer;
