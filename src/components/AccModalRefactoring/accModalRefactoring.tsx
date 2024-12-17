import { Label } from "@radix-ui/react-label"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import "./accModalRefactoring.css"
import React, { useState } from "react"
type AccModalRefactoringProps = {
  setModalAccountRefactoring: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void
}
export const AccModalRefactoring: React.FC<AccModalRefactoringProps> = ({
  setModalAccountRefactoring,
}) => {
  const [isuInput, setIsuInput] = useState("")
  const [nameInput, setNameInput] = useState("")
  const [surnameInput, setSurnameInput] = useState("")
  const [courseInput, setCourseInput] = useState("")
  const [programmInput, setProgrammInput] = useState("")
  const [facultyInput, setFacultyInput] = useState("")
  const handleButtonAccRefactor = (
    isuInput: string,
    courseInput: string,
    nameInput: string,
    surnameInput: string,
    facultyInput: string,
    programmInput: string
  ) => {
    if (
      isuInput === "" ||
      courseInput === "" ||
      nameInput === "" ||
      surnameInput === "" ||
      facultyInput === "" ||
      programmInput === ""
    ) {
      return null
    } else {
      setModalAccountRefactoring(false)
    }
  }
  const onSubmitAccRefactoring = (event: React.FormEvent) => {
    event.preventDefault()
    console.log({
      isuInput,
      courseInput,
      nameInput,
      surnameInput,
      facultyInput,
      programmInput,
    })
    setIsuInput(""),
      setCourseInput(""),
      setNameInput(""),
      setSurnameInput(""),
      setFacultyInput(""),
      setProgrammInput("")
  }
  return (
    <div className="accModalRefactoring">
      <Card
        className="w-[584px]"
        style={{
          borderRadius: "24px",
          paddingInline: "60px",
          paddingBottom: "30px",
        }}
      >
        <CardHeader>
          <CardTitle
            style={{
              fontSize: "48px",
              fontWeight: "800",
              paddingBottom: "16px",
              paddingTop: "26px",
            }}
          >
            О себе
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={onSubmitAccRefactoring}
          >
            <div className="grid w-full items-center gap-6">
              <div className="blockInputUserInfo">
                <div
                  className="flex flex-col space-y-1.5"
                  style={{ width: "100%" }}
                >
                  <Label htmlFor="name">ИСУ</Label>
                  <Input
                    id="name"
                    placeholder="Введите ИСУ"
                    value={isuInput}
                    onChange={(e) => setIsuInput(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="flex flex-col space-y-1.5"
                  style={{ width: "100%" }}
                >
                  <Label htmlFor="name">Курс</Label>
                  <Input
                    id="name"
                    placeholder="Введите курс"
                    value={courseInput}
                    onChange={(e) => setCourseInput(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="blockInputUserInfo">
                <div
                  className="flex flex-col space-y-1.5"
                  style={{ width: "100%" }}
                >
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Введите Имя"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="flex flex-col space-y-1.5"
                  style={{ width: "100%" }}
                >
                  <Label htmlFor="name">Фамилия</Label>
                  <Input
                    id="name"
                    placeholder="Введите Фамилию"
                    value={surnameInput}
                    onChange={(e) => setSurnameInput(e.target.value)}
                    required
                  />
                </div>{" "}
              </div>
              <div className="blockInputUserInfo">
                <div
                  className="flex flex-col space-y-1.5"
                  style={{ width: "100%" }}
                >
                  <Label htmlFor="name">Факультет</Label>
                  <Input
                    id="name"
                    placeholder="Введите факультет"
                    value={facultyInput}
                    onChange={(e) => setFacultyInput(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="flex flex-col space-y-1.5"
                  style={{ width: "100%" }}
                >
                  <Label htmlFor="name">Программа</Label>
                  <Input
                    id="name"
                    placeholder="Введите программу"
                    value={programmInput}
                    onChange={(e) => setProgrammInput(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="buttonLogin"
            style={{ width: "100%" }}
            onClick={() =>
              handleButtonAccRefactor(
                isuInput,
                courseInput,
                nameInput,
                surnameInput,
                facultyInput,
                programmInput
              )
            }
          >
            Обновить данные
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
