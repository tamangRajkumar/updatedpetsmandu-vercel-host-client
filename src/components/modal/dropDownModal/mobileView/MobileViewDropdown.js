import React from "react";
import BackgroundGray from "../../userDashboard/backgroundGray";
import { NavLink, useHistory } from "react-router-dom";
import { navLinks } from "../../../../constants";
import { XIcon } from "@heroicons/react/solid";
import { logOutUser } from "../../../../redux/actions/authActions";
import { userProfileUpdate } from "../../../../redux/actions/userProfileUpdate";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
const MobileViewDropdown = ({
  isMobileViewDropdown,
  setIsMobileViewDropdown,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector(
    (state) => state.authUser.isAuthenticated
  );

  const userLogOut = {
    user: {
      _id: "",
    },
  };

  const userProfileData = {
    url: "",
  };
  const handleLogOut = () => {
    window.localStorage.removeItem("authUser");
    // console.log("userlog out called");
    window.localStorage.removeItem("userProfileData");
    window.localStorage.removeItem("favoritePostsList");
    // window.localStorage.removeItem("userProfileData");
    dispatch(logOutUser(userLogOut));
    dispatch(userProfileUpdate(userProfileData));

    toast.success("Logged out successfully");
    history.push("/login");
  };

  return (
    <>
      <div>
        <BackgroundGray
          isNavMobileViewDropdown={true}
          setIsMobileViewDropdown={setIsMobileViewDropdown}
        />
        <div
          className={
            !isMobileViewDropdown
              ? "fixed justify-center items-center w-[40vh] h-[80vh]  bg-gray-600 top-3 z-50 rounded-lg right-0"
              : "fixed justify-center items-center w-[40vh] h-[100vh] sm:w-[60vh] sm:h-[100vh] right-0 bg-gray-600 top-0 z-50 rounded-lg transition ease-in-out duration-1000 delay-300  "
          }
        >
          <p className="text-center"></p>
          <div className="ml-5 mt-5">
            <button
              onClick={() => setIsMobileViewDropdown(false)}
              className="focus:outline-none"
            >
              <XIcon className="h-8 w-8 text-gray-400 bg-gray-300 shadow-md p-1 rounded-full " />
            </button>
          </div>
          {/* All Categories NavLinks */}
          <div className=" flex  justify-center items-center   pt-5 pb-10 ">
            <div>
              {isAuthenticated ? (
                <NavLink
                  to={"/user/dashboard"}
                  className="flex w-[40vh] justify-center items-center rounded-xl py-2 px-3 my-1 font-medium active:bg-black text-base shadow-sm  hover:text-white hover:bg-[#003865] hover:scale-110 hover:shadow-xl duration-150"
                  onClick={() => {
                    setIsMobileViewDropdown(false);
                  }}
                >
                  Dashboard
                </NavLink>
              ) : (
                <NavLink
                  to={"/"}
                  className="flex w-[40vh] justify-center items-center rounded-xl py-2 px-3 my-1 font-medium active:bg-black text-base shadow-sm  hover:text-white hover:bg-[#003865] hover:scale-110 hover:shadow-xl duration-150"
                  onClick={() => {
                    setIsMobileViewDropdown(false);
                  }}
                >
                  Home
                </NavLink>
              )}

              {navLinks?.map((navLink, i) => (
                <NavLink
                  className="flex mx-14 sm:mx-0 justify-center items-center rounded-xl py-2 px-3 my-5 font-medium active:bg-black text-base shadow-sm  hover:text-white hover:bg-[#003865] hover:scale-110 hover:shadow-xl duration-150"
                  to={navLink?.path}
                  activeClassName="bg-[#003865] text-white"
                  key={i}
                  onClick={() => {
                    setIsMobileViewDropdown(false);
                  }}
                >
                  {navLink?.title}
                </NavLink>
              ))}

              {/* Log out */}
              {/* <NavLink
                to={"/login"}
                className="flex w-[40vh] justify-center items-center rounded-xl py-2 px-3 my-1 font-medium  text-base shadow-sm  hover:text-white  hover:scale-110 hover:shadow-xl duration-150"
                onClick={() => {
                  setIsMobileViewDropdown(false);
                }}
              >
                Log out
              </NavLink> */}

              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogOut();
                    setIsMobileViewDropdown(false);
                  }}
                  className=" focus:outline-none "
                >
                  <div className="flex w-[40vh] justify-center items-center rounded-xl py-2 px-3 my-1 font-medium  text-base shadow-sm  hover:text-white  hover:scale-110 hover:shadow-xl duration-150">
                    <p className="text-base font-semibold text-left pl-6  ">
                      Log Out
                    </p>
                  </div>
                </button>
              ) : (
                <>
                  <NavLink
                    to={"/login"}
                    onClick={() => {
                      setIsMobileViewDropdown(false);
                    }}
                    className=" focus:outline-none "
                  >
                    <div className="flex w-[40vh] justify-center items-center rounded-xl py-2 px-3 my-1 font-medium  text-base shadow-sm  hover:text-white  hover:scale-110 hover:shadow-xl duration-150">
                      <p className="text-base font-semibold ">Log in</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to={"/signup"}
                    onClick={() => {
                      setIsMobileViewDropdown(false);
                    }}
                    className=" focus:outline-none "
                  >
                    <div className="flex w-[40vh] justify-center items-center rounded-xl py-2 px-3 my-1 font-medium  text-base shadow-sm  hover:text-white  hover:scale-110 hover:shadow-xl duration-150">
                      <p className="text-base font-semibold   ">Sign Up</p>
                    </div>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileViewDropdown;
