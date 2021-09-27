import React, {createContext, useState} from "react";

const SlideContext = createContext();

export const SlideProvider = (props) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);

    const setCount = count => {
        setSlidesCount(count);
    }

    const setCurrent = current => {
        setCurrentSlide(current);
    }

    const setWidth = () => {
        const s = document.querySelector(".screen");
        setScreenWidth(s.offsetWidth);
    }

    return (
        <SlideContext.Provider value={{currentSlide, slidesCount, screenWidth, setCurrent, setCount, setWidth}}>
            {props.children}
        </SlideContext.Provider>
    )
}
export default SlideContext;