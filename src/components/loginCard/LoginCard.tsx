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
import "./LoginCard.css"
import { RegisterForm } from "@/components/RegisterForm/RegisterForm"
import { Link } from "react-router"
import "./LoginCard.css"
type CardWithFormProps = {
  page: string
}
const CardWithForm: React.FC<CardWithFormProps> = ({ page }) => {
  console.log(page)
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
                  <Input
                    id="name"
                    type="password"
                    placeholder="Введите пароль"
                  />
                </div>
              </div>
            </form>
          </CardContent>{" "}
          <Link to="/">
            <CardFooter className="flex justify-between">
              <Button className="buttonLogin">Войти</Button>
            </CardFooter>{" "}
          </Link>
          <Link to="/registration">
            <div className="textBottomLoginCard">Создать аккаунт</div>
          </Link>
        </Card>
      ) : (
        <RegisterForm />
      )}
    </>
  )
}
export default CardWithForm
