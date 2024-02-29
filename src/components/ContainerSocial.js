import TypeDefaultStyleGraySoci from "./TypeDefaultStyleGraySoci";
import Footer from "./Footer";

const ContainerSocial = () => {
  return (
    <div className="absolute top-[4553.9px] left-[0px] bg-gray1-300 w-[1440px] flex flex-col items-center justify-end pt-[132px] px-2 pb-[60px] box-border gap-[8px_0px] text-center text-5xl text-white font-body-md-regular">
      <div className="flex flex-col items-center justify-start gap-[22.46px_0px] z-[0]">
        <img
          className="w-[146px] relative h-[146px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/logo-yellow-1@2x.png"
        />
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row items-center justify-start py-0 px-[14.976537704467773px]">
            <div className="relative tracking-[1.05px] opacity-[0.7]">
              2023 All rights reserved
            </div>
          </div>
        </div>
      </div>
      <div className="w-[651px] absolute !m-[0] top-[-319.9px] left-[-280px] h-[651px] overflow-hidden shrink-0 z-[1]">
        <img
          className="absolute h-[56.01%] w-[72%] top-[22%] right-[14.01%] bottom-[22%] left-[13.99%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/ovals.svg"
        />
        <div className="absolute h-[43.99%] w-[12%] top-[28%] right-[44.01%] bottom-[28%] left-[43.99%]">
          <img
            className="absolute h-[27.27%] w-full top-[0%] right-[0%] bottom-[72.73%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/star-2.svg"
          />
          <img
            className="absolute h-[27.27%] w-full top-[36.38%] right-[0%] bottom-[36.35%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/star-3.svg"
          />
          <img
            className="absolute h-[27.27%] w-full top-[72.73%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/star-4.svg"
          />
        </div>
      </div>
      <div className="!m-[0] absolute top-[-120px] left-[calc(50%_-_585px)] rounded-9xl bg-gray1-600 flex flex-row items-center justify-center py-14 px-[90px] gap-[0px_452px] z-[2] text-left text-25xl font-kanit border-[4px] border-solid border-gold-500">
        <div className="w-[264px] relative font-semibold inline-block shrink-0">
          <span>{`Join our `}</span>
          <span className="text-gold-200">Community</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_17.19px] text-9xl-6 font-pp-telegraf">
          <div className="w-[80.2px] relative rounded-30xl [background:linear-gradient(135deg,_#9c530f,_#cfaf06)] h-[80.2px] overflow-hidden shrink-0">
            <div className="absolute top-[25.1px] left-[-137.5px]">
              Facebook
            </div>
            <div className="absolute top-[17.2px] left-[17.2px] rounded-[57.29px] w-[45.8px] h-[45.8px] flex flex-row items-center justify-center p-[8.59375px] box-border">
              <TypeDefaultStyleGraySoci
                email="/email.svg"
                typeDefaultStyleGraySociBorderRadius="44.4px"
              />
            </div>
          </div>
          <Footer
            socialMediaIconUrl="Behance"
            platformIconId="/social-icon.svg"
          />
          <Footer
            socialMediaIconUrl="Instagram"
            platformIconId="/social-icon.svg"
            propBackground="linear-gradient(135deg, #9c530f, #cfaf06)"
            propLeft="-147.5px"
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerSocial;
