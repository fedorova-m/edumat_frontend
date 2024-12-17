import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useForm } from "react-hook-form"
import "../loginCard/LoginCard.css"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { client } from "@/lib/http"
import { isAxiosError } from "axios"
import { Link } from "react-router"

const formSchema = z.object({
  isunumber: z.string().length(6, { message: "Должно быть 6 символов" }),
  course: z.string().length(1, { message: "Должно быть 1 символ" }),
  first_name: z.string().min(1, { message: "Заполните поле" }),
  last_name: z.string().min(1, { message: "Заполните поле" }),
  email: z.string().email("Некорректный email"),
  username: z.string().min(1, { message: "Заполните поле" }),
  password: z.string().min(6, { message: "Пароль слишком короткий" }),
})

export function RegisterForm() {
  const [teacher, setTeacher] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isunumber: "",
      course: "",
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      email: "",
    },
  })
  const { isValid } = form.formState
  const toggleTeacher = () => {
    setTeacher((prev) => !prev)
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await client.post("customuser/", values)

      alert("Вы успешно зарегистрировались")
    } catch (e) {
      if (isAxiosError(e)) {
        const errors = e?.response?.data

        if (!errors) {
          return
        }

        Object.keys(errors).forEach((field) => {
          const fieldError = errors[field]?.join(", ") || ""

          // @ts-ignore
          form.setError(field, { message: fieldError })
        })
      }
    }
  }

  return (
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
          <Switch onClick={toggleTeacher} />
          <div className="textSwitchContainer">Я преподаватель</div>
        </div>
        {!teacher ? (
          <Form {...form}>
            <form
              id="registerForm"
              onSubmit={form.handleSubmit(onSubmit)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="grid w-full items-center gap-6">
                <div className="flex justify-self-start items-center gap-3 w-full">
                  <FormField
                    control={form.control}
                    name="isunumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ИСУ</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Введите ИСУ"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Курс</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Введите курс"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-self-start items-center gap-3 w-full">
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Фамилия</FormLabel>
                        <FormControl>
                          <Input placeholder="Введите фамилию" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имя</FormLabel>
                        <FormControl>
                          <Input placeholder="Введите имя" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-self-start items-center gap-3 w-full">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имя пользователя</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Введите имя пользователя"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Пароль</FormLabel>
                        <FormControl>
                          <Input placeholder="Введите пароль" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="name">Факультет</Label>
                    <Input id="name" placeholder="Введите факультет" />
                  </div>
                  <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="name">Программа</Label>
                    <Input id="name" placeholder="Введите программу" />
                  </div> */}
                </div>

                <div className="flex justify-self-start items-center gap-3 w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Введите email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
        ) : (
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div className="grid w-full items-center gap-6">
              <div className="flex justify-self-start items-center gap-3 w-full;">
                <div
                  className="flex flex-col space-y-1.5"
                  style={{ width: "100%" }}
                >
                  <Label htmlFor="name">ИСУ</Label>
                  <Input id="name" placeholder="Введите ИСУ" />
                </div>
              </div>
              <div className="flex justify-self-start items-center gap-3 w-full;">
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
      </CardContent>{" "}
      <div className="footerRegistrForm">
        {isValid ? (
          <Link to="/">
            <CardFooter className="flex justify-between">
              <Button type="submit" form="registerForm" className="buttonLogin">
                Cоздать аккаунт
              </Button>
            </CardFooter>
          </Link>
        ) : (
          <CardFooter className="flex justify-between">
            <Button type="submit" form="registerForm" className="buttonLogin">
              Cоздать аккаунт
            </Button>{" "}
          </CardFooter>
        )}
        <Link to="/login">
          <div className="textBottomLoginCard">Уже есть аккаунт?</div>
        </Link>
      </div>
    </Card>
  )
}
