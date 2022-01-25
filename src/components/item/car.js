import React from "react";

export const CarItem = (props) => {
  const { car, className } = props
  return (
    <div className="rounded-xl mg:rounded-xl lg:rounded-2xl xl:rounded-4xl p-2 bg-app-black-800 mx-10">
      <img src={car.img} alt="car" className="rounded-t-xl w-full" />
      <div className="flex flex-col gap-2">
        <p className="text-2xl p-2">{car.name}</p>
        <p className="">{car.type}</p>
        <div className="text-white gap-1 text-sm pb-8 p-2">
          <p className="flex gap-2"><p className="text-gray-700">Detail 1</p>{car.detail1}</p>
          <p className="flex gap-2"><p className="text-gray-700">Detail 2</p>{car.detail2}</p>
          <p className="flex gap-2"><p className="text-gray-700">Detail 3</p>{car.detail3}</p>
        </div>
      </div>
    </div>
  )
}