import Header from "../../components/Header/header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import SubjectCard from "@/components/subjectCard/subjectCard"
import "./subjectsPage.css"
import { useState } from "react"
import AddSubjectCard from "@/components/AddSubject/addsubject"
import AccountModal from "@/components/AccountModal/accountModal"
import { AccModalRefactoring } from "@/components/AccModalRefactoring/accModalRefactoring"
import { useDispatch } from "react-redux"
import { addSubject } from "@/store/subjectSlice"
import { arr_sub } from "@/store/subjectSlice"
interface Subject {
  title: string
  info: string
  teacherName: string
  programm: string
  course: string
}

export const SubjectPage = () => {
  const [modalAddSubject, setModalAddSubject] = useState(false)
  const [modalAccount, setModalAccount] = useState(false)
  const [modalAccountRefactoring, setModalAccountRefactoring] = useState(false)
  const dispatch = useDispatch()
  const handleOpenAddSubject = () => {
    setModalAddSubject((pr) => !pr)
  }
  const handleButtonAddSubject = (newSubject: Subject) => {
    dispatch(addSubject(newSubject))
    setModalAddSubject((pr) => !pr)
    console.log()
  }
  const handleAccountRefactoring = () => {
    setModalAccountRefactoring((pr) => !pr)
  }

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
            onClick={handleOpenAddSubject}
          ></div>
          <div className="modalAddSubject">
            {
              <AddSubjectCard
                page={"addSubject"}
                setModalAddSubject={setModalAddSubject}
                onSubmit={handleButtonAddSubject}
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
            onClick={handleOpenAddSubject}
          >
            Создать предмет
          </Button>
        </div>
        <div className="subjectContainer">
          {arr_sub.map((sub, index) => (
            <div className="subjectCardPageSubject">
              <SubjectCard
                key={index}
                title={sub.title}
                info={
                  sub.info.length > 30
                    ? sub.info.slice(0, 30) + "..."
                    : sub.info
                }
                teacherName={sub.teacherName}
                programm={sub.programm}
                course={sub.course}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
