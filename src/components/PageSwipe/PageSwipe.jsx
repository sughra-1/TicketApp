import "./PageSwipe.css"
import { useLocation, useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Pages = ["/", "/events", "/order"]

export default function PageSwipe({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const currentIndex = Pages.indexOf(location.pathname);
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);
    const [direction, setDirection] = useState(1);

    function swipeStart(e) {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    }

    function swipeEnd(e) {
        if (currentIndex === -1 || touchStartX.current === null) return;
        const diffX = touchStartX.current - e.changedTouches[0].clientX;
        const diffY = touchStartY.current - e.changedTouches[0].clientY;
        touchStartX.current = null;
        touchStartY.current = null;

        if (Math.abs(diffX) < Math.abs(diffY)) return;

        if (diffX > 50 && currentIndex < Pages.length - 1) {
            setDirection(1);
            navigate(Pages[currentIndex + 1]);
        } else if (diffX < -50 && currentIndex > 0) {
            setDirection(-1);
            navigate(Pages[currentIndex - 1]);
        }
    }

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
    }

    return (
        <div className="pageswipe__wrapper" onTouchStart={swipeStart} onTouchEnd={swipeEnd}>
            <div className="pageswipe__container">
                <AnimatePresence mode="sync" custom={direction}>
                    <motion.div
                        key={location.pathname}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.18, ease: "easeInOut" }}
                        className="pageswipe__page"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="pageswipe__dots">
                {Pages.map((path, i) => (
                    <span
                        key={i}
                        className={`pageswipe__index ${i === currentIndex ? "pageswipe__dot--active" : ""}`}
                        onClick={() => {
                            setDirection(i > currentIndex ? 1 : -1);
                            navigate(path);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
