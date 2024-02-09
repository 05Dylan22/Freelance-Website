import HomePageNav from "../PageElements/HomePageNav"
import HomeHero from "../PageElements/HomeHero"
import Ways2FindWork from "../PageElements/Ways2FindWork"
import useObserver from "../Hooks/useObserver"
import { useEffect, useRef } from "react"
import StartingSteps from "../PageElements/StartingSteps"

const HomePage = () => {
  const earningsContainer = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!earningsContainer.current) return
    useObserver([earningsContainer.current])
  })
  return (
    <>
      <HomePageNav/>
      <HomeHero/>
      <Ways2FindWork/>
      <div ref={earningsContainer} className="keep-earnings-container">
        <h3 className="keep-earnings-title">Keep Your Earnings In Your Pocket</h3>
        <p className="keep-earnings-p">Unlike other freelance platforms that charge a large percentage of your earnings, we charge a small fixed fee of $9.99. And since we don't handle payment transactions, we won't be taking a transaction fee from you as well.</p>
      </div>
      <StartingSteps/>
    </>
  )
}

export default HomePage