import { Link } from "react-router-dom"

const HomePageNav = () => {
  return (
    <header>
      <p>FREE-EZ</p>
      <nav>
        <Link to={"/"}></Link>
      </nav>
    </header>
  )
}

export default HomePageNav