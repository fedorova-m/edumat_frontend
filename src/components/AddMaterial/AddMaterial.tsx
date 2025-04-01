import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface AddMaterialModalProps {
  isOpen: boolean
  onClose: () => void
}

const AddMaterialModal: React.FC<AddMaterialModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")

  const handleAddMaterial = () => {
    // Здесь можете добавить логику для обработки данных (например, отправку на сервер)
    console.log("Добавляем материал:", { title, description, tags, File })

    onClose() // Закрытие модального окна после добавления материала
  }

  if (!isOpen) return null // Если модальное окно не открыто, ничего не рендерим

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg p-6"
        style={{
          width: "650px",
          height: "701px",
          borderRadius: "24px",
          padding: "40px 60px 60px 60px",
        }}
      >
        <div className="bg-white" style={{ width: "530", height: "601" }}>
          <button
            onClick={onClose}
            className="top-17px right-17px"
            style={{
              position: "fixed",
              top: "calc(50vh - 350px + 24px)",
              right: "calc(50vw - 325px + 24px)",
            }}
          >
            <X size={24} />
          </button>
          <h2
            className="text-xl font-semibold mb-8"
            style={{
              fontWeight: "600",
              fontSize: " 24px",
              lineHeight: "133%",
              letterSpacing: " -0.01em",
              color: "#0f172a",
            }}
          >
            Добавить материал
          </h2>

          <label className="block mb-2 text-md font-medium">Название</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Введите название"
            className="mb-4"
          />

          <label className="block mb-2 text-md font-medium">
            Описание материала
          </label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Введите описание"
            className="mb-4"
          />

          <label className="block mb-2 text-md font-medium">Теги</label>
          <Input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Введите не более 3 тегов"
            className="mb-4"
          />

          <label className="block mb-2 text-md font-medium">Файл</label>
          <div
            className="border-2 border-dashed border-gray-400 h-5 mb-5 flex items-center justify-center"
            style={{ minHeight: "171px", borderRadius: "8px" }}
          >
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12.07C11.7406 5.9983 11.4167 5.91525 11.1271 5.75824C10.8375 5.60123 10.5912 5.37512 10.41 5.1L9.59 3.9C9.40882 3.62488 9.1625 3.39877 8.8729 3.24176C8.58331 3.08475 8.25941 3.0017 7.93 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 19.1 2.9 20 4 20Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 10V16"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 13L12 16L9 13"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: "400",
                  fontSize: " 14px",
                  lineHeight: "171%",
                  color: "#94a3b8",
                }}
              >
                Перенесите файл сюда
              </p>
              <div
                className=""
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: "500",
                  fontSize: " 14px",
                  lineHeight: "171%",
                  color: "#0f172a",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: " 1px solid #e2e8f0",
                }}
              >
                Загрузить файл
              </div>
              {/* Добавьте логику для управления файлом при необходимости */}
            </div>
          </div>

          <Button
            className="w-full"
            onClick={handleAddMaterial}
            style={{ background: "#0f172a" }}
          >
            Добавить
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddMaterialModal
