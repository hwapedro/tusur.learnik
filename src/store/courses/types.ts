export interface CoursesResult {
  result: object
  params: object
}

export interface CoursesState {
  courses: Array<Course>
  course: OneCourse
  loading: boolean
}

export interface OneCourseFetcher {
  lessons: Array<Lesson>
  lessonsDone: number
}

export interface OneCourse {
  title: string
  description: string
  lessons: Array<Lesson>
  lessonsDone: number
}

export interface Lesson {
  title: string
  description: string
  lessonIndex: number
  pagesShort: Array<PagesShort>
  _id: string
  difficulty: number
}

export interface Course {
  annotation: string
  title: string
  description: string
  courseIndex: number
  lessonsDone: number
  lessons: number
}


interface PagesShort {
  title: Language
  done: boolean
}

interface Language {
  ru: string
  en: string
}

