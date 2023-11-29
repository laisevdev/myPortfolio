import { useRef } from "react"
import { useInView } from "framer-motion"

const InView = ({children}) => {
const ref = useRef(null);
const isInView = useInView(ref, {once: true})
  return (
    <section ref={ref}>
        <span
            style = {{
                transform: isInView ? "none" : "translateY(800px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}
            >
            {children}      
        </span>
    </section>
  )
}

export default InView