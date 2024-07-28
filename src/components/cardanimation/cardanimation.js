import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import HoverText from "../hovertext/hovertext.js";
import Navbar, { Navbars } from "../navbar/navbar.js";
import Footer from "../footer/footer.js";
import WordList from "../list/list.js";
import ContactInfo from "../contact/contact.js";

export const CardAnimation = () => {
  const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  return (
    <>
    <Navbar/>
    <div style={{height: "60vh"}}>
    <HoverText text="SIMPLY JET" transformOrigin={"bottom center"}/>
    </div>
    
      <div ref={ref} className="relative">
    
        {CARDS.map((c, idx) => (
         
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
      <div className="h-screen"   >
      <WordList/>
      <ContactInfo/>
      <HoverText text="OUR STUDIO" transformOrigin={"top center"}/>
      <Footer/>
      </div>
     
    </>
  );
};

const Card = ({ position, card }) => {
  // const scaleFromPct = (position - 1) / CARDS.length;
  //   const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [.95, 1]);
  return (
    <motion.div
      style={{
        backgroundImage: `url(${card.imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${12 * 2}px)`,
        top: 12,
        scale
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
    </motion.div>
  );
};

const CARDS = [
  {
    imgUrl:"./01hero.jpg",
  },
  {
    imgUrl:"./02hero.jpg",
  },
  {
    imgUrl:"./03hero.jpg",
  },
  {
    imgUrl:"./04hero.jpg",
  },
  {
    imgUrl:"./05hero.jpg",
  },
];