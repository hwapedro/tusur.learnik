export interface LessonEndPageProps {
  setLessonDone: (lessonDone: boolean) => void
  startNewLesson: () => void
}

export interface ParamTypes {
  courseIndex: string
  lessonIndex: string
}
