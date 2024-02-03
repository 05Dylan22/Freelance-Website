import "../styles/HomeHero.css"
import { Link } from "react-router-dom"

//RESPONSIVE DESIGN NEEDS UPDATED FOR 1225 MAYBE SET FINAL TO 1300 OR SOMETHING

const HomeHero = () => {
  return (
    <>
      <section className="home-hero-section">
        <img className="hero-img" src="https://media.istockphoto.com/vectors/freelance-developer-or-designer-working-at-homevector-character-vector-id1069451598?k=6&m=1069451598&s=612x612&w=0&h=zKaxANFPp9Snmx59rn9pbc5nn4oKlD7_-bO-wc8gpsc=" alt="Woman working on laptop" />
        <h1 className="main-title home-hero-title">Start Finding Freelance Work Today</h1>
        <p>With only 3 simple steps, you can start filling your client pipeline</p>
        <div className="b-flex home-hero-ctas">
          <Link className="link-no-style brdr-shdow hero-btn" to={"/"}>Find Work</Link>
          <p>OR</p>
          <Link className="link-no-style solid-btn hero-btn" to={"/"}>Find Freelancers</Link>
        </div>
      </section>
      <h2 className="title find-work-title">More Ways To Find Work</h2>
    </>
  )
}

export default HomeHero