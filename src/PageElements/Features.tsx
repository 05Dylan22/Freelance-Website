import { useRef, useEffect } from "react"
import useObserver from "../Hooks/useObserver"
import "../styles/Features.css"

const Features = () => {
  //CREATE AN ANIMATION WHEN THIS SECTION SHOWS
  //THAT SLIDES EACH CHECK MARK IN ONE BY ONE
  const feature1 = useRef<HTMLParagraphElement | null>(null)
  const feature2 = useRef<HTMLParagraphElement | null>(null)
  const feature3 = useRef<HTMLParagraphElement | null>(null)
  const feature4 = useRef<HTMLParagraphElement | null>(null)
  const feature5 = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if (!feature1.current || !feature2.current || !feature3.current || !feature4.current || !feature5.current) return
    useObserver([feature1.current, feature2.current, feature3.current, feature4.current, feature5.current])
  })
  return (
    <section className="features-section">
      <p><span className="features-t1">More Features.</span><br/><span className="features-t2">Less Money.</span></p>
      <div className="show-features">
        <p ref={feature1} className="feature">Personable and sharable portfolio<span>&#10003;</span></p>
        <p ref={feature2} className="feature">Access to job postings<span>&#10003;</span></p>
        <p ref={feature3} className="feature">Be found in client searches<span>&#10003;</span></p>
        <p ref={feature4} className="feature">Predefinded project offerings<span>&#10003;</span></p>
        <p ref={feature5} className="feature">In app chat<span>&#10003;</span></p>
      </div>
    </section>
  )
}

export default Features