export interface ProfileState {
  loading: boolean
  isLangMenuOpen: boolean
  info: Info
  theme: boolean
  stats: Stats
  achievements: Array<Badge>,
  achievementsNotif: Array<any>,
  achievement: any,
}

export interface Info {
  username: string
  language: string
  bday?: string
  email: string
  firstName: string
  lastName: string
  registrationDate?: string
  avatar: number
}

export interface Stats {
  courseCount: number
  examCount: number
  pointCount: number
  taskCount: number
}

export interface Badge {
  description: string
  icon: string
  mine: boolean
  title: string
  _id: string
}
