import ProductContainer from "../components/ProductContainer";
import RoadmapContainer from "../components/RoadmapContainer";
import TokenForm from "../components/TokenForm";
import DeFiOnBitcoinContainer from "../components/DeFiOnBitcoinContainer";
import ContainerSocial from "../components/ContainerSocial";
import ContainerCard from "../components/ContainerCard";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-gray1-700 h-[4943px] overflow-y-auto">
      <div className="absolute top-[979px] left-[-634px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(254,_204,_0,_0.12),_rgba(254,_204,_0,_0.02))] [filter:blur(118.3px)] w-[1571px] h-[1571px]" />
      <div className="absolute top-[2682px] left-[-458px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(254,_204,_0,_0.09),_rgba(254,_204,_0,_0.02))] [filter:blur(118.3px)] w-[1220px] h-[1220px]" />
      <div className="absolute top-[1501px] right-[-506px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(254,_204,_0,_0.15),_rgba(254,_204,_0,_0.03))] [filter:blur(118.3px)] w-[1616px] h-[1616px]" />
      <div className="absolute top-[5619px] left-[637px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(254,_204,_0,_0.12),_rgba(254,_204,_0,_0.02))] [filter:blur(118.3px)] w-[803px] h-[803px]" />
      <div className="absolute w-full top-[935px] right-[0px] left-[0px] flex flex-col items-center justify-start">
        <ProductContainer />
        <RoadmapContainer />
        <TokenForm />
      </div>
      <DeFiOnBitcoinContainer />
      <img
        className="absolute top-[1444px] left-[-357.9px] w-[696.7px] h-[696.7px] overflow-hidden object-contain opacity-[0.7]"
        alt=""
        src="/92@2x.png"
      />
      <img
        className="absolute top-[573.6px] left-[1135.6px] w-[559.8px] h-[559.8px] overflow-hidden object-contain"
        alt=""
        src="/7@2x.png"
      />
      <ContainerSocial />
      <ContainerCard />
    </div>
  );
};

export default LandingPage;
