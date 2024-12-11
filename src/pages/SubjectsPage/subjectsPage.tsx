import Header from "../../components/Header/header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import SubjectCard from "@/components/subjectCard/subjectCard"
import "./subjectsPage.css"
import { useState } from "react"
import AddSubjectCard from "@/components/AddSubject/addSubject"
import AccountModal from "@/components/AccountModal/accountModal"
import { AccModalRefactoring } from "@/components/AccModalRefactoring/accModalRefactoring"
interface Subject {
  title: string
  info: string
  teacherName: string
  programm: string
  course: number
}
const SubjectPage = () => {
  const [modalAddSubject, setModalAddSubject] = useState(false)
  const [modalAccount, setModalAccount] = useState(false)
  const [modalAccountRefactoring, setModalAccountRefactoring] = useState(false)
  const handleButtonAddSubject = () => {
    setModalAddSubject((pr) => !pr)
  }
  const handleAccountRefactoring = () => {
    setModalAccountRefactoring((pr) => !pr)
  }

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
      {modalAccountRefactoring && (
        <div className="containerAccModalRefactoringSubjectPage">
          <div
            className="backgroundAccModalRefactoringSubjectPage"
            onClick={handleAccountRefactoring}
          ></div>
          <div className="accModalRefactoringSubjectPage">
            <AccModalRefactoring
              setModalAccountRefactoring={setModalAccountRefactoring}
            />
          </div>
        </div>
      )}
      {modalAddSubject && (
        <div className="modalContainerSubjectsPage">
          <div
            className="backgroundModalBlock"
            onClick={handleButtonAddSubject}
          ></div>
          <div className="modalAddSubject">
            {
              <AddSubjectCard
                page={"addSubject"}
                setModalAddSubject={setModalAddSubject}
              />
            }
          </div>
        </div>
      )}
      <Header setModalAccount={setModalAccount} />
      <div className="modalAccSubjectPage">
        {modalAccount && (
          <AccountModal
            isu={410542}
            name={"Мария"}
            surname={"Федорова"}
            course={1}
            faculty={"ПИН"}
            programm={"Мобильные и сетевые технологии"}
            setModalAccountRefactoring={setModalAccountRefactoring}
          />
        )}
      </div>

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
          <Button
            className="buttonLogin"
            style={{ maxWidth: "154px" }}
            onClick={handleButtonAddSubject}
          >
            Создать предмет
          </Button>
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
