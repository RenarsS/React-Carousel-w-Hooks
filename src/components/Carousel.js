import React, {useEffect} from 'react';
import Slider from "./Slider";
import Indicator from "./Indicator";
import Screen from "./Screen";
import {SlideProvider} from "../context/SlideContext";

const Carousel = (props) => {

    return(
        <div className="container">
            <SlideProvider>
                <Screen>
                    <Slider slidesDisplay={props.slidesDisplay}>
                        {props.children}
                    </Slider>
                </Screen>
                <Indicator/>
            </SlideProvider>
        </div>
    )
}

export default Carousel;