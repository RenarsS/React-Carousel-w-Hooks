import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, css} from "aphrodite";
import SlideContext from "../context/SlideContext";


const Slider = ({children, slidesDisplay}) => {

    if (slidesDisplay === 0 || slidesDisplay === undefined){
        slidesDisplay = 1
    }

    const {setCount, currentSlide, screenWidth, setCurrent} = useContext(SlideContext);

    const [position, setPosition] = useState(0);
    const [enter, setEnter] = useState(0);
    const [press, setPress] = useState(false);
    const [base, setBase] = useState(0);

    const handlePress = (event) => {

        if (enter === 0){
            if (event?.clientX !== undefined){
                setEnter(event.clientX);
            }
            else{
                setEnter(event.touches[0].clientX);
            }
        } else{
            if (event?.clientX !== undefined) {

                setEnter(event.clientX + -position);
            }
            else {
                setEnter(event.touches[0]?.clientX + -position);
            }
        }

        setPress(true)
    };

    const handleMove = (event) => {
        if (press) {
            if (event?.clientX !== undefined){
                setPosition(event.clientX - enter);
            }
            else {
                setPosition(event.touches[0]?.clientX - enter);
            }
        }
    }

    const handleUp = () => {
        setPress(false)
        if((position) <= 0){
            setCurrent(Math.abs(Math.round(position/(screenWidth/slidesDisplay))));
        }
    };

    useEffect(() => {
        setBase((screenWidth * children.length)/slidesDisplay);
        setCount(children.length);

    },[screenWidth]);

    useEffect(()=>{
        let slider = document.getElementsByClassName("base");

        slider[0].addEventListener("animationend", ()=> {
            setPosition(-currentSlide*(screenWidth/slidesDisplay))
        }, true);

    }, [currentSlide]);


    const translateKeyFrames = {
        'from': {
            transform: `translateX(${position}px)`,
        },
        'to': {
            transform: `translateX(${-currentSlide * (screenWidth / slidesDisplay)}px)`
        }

    };

    const style = StyleSheet.create({
        slider:{
            width: `${base}px`,
            height: '100%',
            position:'relative',
            transform: `translateX(${position}px)`,
            display:"flex",
            flexDirection: "row",
            userSelect:"none",


        },
        animation: {
            animationName:[translateKeyFrames],
            animationDuration: '0.5s',
        },
        slide: {
            width: (screenWidth/slidesDisplay) +'px',
        },
    });

    return(
        <>
            <div className={css(style.slider, !press ? style.animation : "") + " base"}
                 onMouseDown={handlePress}
                 onMouseMove={handleMove}
                 onMouseUp={handleUp}
                 onMouseLeave={() => {setPress(false); }}
                 onTouchStart={handlePress}
                 onTouchMove={handleMove}
                 onTouchEnd={handleUp}
                >
                {children.map((child) => <div className={css(style.slide)}>{child}</div>)}
            </div>
        </>
    );
}

export default Slider;