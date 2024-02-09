import "../styles/HomePageNav.css"
import { Link } from "react-router-dom"
import Logo from "../Images/LanceaLogo.png"

const HomePageNav = () => {
  return (
    <header className="b-flex home-header">
      <img className="logo" src={Logo} alt="Company Logo" />
      <nav className="a-flex home-header-nav">
        <Link className="link-no-style nav-link btm-brdr" to={"/"}>Log In</Link>
        <Link className="link-no-style nav-link brdr-shdow"  to={"/"}>Find Work</Link>
      </nav>
    </header>
  )
}

export default HomePageNav