import "../styles/HomeHero.css"
import { Link } from "react-router-dom"

const HomeHero = () => {
  return (
    <section className="home-hero-section">
      <h1 className="main-title home-hero-title">Start Finding Freelance Work Today</h1>
      <p>With only 3 simple steps, you can start filling your client pipeline</p>
      <div className="b-flex home-hero-ctas">
        <Link className="link-no-style brdr-shdow hero-btn" to={"/"}>Find Work</Link>
        <p>OR</p>
        <Link className="link-no-style solid-btn hero-btn" to={"/"}>Find Freelancers</Link>
      </div>
      <h2 className="title find-work-title">More Ways To Find Work</h2>
    </section>
  )
}

export default HomeHero