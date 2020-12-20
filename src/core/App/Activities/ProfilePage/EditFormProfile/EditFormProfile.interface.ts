export interface EditFormProfileProps {
    setIsEdit: (isEdit: boolean) => void
    info: {
        username: string
        language: string
        bday?: string
        email: string
        firstName: string
        lastName: string
        registrationDate?: string
        avatar: number
    }
}

export interface EditProfileFormValues {
    email: string
    username: string
    firstName: string
    lastName: string
    bday: string
}
