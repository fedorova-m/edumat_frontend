import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  ThumbsDown,
  ArrowLeft,
  Star,
  CircleCheck,
  ThumbsUp,
} from "lucide-react"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import AddMaterialModal from "@/components/AddMaterial/AddMaterial" // Импортируем ваш компонент
import { Link } from "react-router"

interface Material {
  title: string
  description: string
  uploadedBy: string
  uploadDate: string
  course: number
  tags: string[]
  likes: number
  dislikes: number
  isChecked: boolean
}

const mockMaterials: Material[] = [
  {
    title: "Курсовая 3",
    description:
      "Это конспект посвящен прекрасеному невероятному предмету математика и конрольной работе по теме логарифм.",
    uploadedBy: "Илья Петров",
    uploadDate: "11.12.24 10:00",
    course: 1,
    tags: ["курсовая", "физика", "материалы", "+3"],
    likes: 12,
    dislikes: 2,
    isChecked: true,
  },
  // Другие материалы...
  {
    title: "Лекция 2",
    description: "Описание лекции 2",
    uploadedBy: "Илья Петров",
    uploadDate: "11.12.24 10:00",
    course: 1,
    tags: ["лекция", "физика", "материалы"],
    likes: 7,
    dislikes: 0,
    isChecked: false,
  },
  {
    title: "Лекция 3",
    description: "Описание лекции 2",
    uploadedBy: "Илья Петров",
    uploadDate: "11.12.24 10:00",
    course: 1,
    tags: ["лекция", "физика", "материалы"],
    likes: 7,
    dislikes: 0,
    isChecked: false,
  },

  {
    title: "Лекция 3",
    description: "Описание лекции 3",
    uploadedBy: "Илья Петров",
    uploadDate: "17.12.24 10:00",
    course: 1,
    tags: [],
    likes: 2,
    dislikes: 0,
    isChecked: false,
  },
  {
    title: "Лекция 4",
    description: "Описание лекции 4",
    uploadedBy: "Илья Петров",
    uploadDate: "17.12.24 11:00",
    course: 1,
    tags: [],
    likes: 3,
    dislikes: 0,
    isChecked: false,
  },
  // Добавьте остальные материалы здесь...
]

const PageForSubject: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [materials] = useState<Material[]>(mockMaterials)

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

  return (
    <TooltipProvider>
      <div className="font-inter mx-[80px]" style={{ paddingBottom: "30px" }}>
        {/* Header */}
        <div style={{ width: "851px", height: "272px", marginTop: "50px" }}>
          <Link to="/account">
            {" "}
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-[16px] mb-[24px]"
              style={{
                width: "124px",
                height: "24px",
                marginLeft: "0px",
                marginTop: "0px",
              }}
            >
              <ArrowLeft size={20} /> К предметам
            </Button>
          </Link>
          <div className="flex items-center gap-[24px] mb-[24px]">
            <h1 className="text-[48px] font-extrabold">Физика</h1>
            <Button
              variant="outline"
              className="flex items-center gap-1"
              style={{ width: "40px", height: "40px" }}
            >
              <Star size={20} />
            </Button>
          </div>
          {/* информация о предмете */}
          <div className="flex items-start">
            <div className="flex flex-col gap-2 text-[16px] w-[50%]">
              <p>
                Преподаватель: <span className="font-regular">Илья Петров</span>
              </p>
              <p>
                Программа:{" "}
                <span className="font-regular">
                  Мобильные и сетевые технологии
                </span>
              </p>
              <p>
                Курс: <span className="font-regular">1</span>
              </p>
            </div>
            <div className="w-px bg-gray-300 mx-[24px]">
              <svg
                width="2"
                height="88"
                viewBox="0 0 2 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0V88" stroke="#CBD5E1" />
              </svg>
            </div>
            <div
              className="text-[20px] font-regular"
              style={{
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "140%",
                color: "#0f172a",
              }}
            >
              Основные материалы по физике, лекции и курсовые
            </div>
          </div>
          <Button
            className="mt-6"
            style={{
              width: "233px",
              height: "40px",
              fontSize: "14px",
              fontWeight: "500",
              border: "1px solid #e2e8f0",
              borderRadius: "6px",
              background: "#fff",
              color: "#0f172a",
            }}
          >
            Редактировать информацию
          </Button>
        </div>

        {/* Search and Filters */}
        <div
          className="flex items-center justify-between mb-8"
          style={{ height: "40px", marginTop: "80px" }}
        >
          <div className="flex items-center gap-3" style={{ width: "668px" }}>
            <Input placeholder="Поиск..." className="w-[410px]" />
            <Button
              variant="outline"
              className="w-[95px] h-[40px] font-medium text-[14px]"
              style={{ border: "none" }}
            >
              Фильтры
            </Button>
            <Button
              variant="outline"
              className="w-[139px] h-[40px] font-medium text-[14px]"
              style={{ border: "none" }}
            >
              Сначала новые
            </Button>
          </div>
          <Button onClick={handleOpenModal}>Добавить материал</Button>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-3 gap-x-[24px] gap-y-[32px]">
          {materials.map((material, index) => (
            <Card
              key={index}
              className="relative p-4"
              style={{ paddingBottom: "35px" }}
            >
              <CardHeader className="flex items-left justify-between mb-[8px]">
                <div className="flex items-left gap-[12px]">
                  <CardTitle>{material.title}</CardTitle>
                  {material.isChecked && (
                    <CircleCheck size={20} className="text-green-500" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p
                      className="text-gray-600 cursor-pointer"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {material.description}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{material.description}</p>
                  </TooltipContent>
                </Tooltip>
                <p className="text-sm text-gray-500 mt-2">
                  Загружено: {material.uploadedBy}
                </p>
                <p className="text-sm text-gray-500">
                  Дата загрузки: {material.uploadDate}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Курс: {material.course}
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {material.tags.length > 0 ? (
                    material.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        className="leading-tight"
                        style={{
                          background: "#efefef",
                          fontFamily: " var(--font-family)",
                          fontWeight: "500",
                          fontSize: " 12px",
                          lineHeight: " 167%",
                          color: "#334155",
                        }}
                      >
                        {tag}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-gray-400 text-sm"></span>
                  )}
                </div>
                <div className="flex items-center gap-[16px] absolute bottom">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="flex items-center gap-1"
                  >
                    <ThumbsUp size={20} /> {material.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="flex items-center gap-1"
                  >
                    <ThumbsDown size={20} /> {material.dislikes}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Модальное окно добавления материала */}
        <AddMaterialModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </TooltipProvider>
  )
}

export default PageForSubject
