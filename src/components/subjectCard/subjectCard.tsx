import { useState } from "react"
import "./subjectCard.css"
import { Link } from "react-router"
const SubjectCard = ({
  title,
  info,
  teacherName,
  programm,
  course,
}: AppProps) => {
  const [favoriteSub, setFavoriteSub] = useState(false)
  const handleFavoriteSubject = () => {
    setFavoriteSub((pr) => !pr)
  }
  return (
    <Link to="/material">
      <div className="subjectCard">
        <div className="headerSubjectCard">
          <div className="titleSubjectCard">{title}</div>
          {favoriteSub ? (
            <Link to="/account">
              <svg
                className="svgSubjectCard"
                onClick={handleFavoriteSubject}
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33329 1.3335L10.3933 5.50683L15 6.18016L11.6666 9.42683L12.4533 14.0135L8.33329 11.8468L4.21329 14.0135L4.99996 9.42683L1.66663 6.18016L6.27329 5.50683L8.33329 1.3335Z"
                  fill="black"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          ) : (
            <svg
              onClick={handleFavoriteSubject}
              className="svgSubjectCard"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66667 1.33325L10.7267 5.50659L15.3333 6.17992L12 9.42659L12.7867 14.0133L8.66667 11.8466L4.54667 14.0133L5.33333 9.42659L2 6.17992L6.60667 5.50659L8.66667 1.33325Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="informacionSubjectCard">{info}</div>
        <div className="infoTextBlockSubjectCard">
          <div className="infoTextSubjectCard">
            Преподаватель: {teacherName}
          </div>
          <div className="infoTextSubjectCard">Программа: {programm}</div>
          <div className="infoTextSubjectCard">Курс: {course}</div>
        </div>
      </div>
    </Link>
  )
}
type AppProps = {
  title: string
  info: string
  teacherName: string
  programm: string
  course: string
}
export default SubjectCard
