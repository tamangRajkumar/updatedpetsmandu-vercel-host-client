import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cards, homeRoute }) => {
  return Array(cards)
    .fill(0)
    .map((CardSkeleton, i) => (
      <>
        <div className= {homeRoute?"mt-12 md:mt-20 lg:mt-20:mt-12 md":"-mt-7 "} key={i}>
          <div className="flex justify-between items-center ">
            <div>
              <h1 className="font-bold text-lg ml-20 md:font-bold md:text-xl md:ml-24 lg:font-bold lg:text-4xl lg:ml-36 ">
                <Skeleton />
              </h1>
            </div>
            <div className="flex space-x-2 absolute right-20 md:right-24 lg:right-32 justify-around items-center  cursor-pointer">
              <div>
                {/* <p className="">Prev</p> */}
                <Skeleton className="h-10 w-10 text-gray-500 hover:text-gray-700 transform hover:scale-105" />
              </div>
              <div>
                {/* <p>Next</p> */}
                <Skeleton className="h-10 w-10 m text-gray-500 hover:text-gray-700 transform hover:scale-105 " />
              </div>
            </div>
          </div>

          {/* Mapping data in slider */}
          <div className="ml-10 mr-10 mt-5  bg-contain ">
            <>
              <div className="mx-3 md:mx-3 lg:mx-5 mb-8 pt-2 pb-5  shadow-md rounded-xl">
                <div className="cursor-pointer h-40 md:h-40 lg:h-48   ">
                  <Skeleton className=" object-cover h-[100%] w-[100%] rounded-t-lg " />
                </div>
                <div>
                  <Skeleton className="text-center mt-2 px-3 " />
                </div>

                {/* View Post Button */}
                {/* <div className=" text-center  cursor-pointer w-32  m-auto mt-2">
                  {" "}
                  <Skeleton className="border border-blue-300 bg-gray-400 rounded-lg  py-1  transform  hover:shadow-xl hover:bg-gray-300  " />
                </div> */}
              </div>
            </>
          </div>
        </div>
      </>
    ));
};

export default CardSkeleton;
