import { MutableRefObject, useEffect, useRef } from "react"
import "../styles/Ways2FindWork.css"
import useObserver from "../Hooks/useObserver"

const Ways2FindWork = () => {
  const element = useRef<HTMLElement | null>(null)
  useEffect(() => {
    if (!element.current) return
    useObserver(element.current)
  })

  return (
    <section ref={element} className="temp-styling">
      Next section on home page
    </section>
  )
}

export default Ways2FindWork