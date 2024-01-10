import React from "react";
import Image from "next/image";
import * as rocket from "../../../public/assets/rocket.png";

export default function About() {
  return (
    <div className="aboutContainer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="121"
        height="530"
        viewBox="0 0 121 530"
        fill="none"
        className="aboutFirstSplug"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 529.435C32.2769 524.779 64.2313 513.544 90.427 491.207C144.088 445.45 114.736 413.742 84.7848 381.385C63.6093 358.509 42.1335 335.308 49.4802 306.59C52.5551 294.568 58.6372 278.995 65.5875 261.2C87.4343 205.266 117.859 127.369 90.4309 68.719C74.4363 34.5173 51.3242 24.3593 27.6851 13.9695C18.405 9.89087 9.04382 5.77643 0 0.157715V529.435Z"
          fill="url(#paint0_linear_32_15)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_32_15"
            x1="-242.541"
            y1="43.4008"
            x2="130.507"
            y2="178.775"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EC8B4D" />
            <stop offset="1" stop-color="#EE5D00" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <h1 className="aboutHeader"> ABOUT US </h1>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="450"
        height="700"
        viewBox="0 0 390 785"
        fill="none"
        className="aboutSecondSplug"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M472 0.943604C448.611 48.6733 403.65 118.991 329.383 157.233C281.59 181.843 227.728 182.41 177.692 182.937C102.665 183.727 36.242 184.427 11.7834 265.962C-28.9866 401.873 44.683 615.755 169.154 732.353C261.606 818.958 404.568 776.909 472 749.545V0.943604Z"
          fill="url(#paint0_linear_32_31)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_32_31"
            x1="-142.061"
            y1="156.127"
            x2="461.095"
            y2="462.108"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EC8B4D" />
            <stop offset="1" stop-color="#EE5D00" />
          </linearGradient>
        </defs>
      </svg>
      <Image className="aboutRocket" src={rocket} alt="rocket" />
    </div>
  );
}
