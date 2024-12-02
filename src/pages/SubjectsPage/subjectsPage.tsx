import Header from "../../components/Header/header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import SubjectCard from "@/components/subjectCard/subjectCard"
import "./subjectsPage.css"
interface Subject {
  title: string
  info: string
  teacherName: string
  programm: string
  course: number
}
const SubjectPage = () => {
  const arr_sub: Subject[] = [
    {
      title: "Физика",
      info: "Небольшое описание предмета",
      teacherName: "Илья Петров",
      programm: "Мобильные и сетевые технологии",
      course: 1,
    },
    {
      title: "Математика",
      info: "Небольшое описание предметаНебольшое описание предметаНебольшое описание предметаНебольшое описание предметаНебольшое описание предметаНебольшое описание предметаНебольшое описание предмета",
      teacherName: "Оля Савельева",
      programm: "Инфокоммуникационные системы и технологии",
      course: 4,
    },
    {
      title: "Физика",
      info: "Небольшое описание предмета",
      teacherName: "Саша Курочкин",
      programm: "название программы",
      course: 3,
    },
    {
      title: "Математика",
      info: "Небольшое описание предмета",
      teacherName: "Петя Иванов",
      programm: "название программы",
      course: 2,
    },
    {
      title: "Английский язык",
      info: "Небольшое описание предмета",
      teacherName: "Игорь Соколовский",
      programm: "название программы",
      course: 3,
    },
  ]
  return (
    <div className="subjectPage">
      <Header />
      <div className="subjectBlockCenter">
        <div className="titleSubjectContainer">Предметы</div>

        <div className="searchBlock">
          <div className="textFilterBlockSubjectPage">
            <div className="">
              <Input
                id="name"
                placeholder="Поиск"
                style={{ minWidth: "410px" }}
              />
            </div>
            <div className="textFilterSubjectPage">Фильтры</div>
            <div className="textFilterSubjectPage">Сначала новые</div>
          </div>
          <Button className="buttonLogin">Создать предмет</Button>
        </div>
        <div className="subjectContainer">
          {arr_sub.map((sub, index) => (
            <SubjectCard
              key={index}
              title={sub.title}
              info={
                sub.info.length > 30 ? sub.info.slice(0, 30) + "..." : sub.info
              }
              teacherName={sub.teacherName}
              programm={sub.programm}
              course={sub.course}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubjectPage
