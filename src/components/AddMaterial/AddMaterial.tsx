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
    onClose()
  }

  if (!isOpen) return null // Если модальное окно не открыто, ничего не рендерим

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg p-6"
        style={{ width: "650px", height: "701px" }}
      >
        <div className="bg-white" style={{ width: "530", height: "601" }}>
          <button onClick={onClose} className="top-17px right-17px">
            <X size={24} />
          </button>
          <h2 className="text-xl font-semibold mb-8">Добавить материал</h2>

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
          <div className="border-2 border-dashed border-gray-400 h-20 mb-4 flex items-center justify-center">
            <p>Перенесите файл сюда</p>
            {/* Добавьте логику для управления файлом при необходимости */}
          </div>

          <Button className="w-full" onClick={handleAddMaterial}>
            Добавить
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddMaterialModal
