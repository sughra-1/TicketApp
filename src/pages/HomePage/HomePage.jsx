import "./homePage.css"
import logo from "../../assets/logo.png"

export default function HomePage() {
  return (
    <div className="homepage__container">
      <div className="homepage__logo">
      <img src={logo} alt="Logo" />
      <h1 className="homepage__title">Where It's @</h1>
      <p className="homepage__subtitle">Ticketing made easy</p>
    </div>
    </div>
  )
}
