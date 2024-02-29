import Property1PrimaryStateDefa from "./Property1PrimaryStateDefa";

const ContainerCard = () => {
  return (
    <div className="absolute top-[40px] left-[calc(50%_-_680px)] rounded-2xl bg-darkolivegreen-200 shadow-[0px_2px_19.5px_rgba(219,_184,_0,_0.2)] [backdrop-filter:blur(29px)] box-border w-[1360px] flex flex-row items-center justify-between py-4 px-8 text-left text-base text-gold-300 font-body-md-regular border-[1px] border-solid border-gray1-900">
      <div className="h-14 flex flex-row items-center justify-center gap-[0px_8.51px]">
        <img
          className="w-[55.3px] relative h-[55.3px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/logo-yellow-1@2x.png"
        />
        <div className="flex flex-col items-center justify-center gap-[7.2px_0px]">
          <div className="w-[97px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-3">
            <b className="absolute top-[0px] left-[0px] tracking-[0.16em]">
              BITVERSE
            </b>
          </div>
          <b className="relative text-4xs-7 tracking-[1.17em] text-white">
            FINANCE
          </b>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_32px] text-lg text-black">
        <div className="flex flex-row items-center justify-end gap-[0px_8px]">
          <Property1PrimaryStateDefa
            ouvrirMonCompte="About"
            chevronRightFilled="/chevronrightfilled.svg"
            showChevronRightFilledIcon={false}
            property1PrimaryStateDefaBackgroundColor="unset"
            rectangleDivBackgroundColor="#554800"
            rectangleDivWidth="100.1%"
            rectangleDivLeft="-100.59%"
            rectangleDivRight="100.49%"
            ouvrirMonCompteFontFamily="Inter"
            ouvrirMonCompteColor="#fff"
            ouvrirMonCompteFontWeight="500"
          />
          <Property1PrimaryStateDefa
            ouvrirMonCompte="Our Products"
            chevronRightFilled="/chevronrightfilled.svg"
            showChevronRightFilledIcon={false}
            property1PrimaryStateDefaBackgroundColor="unset"
            rectangleDivBackgroundColor="#554800"
            rectangleDivWidth="100.12%"
            rectangleDivLeft="-100.62%"
            rectangleDivRight="100.49%"
            ouvrirMonCompteFontFamily="Inter"
            ouvrirMonCompteColor="#fff"
            ouvrirMonCompteFontWeight="500"
          />
          <Property1PrimaryStateDefa
            ouvrirMonCompte="Token Utility"
            chevronRightFilled="/chevronrightfilled.svg"
            showChevronRightFilledIcon={false}
            property1PrimaryStateDefaBackgroundColor="unset"
            rectangleDivBackgroundColor="#554800"
            rectangleDivWidth="100.13%"
            rectangleDivLeft="-100.64%"
            rectangleDivRight="100.51%"
            ouvrirMonCompteFontFamily="Inter"
            ouvrirMonCompteColor="#fff"
            ouvrirMonCompteFontWeight="500"
          />
          <Property1PrimaryStateDefa
            ouvrirMonCompte="Roadmap"
            chevronRightFilled="/chevronrightfilled.svg"
            showChevronRightFilledIcon={false}
            property1PrimaryStateDefaBackgroundColor="unset"
            rectangleDivBackgroundColor="#554800"
            rectangleDivWidth="100.15%"
            rectangleDivLeft="-100.61%"
            rectangleDivRight="100.46%"
            ouvrirMonCompteFontFamily="Inter"
            ouvrirMonCompteColor="#fff"
            ouvrirMonCompteFontWeight="500"
          />
        </div>
        <div className="w-[187px] relative h-[55px]">
          <div className="absolute top-[calc(50%_-_27.5px)] left-[calc(50%_-_93.5px)] rounded-3xs bg-gold-100 w-[187px] h-[55px]" />
          <div className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_65.5px)] leading-[16.5px] font-medium">
            Connect Wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
