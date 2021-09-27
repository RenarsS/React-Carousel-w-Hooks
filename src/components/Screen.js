import React, {useContext, useEffect} from "react";
import {css, StyleSheet} from "aphrodite";
import SlideContext from "../context/SlideContext";

const Screen = ({children}) => {

    const {setWidth} =  useContext(SlideContext);
    const style = StyleSheet.create({
        screen: {
            width:'100%',
            height: "100%",
            overflow:'hidden',
        }
    })

    useEffect(()=> {
        setWidth();
    }, [])

    return(
        <>
            <div className={css(style.screen) + " screen"}>
                {children}
            </div>
        </>
    )
}

export default Screen;