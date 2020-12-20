export interface LessonState {
  loading: boolean
  lessonId: string
  page: Page
  pages: Array<navPage>
}

export interface Page {
  tasks: Array<Task>
  title: Language
  description: string
  lives: number
}

export interface navPage {
  title: Language
  done: boolean
  _id: string
}

export interface Task {
  _id: string
  info: CommonInfo & InfoTest
  type: string
  csrf: string
}

export interface CommonInfo {
  question: Language
  type: string
}

export interface InfoTest {
  choices: [
    {
      i: number
      c: Language
    }
  ]
  question: Language
  type: string
}

export interface Language {
  ru: string
  en: string
}
