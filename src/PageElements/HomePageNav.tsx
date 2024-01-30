import "../styles/HomeHeroNav.css"
import { Link } from "react-router-dom"

const HomePageNav = () => {
  return (
    <header className="b-flex home-header">
      <p>FREE-EZ</p>
      <nav className="a-flex home-header-nav">
        <Link className="link-no-style nav-link" to={"/"}>Log In</Link>
        <Link className="link-no-style nav-link"  to={"/"}>Find Work</Link>
      </nav>
    </header>
  )
}

export default HomePageNav