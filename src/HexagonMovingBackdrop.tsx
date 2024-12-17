import React, {useEffect, useRef, useState} from "react";
import mainAnime from "./functions/mainAnime";

interface IBackdropHexagon {
    sparkMaxAmount?: number;
}

const HexagonMovingBackdrop = ({sparkMaxAmount = 10}: IBackdropHexagon) => {
    const refBackdrop = useRef(null)
    const refCanvas = useRef(null);
    const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
    const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
    //
    useEffect(() => {
        const canvasElem = refCanvas.current as HTMLCanvasElement | null;
        if (canvasElem !== null) {
            mainAnime(canvasElem, sparkMaxAmount);
        }
    }, []);

    useEffect(() => {
        const parentElement = refBackdrop.current;

        if (parentElement) {
            const parentElementHtml = parentElement as HTMLDivElement
            const handleResize = () => {
                setCanvasWidth(parentElementHtml.offsetWidth)
                setCanvasHeight(parentElementHtml.offsetHeight)
            };

            const resizeObserver = new ResizeObserver(() => {
                handleResize();
            });

            resizeObserver.observe(parentElement);

            return () => {
                resizeObserver.disconnect();
            };
        }
    }, [refBackdrop]);

    return (
        <div
            ref={refBackdrop}
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "red"
            }}
        >
            <canvas
                ref={refCanvas}
                width={`${canvasWidth}px`}
                height={`${canvasHeight}px`}
                style={{
                    overflow: "hidden",
                    backgroundColor: "black"
                }}
            ></canvas>
        </div>
    );
};

export default HexagonMovingBackdrop;
