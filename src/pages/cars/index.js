import React from "react";
import Layout from "../../layout/layout";
import ImgCar from '../../assets/images/cars_header.png'
import ImgMagic from '../../assets/images/magic.png'
import ImgLTEffect from '../../assets/images/lt_effect.png'
import ImgRBEffect from '../../assets/images/br_effect.png'

import "./cars.scss"
import { WalletConnectButton } from "../../components/button/connect";
import { carsList, traitsList } from "./data";
import { CarItem } from "../../components/item/car";

const CarsPage = () => {
  return (<Layout title="cars page">
    <div className="cars-container">
      <div className="header pt-36 md:pt-52 lg:pt-60">
        <div className="relative py-40">
          <p className='font-birosic text-white text-center text-5xl md:text-6xl xl:text-9xl z-50 top-0 absolute left-1/2 -translate-x-1/2'>cars</p>
          <div className=" w-10/12 sm:w-8/12  mx-auto relative z-0">
            <img src={ImgLTEffect} alt="effect" className="effect absolute z-0 -translate-y-1/3 left-0 top-0 -translate-x-1/3 md:w-40 lg:w-52 xl:w-max w-32" />
            <img src={ImgRBEffect} alt="effect" className="effect absolute z-0 bottom-0 right-0 translate-y-3/4 translate-x-1/2 md:w-40 lg:w-52 xl:w-max w-32" />
            <div className=" bg-app-black-700 rounded-4xl flex font-inter sm:flex-row flex-col gap-8 p-4 z-10">
              <div className="bg-app-black-600 rounded-4xl sm:w-1/2 xl:w-1/3">
                <img src={ImgCar} alt="car" className="rounded-t-4xl" />
                <div className="text-white flex flex-col gap-4 px-4 py-12">
                  <p className="font-bold text-3xl">City Cars</p>
                  <p className="flex">Rarity: <p>Common</p></p>
                </div>
              </div>
              <div className="flex flex-col text-white lg:pl-16 xl:pl-32 gap-8 justify-center sm:w-1/2 xl:w-2/3">
                <p className="text-4xl font-bold">City Cars</p>
                <div className="text-gray-400">
                  <div className="flex gap-1">
                    <p>Rarity: </p>
                    <p className="text-white"> Common</p>
                  </div>
                  <div className="flex gap-1">
                    <p>Available: </p>
                    <p className="text-white"> 1,000</p>
                  </div>
                  <div className="flex gap-1">
                    <p>Wearability: </p>
                    <p className="text-white"> 60</p>
                  </div>
                  <div className="flex gap-1">
                    <p>Acceleration: </p>
                    <p className="text-white"> 10</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-lg">Description</p>
                  <p className="text-gray-100 ">he city car is well known for it’s mobility around the city. However, if used properly it can give you great results in underground races.</p>
                </div>
                <WalletConnectButton />
              </div>
            </div>
          </div>
          <p className="mt-20 text-center text-white w-10/12 mx-auto absolute bottom-0 left-1/2  -translate-x-1/2">There’s a total of 12 models in gen-0. each having it’s own rarity level, wich Will determine it’s cometitive stats in game. Remi</p>
        </div>
        <div className="px-4 lg:w-9/12 mx-auto">
          <p className="font-birosic text-5xl lg:text-6xl text-white py-20">Trait</p>
          <img src={ImgMagic} alt="masic" className="transform  sm:-translate-x-10 w-12 sm:w-max " />
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 pb-10 gap-8">
            {traitsList.map((car, idx) => (
              <CarItem car={car} key={idx} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 lg:w-9/12 mx-auto">
        <p className="font-birosic text-5xl lg:text-6xl text-white py-20">Cars</p>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 pb-10 gap-8">
          {carsList.map((car, idx) => (
            <CarItem car={car} key={idx} />
          ))}
        </div>
      </div>
    </div>
  </Layout>)
}

export default CarsPage