// 'use client';
// import { useEffect } from 'react';
// import Lenis from 'lenis';

// const SmoothScroll = () => {
//     useEffect(() => {
//         const lenis = new Lenis();

//         function raf(time) {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         }

//         requestAnimationFrame(raf);

//         return () => {
//             lenis.destroy();
//         };
//     }, []);

//     return {
//         stopScroll: () => lenisRef.current?.stop(),
//         startScroll: () => lenisRef.current?.start(),
//     };
// };

// export default SmoothScroll;





// 'use client';
// import { useEffect, useRef } from 'react';
// import Lenis from 'lenis';

// const SmoothScroll = () => {
//     const lenisRef = useRef(null);

//     useEffect(() => {
//         const lenis = new Lenis();
//         lenisRef.current = lenis;

//         function raf(time) {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         }

//         requestAnimationFrame(raf);

//         return () => {
//             lenis.destroy();
//         };
//     }, []);

//     // Return the control functions
//     return {
//         stopScroll: () => lenisRef.current?.stop(),
//         startScroll: () => lenisRef.current?.start(),
//     };
// };

// export default SmoothScroll;



// --------------------

'use client';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScroll = () => {
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis();

        function raf(time) {
            lenisRef.current.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisRef.current.destroy();
        };
    }, []);

    // The component doesn't return anything since it's only meant to manage smooth scrolling.
    return null;
};

export default SmoothScroll;
