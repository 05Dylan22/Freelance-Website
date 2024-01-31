import "../styles/HomePageNav.css"
import { Link } from "react-router-dom"

const HomePageNav = () => {
  return (
    <header className="b-flex home-header">
      <p className="temp-logo">FREE-EZ</p>
      <nav className="a-flex home-header-nav">
        <Link className="link-no-style nav-link btm-brdr" to={"/"}>Log In</Link>
        <Link className="link-no-style nav-link brdr-shdow"  to={"/"}>Find Work</Link>
      </nav>
    </header>
  )
}

export default HomePageNav