import acc_icon from "../../assets/AccountIcon.png"
import leftHeaderImg from "../../assets/RectangleHeader.png"
import "./header.css"
const Header = () => {
  return (
    <div className="header">
      <img src={leftHeaderImg} style={{ width: "132px", height: "22px" }} />
      <img src={acc_icon} style={{ width: "40px" }} />
    </div>
  )
}
export default Header
