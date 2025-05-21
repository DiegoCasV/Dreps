import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img_banner_1.avif";
import img2 from "../../assets/img_banner_2.avif";
import img3 from "../../assets/img_banner_3.avif";
import "./Banner.css";

const BANNER_IMG = [
    { img: img1, alt: "Imagen banner 1", style: { objectPosition: "50% 11%" }, styleMobile: { objectPosition: "30% 50%" } },
    { img: img2, alt: "Imagen banner 2", style: { objectPosition: "50% 20%" }, styleMobile: {} },
    { img: img3, alt: "Imagen banner 3", style: { objectPosition: "50% 20%" }, styleMobile: { objectPosition: "40% 50%" } }
];

export default function Banner({ isMobile }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setIsAnimating(true);

            setTimeout(() => {
                setCurrentIndex(nextIndex);
                setNextIndex((prev) => (prev + 1) % BANNER_IMG.length);
                setIsAnimating(false);
            }, 1000);
        }, 5000);

        return () => clearInterval(intervalRef.current);
    }, [nextIndex]);

    return (
        <div className="bannerslider">
            <ImageSlider
                isMobile={isMobile}
                currentIndex={currentIndex}
                nextIndex={nextIndex}
                isAnimating={isAnimating}
            />
            <div className="bannerslider_slidertext">
                <p>Disponible en Dreps</p>
                <a onClick={() => navigate(`/search?categoria=none&searchProduct=${encodeURIComponent("")}`)}>Comprar la Colección</a>
            </div>
        </div>
    );
}

function ImageSlider({ isMobile, currentIndex, nextIndex, isAnimating }) {
    return (
        <>
            <img
                src={BANNER_IMG[currentIndex].img}
                alt={BANNER_IMG[currentIndex].alt}
                style={!isMobile ? BANNER_IMG[currentIndex].style : BANNER_IMG[currentIndex].styleMobile}
                className="bannerslider_bannerimage"
            />
            {isAnimating && (
                <img
                    src={BANNER_IMG[nextIndex].img}
                    alt={BANNER_IMG[nextIndex].alt}
                    style={!isMobile ? BANNER_IMG[nextIndex].style : BANNER_IMG[nextIndex].styleMobile}
                    className="bannerslider_bannerimage bannerslider_bannerimage-nextimage"
                />
            )}
            <div className="bannerslider_overlay" />
        </>
    );
}

/*
const TEXT_SLIDER = [
    "after",
    "",
    "before"
]
<div
    className={`bannerslider_slidertext ${TEXT_SLIDER[indexSliderText]}`}
>
    <p>Compra lo que quieras</p>
</div>
*/