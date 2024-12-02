import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "../ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import "./LoginCard.css"
import { useState } from "react"
type CardWithFormProps = {
  page: string
}
const CardWithForm: React.FC<CardWithFormProps> = ({ page }) => {
  const [teacher, setTeacher] = useState(false)
  const handleSwitch = () => {
    setTeacher((prev) => !prev)
  }
  return (
    <>
      {page === "login" ? (
        <Card
          className="w-[544px]"
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
              Вход
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-6">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Логин</Label>
                  <Input id="name" placeholder="Введите логин" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Пароль</Label>
                  <Input id="name" placeholder="Введите пароль" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="buttonLogin">Войти</Button>
          </CardFooter>
        </Card>
      ) : (
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
            <div className="switchContainer">
              <Switch onClick={handleSwitch} />
              <div className="textSwitchContainer">Я преподаватель</div>
            </div>
            {!teacher ? (
              <form style={{ display: "flex", flexDirection: "column" }}>
                <div className="grid w-full items-center gap-6">
                  <div className="blockInputUserInfo">
                    <div
                      className="flex flex-col space-y-1.5"
                      style={{ width: "100%" }}
                    >
                      <Label htmlFor="name">ИСУ</Label>
                      <Input id="name" placeholder="Введите ИСУ" />
                    </div>
                    <div
                      className="flex flex-col space-y-1.5"
                      style={{ width: "100%" }}
                    >
                      <Label htmlFor="name">Курс</Label>
                      <Input id="name" placeholder="Введите курс" />
                    </div>
                  </div>
                  <div className="blockInputUserInfo">
                    <div
                      className="flex flex-col space-y-1.5"
                      style={{ width: "100%" }}
                    >
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Введите Имя" />
                    </div>
                    <div
                      className="flex flex-col space-y-1.5"
                      style={{ width: "100%" }}
                    >
                      <Label htmlFor="name">Фамилия</Label>
                      <Input id="name" placeholder="Введите Фамилию" />
                    </div>{" "}
                  </div>
                  <div className="blockInputUserInfo">
                    <div
                      className="flex flex-col space-y-1.5"
                      style={{ width: "100%" }}
                    >
                      <Label htmlFor="name">Факультет</Label>
                      <Input id="name" placeholder="Введите факультет" />
                    </div>
                    <div
                      className="flex flex-col space-y-1.5"
                      style={{ width: "100%" }}
                    >
                      <Label htmlFor="name">Программа</Label>
                      <Input id="name" placeholder="Введите программу" />
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <form style={{ display: "flex", flexDirection: "column" }}>
                <div className="grid w-full items-center gap-6">
                  <div className="blockInputUserInfo">
                    <div
                      className="flex flex-col space-y-1.5"
                      style={{ width: "100%" }}
                    >
                      <Label htmlFor="name">ИСУ</Label>
                      <Input id="name" placeholder="Введите ИСУ" />
                    </div>
                  </div>
                  <div className="blockInputUserInfo">
                    <div
                      className="flex flex-col space-y-1.5"
                      style={{ width: "100%" }}
                    >
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Введите Имя" />
                    </div>
                    <div
                      className="flex flex-col space-y-1.5"
                      style={{ width: "100%" }}
                    >
                      <Label htmlFor="name">Фамилия</Label>
                      <Input id="name" placeholder="Введите Фамилию" />
                    </div>{" "}
                  </div>
                </div>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="buttonLogin">Войти</Button>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
export default CardWithForm
