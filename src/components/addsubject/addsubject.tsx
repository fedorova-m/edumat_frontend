import { Button } from "@/components/ui/button"; // Импортируем компонент Button
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Импортируем компоненты для карточки
import { Input } from "@/components/ui/input"; // Импортируем поле ввода
import { Label } from "@/components/ui/label"; // Импортируем метки
import { useState } from "react"; // Импортируем хук useState

type AddSubjectCardProps = {
  page: string;
};

const AddSubjectCard: React.FC<AddSubjectCardProps> = ({ page }) => {
  const [subjectName, setSubjectName] = useState('');
  const [description, setDescription] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [course, setCourse] = useState('');
  const [program, setProgram] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      subjectName,
      description,
      teacherName,
      course,
      program,
    });
    setSubjectName('');
    setDescription('');
    setTeacherName('');
    setCourse('');
    setProgram('');
  };

  return (
    <>
      {page === "addSubject" && (
        <Card
          className="w-[544px]"
          style={{
            borderRadius: "24px",
            paddingInline: "40px",
            paddingBottom: "30px",
          }}
        >
          <CardHeader>
            <CardTitle style={{
              fontSize: "36px",
              fontWeight: "800",
              paddingBottom: "16px",
              paddingTop: "26px",
            }}>
              Добавить предмет
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-6">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="subjectName">Название предмета:</Label>
                  <Input
                    id="subjectName"
                    placeholder="Введите название"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Описание предмета:</Label>
                  <textarea
                    id="description"
                    placeholder="Введите описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    required
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
                    <Label htmlFor="course">Курс:</Label>
                    <Input
                      id="course"
                      placeholder="Введите курс"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="program">Программа:</Label>
                    <Input
                      id="program"
                      placeholder="Введите программу"
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      required
                    />
                  </div>
                <CardFooter className="flex justify-between mt-4">
                  <Button type="submit" className="buttonAddSubject">Добавить</Button>
                </CardFooter>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <AddSubjectCard page="addSubject" />
    </div>
  );
};

export default App;