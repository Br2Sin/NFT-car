import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Layout from "../../layout/layout";
import ImgRoadMap from '../../assets/images/roadmap.png'
import ImgRoadVerticalMap from '../../assets/images/roadmap_vertical.png'
import ImgGraffiti from '../../assets/images/graffiti.png'
import ImgCool from '../../assets/images/cool.png'
import ImgCar from '../../assets/images/car.png'
import "./homepage.scss"
import { SectionTitle } from "../../components/label";
import { carList } from "./data";
import { CarItem } from "../../components/item/car";
import CarouselControl from "../../components/button/carousel-control";

const HomePage = (props) => {
  const [mintCount, setMintCount] = useState(0)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="absolute w-full left-0 right-0 sm:block hidden">
        <div className="flex justify-between">

          <CarouselControl prev={true} className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
          <CarouselControl onClick={() => next()} />
        </div>
        {/* <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
      </div>
    );
  };

  return (
    <Layout>
      <div className="home-container font-inter ">
        <div className="mint-container text-white flex justify-center pt-36 md:pt-52 lg:pt-60">
          <div className="flex clear-left w-10/12 flex-col lg:flex-row" >
            <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-20 flex flex-col gap-12">
              <div className="flex flex-col">
                <SectionTitle>
                  <p className="text-white flex sm:flex-row flex-col">
                    <p className="text-app-purple flex items-end">
                      <p className="text-6xl xl:text-8xl -mb-1">U</p>
                      nder</p>
                    <p className="text-white flex items-end">
                      <p className="text-6xl xl:text-8xl -mb-1">G</p>
                      round</p>
                  </p>
                </SectionTitle>
                <SectionTitle>
                  <p className="flex items-end">
                    <p className="text-6xl xl:text-8xl -mb-1">R</p>acing
                  </p>
                </SectionTitle>
              </div>
              <p className="text-gray-400">
                Underground racing is a Brand new community driven Racing p2e game coming to avalanche where you can run underground
                races on different maps and get rewards on every won race.
              </p>
              <button className="bg-app-purple w-max mx-auto rounded-full capitalize px-4 py-2">start collection NFT</button>
              <div className="grid grid-cols-3 lg:w-2/3 mx-auto">
                <p className="text-3xl font-bold">0</p>
                <p className="text-3xl font-bold">0</p>
                <p className="text-3xl font-bold">10.000+</p>
                <p className="text-gray-400">Minted</p>
                <p className="text-gray-400">Owner</p>
                <p className="text-gray-400">Supply</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex gap-2 items-center">
                  <button className="text-3xl" onClick={() => setMintCount(mintCount > 0 ? mintCount - 1 : 0)}>-</button>
                  <div className="w-28 text-center text-xl py-1 bg-app-primary rounded-full">{mintCount}</div>
                  <button className="text-3xl" onClick={() => setMintCount(mintCount + 1)}>+</button>
                </div>
                <button className="text-xl">MINT</button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={ImgCar} alt="car" />
            </div>
          </div>
        </div>

        {/* models */}
        <div className="model-container flex flex-col bg-black text-white pt-33">
          <div className="flex justify-center items-center w-full flex-col gap-16">
            <div className="mx-auto">
              <SectionTitle className="flex text-center">GEN-O <p className="text-app-purple">Cars</p></SectionTitle>
            </div>
            <p className="text-center w-3/4 md:w-2/3 text-xl md:text-2xl mx-auto">There’s a total of 12 models in gen-0. each having it’s own rarity level, wich Will determine it’s cometitive stats in game. Remind that there’s a huge randomness factor in every race and having rarest cars won’t assure at all that you win every race, but Will increase a lot your chances of winning them.</p>
          </div>
          <div className="flex flex-col gap-16  mt-33">
            <p className="text-center text-4xl font-bold font-montserrat">
              The available models in <br />
              <span className="font-birosic">gen-o</span> are:
            </p>
            <p className="text-center w-3/4 md:w-2/3 text-xl md:text-2xl mx-auto">There’s a total of 12 models in gen-0. each having it’s own rarity level, wich Will determine it’s cometitive stats in game. Remind that there’s a huge randomness factor in every race and having rarest cars won’t assure at all that you win every race, but Will increase a lot your chances of winning them.</p>
          </div>
          <img src={ImgCool} alt="cool" className="w-32 ml-8 sm:ml-12 lg:ml-32" />
          <div className="flex flex-col gap-32 items-center justify-center pb-60">
            <div className=" w-10/12 sm:px-10 relative">
              <Carousel
                arrows={false} customButtonGroup={<ButtonGroup />}
                responsive={responsive}
                className="gap-4">
                {carList.map((car, idx) => (
                  <CarItem car={car} key={idx} />
                ))}
              </Carousel>
            </div>
            <div className=" w-10/12 sm:px-10 relative">
              <Carousel
                arrows={false} customButtonGroup={<ButtonGroup />}
                responsive={responsive}
                className="gap-4">
                {carList.map((car, idx) => (
                  <CarItem car={car} key={idx} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        {/* roadmap */}
        <div className="roadmap-container flex items-center flex-col xl:pb-82 pb:12 md:pb-28 pt-8 md:pt-28 xl:pt-45">
          <div className="relative">
            <SectionTitle>RoadMap</SectionTitle>
            <img src={ImgGraffiti} alt="graffiti" className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-2/3 w-12 sm:w-20 md:w-32" />
          </div>
          <img src={ImgRoadMap} alt="roadmap" className="w-10/12 mt-20 sm:block hidden" />
          <img src={ImgRoadVerticalMap} alt="vertical roadmap" className="sm:hidden mt-12"/>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage