import React from "react";
import Image from "next/image";
import * as services from "../../../public/assets/services.png";
import * as CGI from "../../../public/assets/CGI.svg";

export default function Services() {
  return (
    <div className="servicesContainer">
      <div className="servicesInfo">
        <Image src={services} className="services" alt="services" />
      </div>
      <div className="servicesInfo1">
        <div className="services1">
          <div className="servicesSVG">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 123 123"
              fill="none"
            >
              <path
                d="M61.2031 28.229L63.4441 24.3689C63.7689 23.7874 64.206 23.2763 64.73 22.8651C65.254 22.4539 65.8545 22.151 66.4965 21.9738C67.1385 21.7965 67.8093 21.7485 68.4701 21.8325C69.1308 21.9166 69.7682 22.131 70.3454 22.4634C70.9226 22.7958 71.428 23.2395 71.8324 23.7688C72.2367 24.2981 72.5319 24.9024 72.7008 25.5466C72.8697 26.1909 72.909 26.8624 72.8163 27.522C72.7237 28.1816 72.501 28.8161 72.1611 29.3889L50.6131 66.689H66.2021C71.2501 66.689 74.081 72.625 71.89 76.741H26.2101C24.8771 76.741 23.5987 76.2115 22.6562 75.2689C21.7136 74.3264 21.1841 73.0479 21.1841 71.715C21.1841 70.382 21.7136 69.1036 22.6562 68.161C23.5987 67.2185 24.8771 66.689 26.2101 66.689H39.015L55.4151 38.2789L50.2921 29.387C49.9522 28.8141 49.7295 28.1795 49.6368 27.5199C49.5442 26.8603 49.5834 26.189 49.7523 25.5447C49.9213 24.9004 50.2164 24.2961 50.6208 23.7668C51.0251 23.2376 51.5305 22.7938 52.1077 22.4614C52.6849 22.129 53.3223 21.9145 53.9831 21.8304C54.6438 21.7464 55.3147 21.7944 55.9567 21.9717C56.5987 22.149 57.1991 22.452 57.7231 22.8632C58.2471 23.2743 58.6842 23.7855 59.0091 24.3669L61.2031 28.229ZM41.8231 81.9099L36.9961 90.2889C36.3211 91.4265 35.2253 92.2525 33.9458 92.5879C32.6664 92.9233 31.3062 92.7413 30.16 92.0812C29.0138 91.4211 28.1737 90.336 27.8216 89.061C27.4696 87.786 27.6339 86.4236 28.2791 85.2689L31.8791 79.069C35.9131 77.805 39.2131 78.7589 41.8231 81.9099ZM83.4141 66.715H96.4911C97.824 66.715 99.1025 67.2445 100.045 68.187C100.988 69.1296 101.517 70.408 101.517 71.741C101.517 73.0739 100.988 74.3524 100.045 75.2949C99.1025 76.2375 97.824 76.767 96.4911 76.767H89.226L94.1261 85.267C94.7712 86.4217 94.9356 87.7841 94.5835 89.0591C94.2315 90.3341 93.3914 91.419 92.2451 92.0791C91.0989 92.7392 89.7388 92.9212 88.4593 92.5858C87.1798 92.2504 86.084 91.4245 85.4091 90.287C77.1598 75.9723 70.9707 65.2526 66.8421 58.1279C62.6301 50.8599 65.635 43.568 68.614 41.114C71.9147 46.7693 76.8481 55.303 83.4141 66.715ZM61.2281 0.428956C49.1494 0.428956 37.3419 4.01075 27.2989 10.7213C17.2558 17.4319 9.42813 26.9699 4.80582 38.1292C0.183497 49.2884 -1.0259 61.5677 1.33054 73.4143C3.68697 85.2609 9.50341 96.1428 18.0443 104.684C26.5853 113.225 37.4671 119.041 49.3137 121.397C61.1603 123.754 73.4396 122.545 84.5989 117.922C95.7582 113.3 105.296 105.472 112.007 95.4292C118.717 85.3861 122.299 73.5787 122.299 61.5C122.3 53.4797 120.722 45.5376 117.653 38.1276C114.584 30.7175 110.086 23.9846 104.415 18.3134C98.7435 12.6421 92.0106 8.14371 84.6005 5.07507C77.1904 2.00643 69.2484 0.427642 61.2281 0.428956ZM114.418 61.5C114.417 72.0199 111.297 82.3033 105.452 91.0499C99.6075 99.7966 91.3002 106.614 81.5809 110.639C71.8616 114.664 61.167 115.717 50.8494 113.665C40.5317 111.612 31.0545 106.546 23.616 99.1069C16.1775 91.6681 11.112 82.1904 9.05991 71.8727C7.0078 61.5549 8.06128 50.8604 12.0872 41.1414C16.1131 31.4223 22.9306 23.1153 31.6776 17.2709C40.4246 11.4264 50.7082 8.30701 61.2281 8.30701C68.2132 8.30714 75.1299 9.68298 81.5833 12.3562C88.0367 15.0294 93.9004 18.9476 98.8395 23.887C103.779 28.8263 107.697 34.6901 110.37 41.1436C113.043 47.597 114.418 54.5138 114.418 61.4989V61.5Z"
                fill="#F0FEF2"
              />
            </svg>
          </div>
          <div className="servicesData">
            <h1 className="servicesHeader1"> APP DEVELOPMENT </h1>
            <p className="servicesPara">
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
          <div className="getService">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="224"
              height="82"
              viewBox="0 0 224 82"
              fill="none"
            >
              <g filter="url(#filter0_d_1_140)">
                <path
                  d="M183 10.5H41C24.1553 10.5 10.5 24.1553 10.5 41C10.5 57.8447 24.1553 71.5 41 71.5H183C199.845 71.5 213.5 57.8447 213.5 41C213.5 24.1553 199.845 10.5 183 10.5Z"
                  fill="#EB6C1B"
                />
                <path
                  d="M183 11.5H41C24.7076 11.5 11.5 24.7076 11.5 41C11.5 57.2924 24.7076 70.5 41 70.5H183C199.292 70.5 212.5 57.2924 212.5 41C212.5 24.7076 199.292 11.5 183 11.5Z"
                  stroke="#E3FDE6"
                  stroke-width="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_140"
                  x="0.5"
                  y="0.5"
                  width="223"
                  height="81"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_140"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_140"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h5 className="getServiceText"> Get this service </h5>
          </div>
        </div>
        <div className="services2">
          <div className="servicesSVG">
            <Image src={CGI} className="cgi" alt="cgi image" />
          </div>
          <div className="servicesData">
            <h1 className="servicesHeader1"> 3D ART </h1>
            <p className="servicesPara">
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
          <div className="getService">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="224"
              height="82"
              viewBox="0 0 224 82"
              fill="none"
              className="get"
            >
              <g filter="url(#filter0_d_1_144)">
                <path
                  d="M183 10.23H41C24.1553 10.23 10.5 23.8853 10.5 40.73C10.5 57.5747 24.1553 71.23 41 71.23H183C199.845 71.23 213.5 57.5747 213.5 40.73C213.5 23.8853 199.845 10.23 183 10.23Z"
                  fill="#713D7F"
                />
                <path
                  d="M183 11.23H41C24.7076 11.23 11.5 24.4376 11.5 40.73C11.5 57.0224 24.7076 70.23 41 70.23H183C199.292 70.23 212.5 57.0224 212.5 40.73C212.5 24.4376 199.292 11.23 183 11.23Z"
                  stroke="#E3FDE6"
                  stroke-width="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_144"
                  x="0.5"
                  y="0.22998"
                  width="223"
                  height="81"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_144"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_144"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h5 className="getServiceText"> Get this service </h5>
          </div>
        </div>
        <div className="services3">
          <div className="servicesSVG">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <mask
                id="mask0_1_197"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="100"
                height="100"
              >
                <path d="M100 0H6.10352e-05V100H100V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_197)">
                <path
                  d="M50.0001 33.3301L37.5001 40.6201V55.2101L50.0001 62.5001L62.5001 55.2101V40.6201L50.0001 33.3301ZM56.32 41.8301L49.95 45.5502L43.6301 41.8601L50.0001 38.1501L56.32 41.8301ZM41.6201 45.5101L47.8101 49.1201V56.4102L41.6201 52.8002V45.5101ZM51.9301 56.5602V49.2001L58.3801 45.4401V52.8002L51.9301 56.5602Z"
                  fill="white"
                />
                <path
                  d="M12.5001 0L6.10352e-05 7.29004V21.88L12.5001 29.17L25.0001 21.88V7.29004L12.5001 0ZM18.82 8.5L12.45 12.22L6.12006 8.53003L12.5001 4.81006L18.82 8.5ZM4.12006 12.17L10.3101 15.78V23.0699L4.12006 19.48V12.17ZM14.4301 23.23V15.87L20.8801 12.11V19.47L14.4301 23.23Z"
                  fill="white"
                />
                <path
                  d="M12.5001 70.8301L6.10352e-05 78.1201V92.7101L12.5001 100L25.0001 92.7101V78.1201L12.5001 70.8301ZM18.82 79.3301L12.45 83.0502L6.12006 79.3601L12.5001 75.6501L18.82 79.3301ZM4.12006 83.0101L10.3101 86.6201V93.9102L4.12006 90.3102V83.0101ZM14.4301 94.0602V86.7001L20.8801 82.9401V90.3002L14.4301 94.0602Z"
                  fill="white"
                />
                <path
                  d="M87.5001 0L75.0001 7.29004V21.88L87.5001 29.17L100 21.88V7.29004L87.5001 0ZM93.82 8.5L87.45 12.22L81.1201 8.53003L87.5001 4.81006L93.82 8.5ZM79.1201 12.1801L85.3101 15.78V23.08L79.1201 19.47V12.1801ZM89.4301 23.23V15.87L95.8801 12.11V19.47L89.4301 23.23Z"
                  fill="white"
                />
                <path
                  d="M87.5001 70.8301L75.0001 78.1201V92.7101L87.5001 100L100 92.7101V78.1201L87.5001 70.8301ZM93.82 79.3301L87.45 83.0502L81.1201 79.3601L87.5001 75.6501L93.82 79.3301ZM79.1201 83.0101L85.3101 86.6201V93.9102L79.1201 90.3002V83.0101ZM89.4301 94.0602V86.7001L95.8801 82.9401V90.3002L89.4301 94.0602Z"
                  fill="white"
                />
                <path
                  d="M37.5001 12.5H62.5001V16.67H37.5001V12.5Z"
                  fill="white"
                />
                <path
                  d="M37.5001 83.3301H62.5001V87.5001H37.5001V83.3301Z"
                  fill="white"
                />
                <path d="M14.58 37.5V62.5H10.4201V37.5H14.58Z" fill="white" />
                <path
                  d="M30.3901 36.78L21.5401 27.95L24.4901 25L33.33 33.84L30.3901 36.78Z"
                  fill="white"
                />
                <path
                  d="M66.6701 34.55L75.5001 25.72L78.45 28.66L69.6201 37.5L66.6701 34.55Z"
                  fill="white"
                />
                <path
                  d="M33.8701 61.99L25.0301 70.83L22.08 67.88L30.9201 59.05L33.8701 61.99Z"
                  fill="white"
                />
                <path
                  d="M70.33 58.8701L79.1701 67.7101L76.22 70.6501L67.3801 61.8201L70.33 58.8701Z"
                  fill="white"
                />
                <path d="M89.58 37.5V62.5H85.4201V37.5H89.58Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className="servicesData">
            <h1 className="servicesHeader1"> BLOCKCHAIN DEV </h1>
            <p className="servicesPara">
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
          <div className="getService">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="224"
              height="82"
              viewBox="0 0 224 82"
              fill="none"
            >
              <g filter="url(#filter0_d_1_148)">
                <path
                  d="M183 10.9102H41C24.1553 10.9102 10.5 24.5655 10.5 41.4102C10.5 58.2548 24.1553 71.9102 41 71.9102H183C199.845 71.9102 213.5 58.2548 213.5 41.4102C213.5 24.5655 199.845 10.9102 183 10.9102Z"
                  fill="#3B7253"
                />
                <path
                  d="M183 11.9102H41C24.7076 11.9102 11.5 25.1178 11.5 41.4102C11.5 57.7026 24.7076 70.9102 41 70.9102H183C199.292 70.9102 212.5 57.7026 212.5 41.4102C212.5 25.1178 199.292 11.9102 183 11.9102Z"
                  stroke="#E3FDE6"
                  stroke-width="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_148"
                  x="0.5"
                  y="0.910156"
                  width="223"
                  height="81"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_148"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_148"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h5 className="getServiceText"> Get this service </h5>
          </div>
        </div>
        <div className="services4">
          <div className="servicesSVG">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M64.2861 42.86H92.8571C94.7513 42.8555 96.5667 42.1005 97.9055 40.7604C99.2443 39.4203 99.9974 37.6042 100 35.71V7.14001C99.9995 5.24601 99.2467 3.4298 97.9072 2.09082C96.5676 0.751839 94.7511 -0.000265196 92.8571 7.01457e-08H64.2861C62.3921 -0.000265196 60.5755 0.751839 59.236 2.09082C57.8964 3.4298 57.1436 5.24601 57.1431 7.14001H25.0001C23.1058 7.14451 21.2905 7.89951 19.9517 9.23962C18.6129 10.5797 17.8597 12.3958 17.8571 14.29V28.5699H7.14307C5.25052 28.5744 3.43672 29.3281 2.09821 30.666C0.759691 32.004 0.00534217 33.8174 6.10352e-05 35.71V64.29C0.00534217 66.1826 0.759691 67.996 2.09821 69.334C3.43672 70.6719 5.25052 71.4256 7.14307 71.4301H14.2861V85.71C14.2887 87.6042 15.0419 89.4203 16.3807 90.7604C17.7195 92.1005 19.5348 92.8555 21.4291 92.86H57.1431C57.1436 94.754 57.8964 96.5702 59.236 97.9092C60.5755 99.2482 62.3921 100 64.2861 100H92.8571C94.7511 100 96.5676 99.2482 97.9072 97.9092C99.2467 96.5702 99.9995 94.754 100 92.86V64.29C99.9974 62.3958 99.2443 60.5797 97.9055 59.2396C96.5667 57.8995 94.7513 57.1445 92.8571 57.14H64.2861C62.3918 57.1445 60.5765 57.8995 59.2377 59.2396C57.8989 60.5797 57.1457 62.3958 57.1431 64.29V85.71H21.4291V71.4301H35.7141C37.6066 71.4256 39.4204 70.6719 40.7589 69.334C42.0974 67.996 42.8518 66.1826 42.8571 64.29V35.71C42.8518 33.8174 42.0974 32.004 40.7589 30.666C39.4204 29.3281 37.6066 28.5744 35.7141 28.5699H25.0001V14.29H57.1431V35.71C57.1457 37.6042 57.8989 39.4203 59.2377 40.7604C60.5765 42.1005 62.3918 42.8555 64.2861 42.86ZM64.2861 92.86V78.5699H92.8571V92.86H64.2861ZM92.8571 64.29V71.4301H64.2861V64.29H92.8571ZM7.14307 64.29V50H35.7141V64.29H7.14307ZM35.7141 42.86H7.14307V35.71H35.7141V42.86ZM64.2861 35.71V21.4301H92.8571V35.71H64.2861ZM92.8571 7.14001V14.29H64.2861V7.14001H92.8571Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="servicesData">
            <h1 className="servicesHeader1"> WEBSITE DEV </h1>
            <p className="servicesPara">
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>

          <div className="getService">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="224"
              height="82"
              viewBox="0 0 224 82"
              fill="none"
            >
              <g filter="url(#filter0_d_1_140)">
                <path
                  d="M183 10.5H41C24.1553 10.5 10.5 24.1553 10.5 41C10.5 57.8447 24.1553 71.5 41 71.5H183C199.845 71.5 213.5 57.8447 213.5 41C213.5 24.1553 199.845 10.5 183 10.5Z"
                  fill="#EB6C1B"
                />
                <path
                  d="M183 11.5H41C24.7076 11.5 11.5 24.7076 11.5 41C11.5 57.2924 24.7076 70.5 41 70.5H183C199.292 70.5 212.5 57.2924 212.5 41C212.5 24.7076 199.292 11.5 183 11.5Z"
                  stroke="#E3FDE6"
                  stroke-width="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_140"
                  x="0.5"
                  y="0.5"
                  width="223"
                  height="81"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_140"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_140"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h5 className="getServiceText"> Get this service </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
