import React from "react"
import "./accountModal.css"
type AccountModalProps = {
  isu: Number
  name: String
  surname: String
  course: Number
  faculty: String
  programm: String
  setModalAccountRefactoring: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void
}
const AccountModal: React.FC<AccountModalProps> = ({
  isu,
  name,
  surname,
  course,
  faculty,
  programm,
  setModalAccountRefactoring,
}) => {
  const handleModalAccountRefactoring = () => {
    setModalAccountRefactoring((pr) => !pr)
  }
  return (
    <div className="accountModal">
      <div className="headerAccountModal">Мой аккаунт</div>
      <div className="accountModalBlockInfo">
        <div className="textAccountModalBlockInfo">Ису: {String(isu)}</div>
        <div className="textAccountModalBlockInfo">Имя: {name}</div>
        <div className="textAccountModalBlockInfo">Фамилия: {surname}</div>
        <div className="textAccountModalBlockInfo">Курс: {String(course)}</div>
        <div className="textAccountModalBlockInfo">
          Факультет:{" "}
          {faculty.length > 22 ? faculty.slice(0, 22) + "..." : faculty}
        </div>
        <div className="textAccountModalBlockInfo">
          Программа:{" "}
          {programm.length > 22 ? programm.slice(0, 22) + "..." : programm}
        </div>
      </div>
      <div className="favoritesBlockAccountModal">
        <div className="textFavoritesBlockAccountModal">Избранное</div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33325 8.00049H12.6666"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 3.33398L12.6667 8.00065L8 12.6673"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="bottomAccountModal">
        <div
          className="textOneBottomAccountModal"
          onClick={handleModalAccountRefactoring}
        >
          Редактировать информацию
        </div>
        <div className="textTwoBottomAccountModal">Выйти из аккаунта</div>
      </div>
    </div>
  )
}
export default AccountModal
