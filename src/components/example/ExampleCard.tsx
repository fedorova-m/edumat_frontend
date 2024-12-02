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

export function CardWithForm() {
  return (
    <Card
      className="w-[544px]"
      style={{
        height: "420px",
        borderRadius: "24px",
        paddingInline: "60px",
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
  )
}
