import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Subject {
  title: string
  info: string
  teacherName: string
  programm: string
  course: string
}

interface SubjectState {
  subjects: Subject[]
}

const initialState: SubjectState = {
  subjects: [
    {
      title: "Физика",
      info: "Основные материалы по физике, лекции и курсовые",
      teacherName: "Илья Петров",
      programm: "Мобильные и сетевые технологии",
      course: "1",
    },
    {
      title: "Хранение и обработка данных",
      info: "2 семестр",
      teacherName: "Олга Савельева",
      programm: "Компьютерные системы и технологии",
      course: "4",
    },
    {
      title: "Бизнес-модели",
      info: "Бизнес модели основных секторов",
      teacherName: "Александр Купчин",
      programm: "Програмная инженерия",
      course: " 3",
    },
    {
      title: "Математика",
      info: "Небольшое описание предмета",
      teacherName: "Петя Иванов",
      programm: "название программы",
      course: " 2",
    },
    {
      title: "Иностранный язык",
      info: "1 семестр на нескольих программах",
      teacherName: "Игорь Соколовский",
      programm: "название программы",
      course: "3",
    },
  ],
}

const subjectSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {
    addSubject(state, action: PayloadAction<Subject>) {
      state.subjects.push(action.payload)
    },
  },
})

export const { addSubject } = subjectSlice.actions
export const arr_sub = initialState.subjects
export default subjectSlice.reducer
