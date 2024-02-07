import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import MainBoard from "../components/MainBoard/MainBoard";
import SantaList from "../components/LetterCreator/SantaList";
import UsersLists from "../components/UsersList/UsersLists";
import { MobileContext } from "../context/MobileContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomeMobile = () => {
  const [message, setMessage] = useState<string | null>(null);
  const MobileState = useContext(MobileContext);
  const [swiper, setSwiper] = useState<any>(null);
  const arrowLeftRef = useRef<HTMLSpanElement | null>(null);
  const arrowRightRef = useRef<HTMLSpanElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const msg: {[key:number]: string} = {
    0: "Kliknij prezent",
    1: "Napisz swój list"
  }

  useEffect(() => {
    console.log(activeIndex);
    if (arrowRightRef.current) {
      activeIndex === 2
        ? (arrowRightRef.current.style.display = "none")
        : (arrowRightRef.current.style.display = "block");
    }

    if (MobileState?.isMobile) {
      if (swiper) {
        switch (activeIndex) {
          case 0:
            setMessage("Kliknij prezent");
            break;
          case 1:
            setMessage("Napisz swój list");
            break;
          case 2:
            setMessage("Użytkownicy");
            break;
        }
      } else {
        setMessage(null);
      }
    }
  }, [activeIndex, MobileState, swiper]);

  return (
    <div className="homeMobile">
      <div className="navigationSpace">
        {activeIndex !== 0 && <span
          ref={arrowLeftRef}
          onClick={() => {
            swiper.slideTo(swiper.activeIndex - 1);
          }}
        >
          <ArrowBackIosIcon />
        </span>}
        
        <span className="messageSwiper">{msg[activeIndex]}</span>
        <span
          ref={arrowRightRef}
          onClick={() => {
            swiper.slideTo(swiper.activeIndex + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </span>
      </div>

      <Swiper
        onSlideChange={(swiper: any) => {
          setActiveIndex(swiper.activeIndex);
        }}
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={0}
        direction="horizontal"
        onSwiper={(swiper: any) => {
          setSwiper(swiper);
        }}
      >
        <SwiperSlide>
          <MainBoard />
        </SwiperSlide>
        <SwiperSlide>
          <SantaList />
        </SwiperSlide>
        <SwiperSlide>
          <UsersLists />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeMobile;
