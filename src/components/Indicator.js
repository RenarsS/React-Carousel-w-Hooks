import React, {useContext} from "react";
import {StyleSheet, css} from "aphrodite";
import SlideContext from "../context/SlideContext";

const Indicator = () => {
    const {currentSlide, slidesCount, setCurrent} = useContext(SlideContext);

    const style = StyleSheet.create({
        indicatorBox:{
            width: "100%",
            justifyContent:"center",
            display:"flex",
            flexDirection:"row",
        },
        indicator: {
            width:"6px",
            height:"6px",
            backgroundColor:"white",
            border: "#757C95 solid 1px",
            borderRadius:"100%",
            margin:"4px",
        },
        currentIndicator: {
            backgroundColor:"#595E73",

        }
    });
    let indicators = [];

    if (slidesCount !== 0){
        for (let i = 0; i <slidesCount; i++) {
            indicators.push(<div className={css(style.indicator, i === currentSlide ? style.currentIndicator : "")} onClick={()=>setCurrent(i)}/>);
        };

        return (
            <div className={css(style.indicatorBox)}>
                {indicators}
            </div>
        );
    }else{
        return <></>;
    }
}

export default Indicator;