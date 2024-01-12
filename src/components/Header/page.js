import React from "react";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import * as rocketGirl from "../../../public/assets/rocketgirl.png";
import * as rocketGirlmobile from "../../../public/assets/rocketgirlmobile.png";
import * as headerArrow from "../../../public/assets/headerArrow.svg";
import * as firstStar from "../../../public/assets/firstStar.svg";
import * as secondStar from "../../../public/assets/secondStar.svg";
import * as thirdStar from "../../../public/assets/thirdStar.svg";
import * as thirdStarmobile from "../../../public/assets/thirdStarmobile.svg";
import * as fourthStarmobile from "../../../public/assets/fourthStarmobile.svg";
import * as fourthStar from "../../../public/assets/fourthStar.svg";
import * as fifthStar from "../../../public/assets/fifthStar.svg";

export default function Header() {
  return (
    <div className="header ">
      <div className="headerMobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 428 924"
          fill="url(#paint0_linear_56_61)"
          className="mobileBG"
          preserveAspectRatio="none"
        >
          <path
            d="M428 924H240V905C239.992 898.107 237.249 891.499 232.375 886.625C227.501 881.75 220.893 879.008 214 879C207.107 879.008 200.499 881.75 195.625 886.624C190.751 891.498 188.008 898.107 188 905V924H0V0H428V924Z"
            fill="url(#paint0_linear_56_61)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_56_61"
              x1="39.804"
              y1="-29.568"
              x2="622.86"
              y2="506.334"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EC8B4D" />
              <stop offset="1" stop-color="#EE5D00" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 428 709"
          fill="url(#paint0_linear_56_407)"
          preserveAspectRatio="none"
          className="mobileBG2"
        >
          <path
            d="M0 510.371V0.314941C2.77109 0.771179 5.51434 1.40002 8.21365 2.19901C14.95 4.16113 21.5198 6.65625 27.8601 9.66092C41.3931 15.9119 55.7662 24.4129 70.9812 33.4129H70.9871C103.258 52.4989 139.835 74.1308 180.298 81.1128C184.174 81.7698 188.099 82.0957 192.03 82.0869C200.112 82.0037 208.152 80.9116 215.964 78.836C224.51 76.6012 232.88 73.7357 241.003 70.263C257.968 63.1741 275.723 53.5635 292.895 44.2683L292.918 44.2559L292.938 44.2449L292.991 44.2159H293.001L293.16 44.1297C310.292 34.8564 328.002 25.2709 344.971 18.1848C353.109 14.7083 361.493 11.8406 370.054 9.60501C377.883 7.52686 385.941 6.43329 394.041 6.34988C400.092 6.31839 406.119 7.11096 411.956 8.70584C417.505 10.2139 422.881 12.2901 428 14.8998V233C424.513 238.708 421.411 244.504 419.002 250.304C411.102 269.319 412.23 284.778 422.447 297.564C424.06 299.582 425.912 301.595 428 303.602V708.156H239.999V689.003C239.991 682.11 237.248 675.501 232.374 670.627C227.5 665.753 220.892 663.011 213.999 663.003C207.106 663.011 200.496 665.753 195.622 670.627C190.748 675.501 188.007 682.11 187.999 689.003V708.153H0V676.062C0.596954 675.24 1.18909 674.418 1.77615 673.595C7.20816 665.982 12.1944 658.358 16.5984 650.936C27.7984 632.057 35.3039 614.383 38.9128 598.404C43.4269 578.431 41.8232 561.069 34.1511 546.804C27.6606 534.733 16.3926 522.691 0 510.371Z"
            fill="url(#paint0_linear_56_407)"
          />
          <path
            d="M187.999 708.153V708.156L188.001 708.153H187.999Z"
            fill="url(#paint1_linear_56_407)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_56_407"
              x1="379.824"
              y1="553.652"
              x2="-472.926"
              y2="-376.337"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5F2A68" />
              <stop offset="1" stop-color="#AA78C9" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_56_407"
              x1="379.824"
              y1="553.652"
              x2="-472.926"
              y2="-376.337"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5F2A68" />
              <stop offset="1" stop-color="#AA78C9" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          className="purpleArrow"
        >
          <path
            d="M13.5822 28.515C12.9185 28.4902 12.2873 28.2209 11.8102 27.759L1.70116 17.998C1.18557 17.5 0.888918 16.8176 0.876447 16.101C0.863976 15.3843 1.13671 14.692 1.63466 14.1765C2.1326 13.6609 2.81496 13.3642 3.53163 13.3517C4.2483 13.3393 4.94058 13.612 5.45616 14.11L11.3352 19.788V3.14995C11.3352 2.43387 11.6196 1.74711 12.126 1.24076C12.6323 0.734415 13.3191 0.449951 14.0352 0.449951C14.7512 0.449951 15.438 0.734415 15.9443 1.24076C16.4507 1.74711 16.7352 2.43387 16.7352 3.14995V19.717L22.5412 14.11C23.0567 13.6121 23.749 13.3395 24.4655 13.3521C25.1821 13.3647 25.8643 13.6614 26.3622 14.177C26.86 14.6925 27.1326 15.3848 27.12 16.1013C27.1074 16.8179 26.8107 17.5001 26.2952 17.998L16.1872 27.758C15.737 28.1939 15.1489 28.4591 14.5242 28.508C14.2112 28.5651 13.8908 28.5671 13.5772 28.514L13.5822 28.515Z"
            fill="#602B69"
          />
        </svg>
        <Image
          src={rocketGirlmobile}
          className="rocketGirlmobile"
          height={1000}
          width={1000}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="34"
          viewBox="0 0 17 34"
          fill="none"
          className="firstStarmobile"
        >
          <path
            d="M-3.22752 2.70674C-3.16571 2.25777 -2.95325 1.84312 -2.62495 1.53069C-2.29666 1.21827 -1.87199 1.02661 -1.42051 0.987112C-0.969043 0.947613 -0.517542 1.06262 -0.139981 1.31329C0.237579 1.56395 0.518814 1.93542 0.657645 2.36683L3.53854 11.3499C3.65387 11.7094 3.86858 12.0289 4.15785 12.2715C4.44713 12.514 4.79915 12.6698 5.17322 12.7207L14.5201 13.9979C14.9691 14.0597 15.3837 14.2722 15.6962 14.6005C16.0086 14.9288 16.2002 15.3534 16.2397 15.8049C16.2792 16.2564 16.1642 16.7079 15.9136 17.0854C15.6629 17.463 15.2914 17.7442 14.86 17.8831L5.87692 20.7639C5.51757 20.8792 5.19816 21.0937 4.95558 21.3828C4.71301 21.6719 4.55718 22.0237 4.50609 22.3976L3.22886 31.7445C3.16706 32.1935 2.9546 32.6081 2.6263 32.9206C2.29801 33.233 1.87333 33.4246 1.42186 33.4641C0.970389 33.5036 0.518889 33.3886 0.141328 33.138C-0.236234 32.8873 -0.517466 32.5158 -0.656296 32.0844L-3.53719 23.1013C-3.65243 22.742 -3.86699 22.4226 -4.15608 22.18C-4.44516 21.9374 -4.79698 21.7816 -5.17088 21.7305L-14.5178 20.4533C-14.9667 20.3915 -15.3814 20.179 -15.6938 19.8507C-16.0062 19.5224 -16.1979 19.0977 -16.2374 18.6463C-16.2769 18.1948 -16.1619 17.7433 -15.9112 17.3657C-15.6605 16.9882 -15.2891 16.7069 -14.8577 16.5681L-5.87458 13.6872C-5.51415 13.5721 -5.19378 13.3571 -4.95066 13.0671C-4.70754 12.7772 -4.55166 12.4243 -4.50111 12.0493L-3.22752 2.70674Z"
            fill="#E3FDE6"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          className="secondStarmobile"
        >
          <path
            d="M10.3046 2.65649C10.3134 2.1624 10.5047 1.68903 10.8418 1.32766C11.1788 0.966284 11.6377 0.74249 12.13 0.699421C12.6223 0.656351 13.1131 0.797057 13.5078 1.09441C13.9025 1.39177 14.1731 1.82471 14.2675 2.30978L15.5884 9.11254C15.6758 9.56234 15.9151 9.96848 16.2661 10.263C16.6171 10.5576 17.0586 10.7226 17.5168 10.7306L24.4456 10.8502C24.9397 10.8589 25.413 11.0503 25.7744 11.3873C26.1358 11.7244 26.3596 12.1833 26.4026 12.6756C26.4457 13.1679 26.305 13.6587 26.0076 14.0534C25.7103 14.448 25.2773 14.7187 24.7923 14.8131L17.9895 16.134C17.5397 16.2214 17.1336 16.4607 16.839 16.8117C16.5445 17.1627 16.3794 17.6042 16.3714 18.0624L16.2519 24.9911C16.2431 25.4852 16.0518 25.9586 15.7147 26.32C15.3777 26.6813 14.9188 26.9051 14.4265 26.9482C13.9342 26.9913 13.4434 26.8506 13.0487 26.5532C12.654 26.2559 12.3834 25.8229 12.289 25.3378L10.9681 18.5351C10.8806 18.0853 10.6414 17.6791 10.2904 17.3846C9.93937 17.0901 9.49785 16.925 9.0397 16.917L2.11092 16.7974C1.61683 16.7887 1.14346 16.5974 0.782089 16.2603C0.420715 15.9232 0.19692 15.4643 0.153851 14.972C0.110782 14.4798 0.251487 13.989 0.548842 13.5943C0.846197 13.1996 1.27914 12.929 1.76421 12.8346L8.56697 11.5136C9.01677 11.4262 9.42292 11.187 9.71745 10.836C10.012 10.4849 10.1771 10.0434 10.1851 9.58527L10.3046 2.65649Z"
            fill="#E3FDE6"
          />
        </svg>
        <Image
          src={thirdStarmobile}
          className="thirdStarmobile"
          alt="thirdStarmobile"
          height={55}
          width={55}
        />
        <Image
          src={fourthStarmobile}
          className="fourthStarmobile"
          height={45}
          width={45}
        />
        <div className="headerText">
          <h1 className="headerText1"> TRANSFORMING </h1>
          <h1 className="headerText2"> IDEAS INTO </h1>
          <h1 className="headerText3"> PRODUCTS </h1>
        </div>
        <nav className="absolute z-10 top-0 navBar">
          <div className="flex justify-center flex-row space-x-7 float-end p-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
            >
              <path
                d="M2.57898 17.2201C2.35814 17.2255 2.13853 17.1856 1.9337 17.1028C1.72887 17.0201 1.54316 16.8963 1.38799 16.7391C1.23075 16.5839 1.10696 16.3982 1.02423 16.1933C0.941508 15.9885 0.901608 15.7689 0.906984 15.5481C0.901608 15.3272 0.941508 15.1077 1.02423 14.9028C1.10696 14.698 1.23075 14.5122 1.38799 14.357C1.54312 14.1998 1.72883 14.0759 1.93367 13.9932C2.13851 13.9105 2.35813 13.8707 2.57898 13.8761H21.328C21.5488 13.8707 21.7685 13.9105 21.9733 13.9932C22.1781 14.0759 22.3638 14.1998 22.519 14.357C22.6762 14.5122 22.8 14.698 22.8827 14.9028C22.9655 15.1077 23.0054 15.3272 23 15.5481C23.0054 15.7689 22.9655 15.9885 22.8827 16.1933C22.8 16.3982 22.6762 16.5839 22.519 16.7391C22.3638 16.8963 22.1781 17.0201 21.9733 17.1028C21.7684 17.1856 21.5488 17.2255 21.328 17.2201H2.57898ZM2.57898 4.17406C2.35813 4.1795 2.13851 4.1396 1.93367 4.05688C1.72883 3.97415 1.54312 3.85033 1.38799 3.69305C1.23071 3.53791 1.10688 3.35223 1.02416 3.14739C0.941428 2.94255 0.901549 2.72291 0.906984 2.50207C0.901549 2.28122 0.941428 2.06158 1.02416 1.85674C1.10688 1.6519 1.23071 1.46622 1.38799 1.31109C1.54316 1.15386 1.72887 1.03004 1.9337 0.947318C2.13853 0.864594 2.35814 0.824693 2.57898 0.830069H21.328C21.5488 0.824693 21.7684 0.864594 21.9733 0.947318C22.1781 1.03004 22.3638 1.15386 22.519 1.31109C22.6763 1.46622 22.8001 1.6519 22.8828 1.85674C22.9655 2.06158 23.0054 2.28122 23 2.50207C23.0054 2.72291 22.9655 2.94255 22.8828 3.14739C22.8001 3.35223 22.6763 3.53791 22.519 3.69305C22.3638 3.85033 22.1781 3.97415 21.9733 4.05688C21.7685 4.1396 21.5488 4.1795 21.328 4.17406H2.57898Z"
                fill="white"
              />
            </svg>
          </div>
        </nav>
        <div className="headerTextContainer">
          <p className="headerText4">
            A professional team at your service to make your ideas come true!
          </p>
          <p className="headerText5">
            What are you waiting for to explore and join our world!
          </p>
        </div>
        <div className="headerExploreContainer">
          <h3 className="headerExplore"> Explore </h3>
        </div>
      </div>

      <div className="headerDesktop">
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
        <Image src={secondStar} className="secondStar" height={60} width={40} />
        <Image src={thirdStar} className="thirdStar" height={70} width={70} />
        <Image src={fourthStar} className="fourthStar" height={45} width={45} />
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
            A professional team at your service to make your ideas come true!
          </p>
          <p className="headerText5">
            What are you waiting for to explore and join our world!
          </p>
        </div>
        <div className="headerExploreContainer">
          <h3 className="headerExplore"> Explore </h3>
        </div>
      </div>
    </div>
  );
}
