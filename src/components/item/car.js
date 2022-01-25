import React from "react";

export const CarItem = (props) => {
  const { car, className } = props
  return (
    <div className="p-2 mx-10 rounded-xl mg:rounded-xl lg:rounded-2xl xl:rounded-4xl bg-app-black-800">
      <img src={car.img} alt="car" className="w-full rounded-t-xl mg:rounded-t-xl lg:rounded-t-2xl xl:rounded-t-4xl" />
      <div className="flex flex-col gap-2">
        <p className="px-2 pt-2 text-2xl text-white">{car.name}</p>
        <p className={`px-2 text-gray-500 ${!car.available_traits && "mt-6"}`}>{car.available_traits}</p>
        <div className="gap-1 p-2 pb-4 text-sm text-white">
          <p className="flex gap-2"><p className="text-gray-500">RARITY</p>{car.rarity}</p>
          <p className="flex gap-2"><p className="text-gray-500">RARITY LEVEL</p>{car.rarity_level}</p>
          <p className="flex gap-2"><p className="text-gray-500">AVAILABLE TRAITS</p>{car.available_traits}</p>
        </div>
      </div>
    </div>
  )
}