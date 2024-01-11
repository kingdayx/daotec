import React from "react";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import * as rocketGirl from "../../../public/assets/rocketgirl.png";
import * as headerArrow from "../../../public/assets/headerArrow.svg";
import * as firstStar from "../../../public/assets/firstStar.svg";
import * as secondStar from "../../../public/assets/secondStar.svg";
import * as thirdStar from "../../../public/assets/thirdStar.svg";
import * as fourthStar from "../../../public/assets/fourthStar.svg";
import * as fifthStar from "../../../public/assets/fifthStar.svg";

export default function Header() {
  return (
    <div className="header ">
      {isMobile ? (
        <div></div>
      ) : (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1512 975"
            fill="url(#paint0_linear_1_19)"
            preserveAspectRatio="none"
          >
            <path
              d="M1415.25 975H1512V0H0V974.999H97.7529L97.792 974.978L97.8301 974.957H129.213C131.253 974.911 133.262 974.444 135.113 973.585C137.054 972.712 138.883 971.609 140.56 970.299C143.279 968.329 145.577 965.834 147.318 962.963C148.373 960.808 149.719 958.807 151.318 957.018C152.933 955.203 154.78 953.608 156.811 952.275C160.924 949.524 165.752 948.038 170.7 948H708V913C708 886.49 729.49 865 756 865C782.51 865 804 886.49 804 913V948H1342.3C1347.25 948.038 1352.08 949.524 1356.19 952.276C1358.22 953.609 1360.07 955.204 1361.69 957.019C1363.29 958.809 1364.63 960.809 1365.69 962.964C1367.43 965.835 1369.73 968.33 1372.44 970.3C1374.12 971.61 1375.95 972.713 1377.89 973.586C1379.74 974.445 1381.75 974.912 1383.79 974.958H1415.17L1415.19 974.964L1415.23 974.99L1415.25 975Z"
              fill="url(#paint0_linear_37_8)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_8"
                x1="140.616"
                y1="-31.2"
                x2="503.58"
                y2="1085.7"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EC8B4D" />
                <stop offset="1" stopColor="#EE5D00" />
              </linearGradient>
            </defs>
          </svg>
          <Image
            src={headerArrow}
            className="headerArrow"
            height={48}
            width={51}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="147"
            height="267"
            viewBox="0 0 147 267"
            fill="url(#paint0_linear_1_20)"
            className="firstSplug"
          >
            <path
              d="M-48 92.0002C-48 92.0002 -110.381 22.1062 -40.5999 3.20615C29.181 -15.6938 148.394 52.6351 146.36 145.654C144.326 238.673 32.5751 265.7 -16.0149 266.29C-64.6049 266.88 -48 148 -48 148V92.0002Z"
              fill="url(#paint0_linear_1_20)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_20"
                x1="4.45897"
                y1="206.122"
                x2="391.809"
                y2="-62.3307"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5F2A68" />
                <stop offset="1" stop-color="#AA78C9" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="773"
            height="791"
            viewBox="0 0 773 791"
            fill="none"
            className="secondSplug"
          >
            <path
              d="M773 0.626953C726.196 14.9365 661.645 56.6538 619.002 95.8164C594.048 118.734 541.851 111.53 477.86 102.7C383.164 89.6313 262.642 72.9985 166.363 145.142C5.02408 266.036 -1.65696 395.813 0.976037 516.262C5.69607 732.12 652.065 789.403 764.822 790.762C767.642 790.796 770.367 790.657 773 790.353V0.626953Z"
              fill="url(#paint0_linear_37_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_5"
                x1="653.431"
                y1="617.392"
                x2="-306.555"
                y2="-374.638"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5F2A68" />
                <stop offset="1" stop-color="#AA78C9" />
              </linearGradient>
            </defs>
          </svg>
          <Image
            src={rocketGirl}
            className="rocketGirl"
            height={1000}
            width={1000}
          />
          <Image src={firstStar} className="firstStar" height={60} width={40} />
          <Image
            src={secondStar}
            className="secondStar"
            height={60}
            width={40}
          />
          <Image src={thirdStar} className="thirdStar" height={70} width={70} />
          <Image
            src={fourthStar}
            className="fourthStar"
            height={45}
            width={45}
          />
          <Image src={fifthStar} className="fifthStar" height={75} width={75} />
          <nav className="absolute z-10 top-0 navBar">
            <div className="flex justify-center flex-row space-x-7 float-end p-7">
              <h5 className="text-white navText pr-10 cursor-pointer">Home</h5>
              <h3 className=" text-white navText pr-10 cursor-pointer">
                Services
              </h3>
              <h3 className="text-white navText pr-10 cursor-pointer">
                About us
              </h3>
              <div className="contactBubble cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="48"
                  viewBox="0 0 150 48"
                  fill="none"
                  className="relative z-3 "
                >
                  <path
                    d="M126 0H24C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48H126C139.255 48 150 37.2548 150 24C150 10.7452 139.255 0 126 0Z"
                    fill="white"
                  />
                </svg>
                <h3 className="contactText absolute z-4 top-3 right-8 ">
                  Contact us
                </h3>
              </div>
            </div>
          </nav>
          <div className="headerText">
            <h1 className="headerText1"> TRANSFORMING </h1>
            <h1 className="headerText2"> IDEAS INTO </h1>
            <h1 className="headerText3"> PRODUCTS </h1>
          </div>
          <div className="headerTextContainer">
            <p className="headerText4">
              A proffesional team at your service to make your ideas come true!
            </p>
            <p className="headerText5">
              What are you waiting for to explore and join our world!
            </p>
          </div>
          <div className="headerExploreContainer">
            <h3 className="headerExplore"> Explore </h3>
          </div>
        </div>
      )}
    </div>
  );
}
