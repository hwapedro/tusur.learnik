import { RouteComponentProps } from 'react-router-dom'

export interface AuthorizationProps extends RouteComponentProps<any> {}

export interface AuthorizationState {
  isSignUpActive: boolean
}
