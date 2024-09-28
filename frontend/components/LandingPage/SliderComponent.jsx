"use client"

import React from "react";
import Slider from "react-infinite-logo-slider";
import SpotifyLogo from "@/assets/spotifyLogo.svg";
import SquareLogo from "@/assets/squareLogo.svg";
import CiscoLogo from "@/assets/ciscoLogo.svg";
import ebayLogo from "@/assets/ebayLogo.svg";
import Image from "next/image";
const SliderComponent = () => {

    return (
        <>
            <Slider
                width="250px"
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                    <Image src={ebayLogo.src} alt="Ebay Logo" width={100} height={100} />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={SquareLogo.src} alt="Square Logo" width={100} height={100} />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={SpotifyLogo.src} alt="Spotify Logo" width={100} height={100} />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={CiscoLogo.src} alt="Cisco Logo" width={100} height={100} />
                </Slider.Slide>
            </Slider>
        </>
    );
};

export default SliderComponent;