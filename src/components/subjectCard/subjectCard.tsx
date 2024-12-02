import "./subjectCard.css"
const SubjectCard = ({
  title,
  info,
  teacherName,
  programm,
  course,
}: AppProps) => {
  return (
    <div className="subjectCard">
      <div className="headerSubjectCard">
        <div className="titleSubjectCard">{title}</div>
        <svg
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
      </div>
      <div className="informacionSubjectCard">{info}</div>
      <div className="infoTextBlockSubjectCard">
        <div className="infoTextSubjectCard">Преподаватель: {teacherName}</div>
        <div className="infoTextSubjectCard">Программа: {programm}</div>
        <div className="infoTextSubjectCard">Курс: {course}</div>
      </div>
    </div>
  )
}
type AppProps = {
  title: string
  info: string
  teacherName: string
  programm: string
  course: number
}
export default SubjectCard
