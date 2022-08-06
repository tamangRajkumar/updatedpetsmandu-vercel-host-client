import React from "react";

const BackgroundGray = ({
  dashboardTrue,
  isNavMobileViewDropdown,
  setIsMobileViewDropdown,
}) => {
  // console.log(dashboardTrue)
  return (
    <>
      {/* Background gray  */}

      <button
        onClick={() => isNavMobileViewDropdown && setIsMobileViewDropdown(false)}
        style={
          dashboardTrue
            ? {
                position: "fixed",
                padding: "0",
                margin: "0",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }
            : {
                position: "absolute",
                padding: "0",
                margin: "0",
                top: "0",
                left: "0",
                width: "100%",
                height: "1000%",
              }
        }
        className="cursor-default z-30 bg-gray-500 opacity-70  top-4 "
      ></button>
    </>
  );
};

export default BackgroundGray;
