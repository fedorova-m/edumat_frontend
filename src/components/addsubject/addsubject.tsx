import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import "./addSubject.css"
type AddSubjectCardProps = {
  page: string
  setModalAddSubject: Function
}
const AddSubjectCard: React.FC<AddSubjectCardProps> = ({
  page,
  setModalAddSubject,
}) => {
  const [subjectName, setSubjectName] = useState("")
  const [description, setDescription] = useState("")
  const [teacherName, setTeacherName] = useState("")
  const [course, setCourse] = useState("")
  const [program, setProgram] = useState("")

  const handleButton = (
    subjectName: string,
    description: string,
    teacherName: string,
    course: string,
    program: string
  ) => {
    if (
      subjectName === "" ||
      description === "" ||
      teacherName === "" ||
      course === "" ||
      program === ""
    ) {
      return null
    } else {
      setModalAddSubject(false)
    }
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log({
      subjectName,
      description,
      teacherName,
      course,
      program,
    })
    setSubjectName("")
    setDescription("")
    setTeacherName("")
    setCourse("")
    setProgram("")
  }

  return (
    <div className="addSubject">
      {page === "addSubject" && (
        <Card
          className="w-[544px]"
          style={{
            borderRadius: "24px",
            paddingInline: "40px",
          }}
        >
          <CardHeader>
            <CardTitle
              style={{
                fontSize: "36px",
                fontWeight: "800",
                paddingBottom: "16px",
                paddingTop: "26px",
              }}
            >
              Добавить предмет
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-6">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="subjectName">Название предмета</Label>
                  <Input
                    id="subjectName"
                    placeholder="Введите название"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Описание предмета</Label>
                  <textarea
                    id="description"
                    placeholder="Введите описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    required
                    style={{ resize: "none", height: "80px" }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="teacherName">ФИО преподавателя:</Label>
                  <Input
                    id="teacherName"
                    placeholder="Введите ФИО"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="course">Курс</Label>
                  <Input
                    id="course"
                    placeholder="Введите курс"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="program">Программа</Label>
                  <Input
                    id="program"
                    placeholder="Введите программу"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    required
                  />
                </div>
                <CardFooter
                  className="flex justify-between mt-4"
                  style={{ width: "100%", paddingInline: "0px" }}
                >
                  <Button
                    type="submit"
                    className="buttonAddSubject"
                    onClick={() => {
                      handleButton(
                        subjectName,
                        description,
                        teacherName,
                        course,
                        program
                      )
                    }}
                  >
                    Добавить
                  </Button>
                </CardFooter>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default AddSubjectCard
