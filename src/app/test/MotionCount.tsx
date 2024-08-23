// 'use client'

// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { useEffect } from "react";

// export default function MotionCount({conval,Endval}) {
//     const finalEndVal = Number(Endval)
//     const count = useMotionValue(conval);
//     const rounded = useTransform(count, Math.round);
  
//     useEffect(() => {
//       const animation = animate(count, finalEndVal, {
//         duration: 2
//       });
//     }, []);

//     if(rounded < 10){
//       return <motion.h1>0{rounded}</motion.h1>
//     }
  
//     return <motion.h1>{rounded}</motion.h1>;
//   }



// 'use client'

// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function MotionCount({ conval, Endval }) {
//     const finalEndVal = Number(Endval);
//     const count = useMotionValue(conval);
//     const rounded = useTransform(count, Math.round);
//     const [displayValue, setDisplayValue] = useState(conval);

//     useEffect(() => {
//       const animation = animate(count, finalEndVal, {
//         duration: 2
//       });

      
//       const unsubscribe = rounded.on("change", (v) => {
//         setDisplayValue(v);
//       });

//       return () => {
//         animation.stop();
//         unsubscribe();
//       };
//     }, [finalEndVal]);

//     return <motion.h1 whileInView={{ opacity: 1, scale: 1 }} initial={{opacity:0}}>{displayValue < 10 ? `0${displayValue}` : displayValue}</motion.h1>;
// }




'use client'

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function MotionCount({ conval, Endval }) {
    const finalEndVal = Number(Endval);
    const count = useMotionValue(conval);
    const rounded = useTransform(count, Math.round);
    const [displayValue, setDisplayValue] = useState(conval);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const animation = animate(count, finalEndVal, {
                duration: 2
            });

            const unsubscribe = rounded.on("change", (v) => {
                setDisplayValue(v);
            });

            return () => {
                animation.stop();
                unsubscribe();
            };
        }
    }, [isInView, finalEndVal]);

    return (
        <motion.h1
            ref={ref}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0 }}
        >
            {displayValue < 10 ? `0${displayValue}` : displayValue}
        </motion.h1>
    );
}
