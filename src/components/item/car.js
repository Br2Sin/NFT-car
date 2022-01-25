import React from "react";

export const CarItem = (props) => {
  const { car, className } = props
  return (
    <div className="rounded-xl mg:rounded-xl lg:rounded-2xl xl:rounded-4xl p-2 bg-app-black-800 mx-10">
      <img src={car.img} alt="car" className="rounded-t-xl mg:rounded-t-xl lg:rounded-t-2xl xl:rounded-t-4xl w-full" />
      <div className="flex flex-col gap-2">
        <p className="text-2xl pt-2 px-2 text-white">{car.name}</p>
        <p className={`px-2 text-gray-500 ${!car.type && "mt-6"}`}>{car.type}</p>
        <div className="text-white gap-1 text-sm pb-4 p-2">
          <p className="flex gap-2"><p className="text-gray-500">Detail 1</p>{car.detail1}</p>
          <p className="flex gap-2"><p className="text-gray-500">Detail 2</p>{car.detail2}</p>
          <p className="flex gap-2"><p className="text-gray-500">Detail 3</p>{car.detail3}</p>
        </div>
      </div>
    </div>
  )
}