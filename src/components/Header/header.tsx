import React from "react"
import acc_icon from "../../assets/AccountIcon.png"
import leftHeaderImg from "../../assets/RectangleHeader.png"
import "./header.css"
type HeaderProps = {
  setModalAccount: (value: boolean | ((prevVar: boolean) => boolean)) => void
}
const Header: React.FC<HeaderProps> = ({ setModalAccount }) => {
  const handleIconAccount = () => {
    setModalAccount((pr: Boolean) => !pr)
  }
  return (
    <div className="header">
      <img src={leftHeaderImg} style={{ width: "132px", height: "22px" }} />
      <img
        className="imgIconAcc"
        src={acc_icon}
        style={{ width: "40px" }}
        onClick={handleIconAccount}
      />
    </div>
  )
}
export default Header
