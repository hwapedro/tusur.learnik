import React, { FC, lazy, useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router'
import { useStore } from 'effector-react'
import io from 'socket.io-client'

import { profileStore } from '../../store/profile/model'
import { authStore } from '../../store/auth/model'
import * as ROUTES from '../../global/routes'
import RecoverPassword from './Authorization/NewPassword/RecoverPassword/RecoverPassword'
import NewPassword from './Authorization/NewPassword/SendPassword/SendPassword'
import { Layout } from './Layout/Layout'
import { CoursesPage } from './Activities/CoursesPage/CoursesPage'
import { CoursePage } from './Activities/CoursePage/CoursePage'
import { LessonPage } from './Activities/LessonPage/LessonPage'
import { ArenaPage } from './Activities/ArenaPage/ArenaPage'
import { ArenaHistoryPage } from './Activities/ArenaHistoryPage/ArenaHistoryPage'
import { ProfilePage } from './Activities/ProfilePage/ProfilePage'
import { NewsPage } from './News/NewsPage/NewsPage'
import { ArticlePage } from './News/ArticlePage/ArticlePage'
import { NotificationList } from '../../shared/Notification/NotificationList/NotificationList'
import { AchievementsPage } from './Activities/AchievementsPage/AchievementsPage'
import { Authorization } from './Authorization/Authorization'
import { Page404 } from './404/404'

import { PreloaderWrapperProps } from './App.interface'

import { getProfile, addNotification, getAchievements } from '../../store/profile/events'
import { enterRoom, setArenaVictory, setQueue } from '../../store/arena/events'

const AuthRoutes: FC = () => (
  <Switch>
    <Route exact path="/" component={Authorization} />
    <Route path={ROUTES.RESET_PASSWORD} component={RecoverPassword} />
    <Route path={ROUTES.NEW_PASSWORD} component={NewPassword} />
    <Redirect to="/" />
  </Switch>
)

const ActivityRoutes: FC = () => (
  <WithPreload>
    <Switch>
      <Route exact path={ROUTES.COURSES_PAGE}>
        <WithLayout>
          <CoursesPage />
        </WithLayout>
      </Route>
      <Route exact path={ROUTES.COURSE_PAGE}>
        <WithLayout>
          <CoursePage />
        </WithLayout>
      </Route>
      <Route exact path={ROUTES.PAGE}>
        <WithLayout>
          <LessonPage />
        </WithLayout>
      </Route>
      <Route exact path={ROUTES.NEWS_PAGE}>
        <WithLayout>
          <NewsPage />
        </WithLayout>
      </Route>
      <Route exact path={ROUTES.NEWS_ARTICLE_PAGE}>
        <WithLayout>
          <ArticlePage />
        </WithLayout>
      </Route>
      <Route exact path={ROUTES.PROFILE}>
        <WithLayout>
          <ProfilePage />
        </WithLayout>
      </Route>
      <Route exact path={ROUTES.ACHIEVEMENTS_PAGE}>
        <WithLayout>
          <AchievementsPage />
        </WithLayout>
      </Route>

      <Route exact path={ROUTES.ARENA_PAGE}>
        <WithLayout>
          <ArenaPage />
        </WithLayout>
      </Route>

      <Route exact path={ROUTES.ARENA_HISTORY}>
        <WithLayout>
          <ArenaHistoryPage />
        </WithLayout>
      </Route>

      <Route>
        <WithLayout>
          <Page404 />
        </WithLayout>
      </Route>
    </Switch>
  </WithPreload>
)

export const AppRoutes: FC = () => {
  const { isLogin } = useStore(authStore)
  return isLogin ? <ActivityRoutes /> : <AuthRoutes />
}

const socket = io('https://socket.learnik.fun')
export const SocketContext = React.createContext(socket)

const WithPreload: FC<PreloaderWrapperProps> = ({ children }) => {
  const { loading } = useStore(profileStore)
  const history = useHistory()

  useEffect(() => {
    socket.on('connect', async () => {
      console.log('Client has connected to the server!')
      socket.send({
        type: 'auth',
        token: localStorage.getItem('token'),
      })
    })

    socket.on('message', (data: any) => {
      console.log(data)
      switch (data.type) {
        case 'badge': {
          addNotification(data.badge)
          break
        }
        case 'joinArena': {
          // setQueue({ time: new Date().getTime(), queue: false, courseIndex: 0 })
          break
        }
        case 'opponentFound': {
          setQueue({ time: new Date().getTime(), queue: false, courseIndex: 0 })
          break
        }
        case 'wonArena': {
          setArenaVictory({ victory: 'win' })
          break
        }
        case 'lostArena': {
          setArenaVictory({ victory: 'lose' })
          break
        }
        case 'draw': {
          setArenaVictory({ victory: 'draw' })
          break
        }
        case 'opponentFound': {
          console.log('opponentFound')

          const { opponent } = data
          enterRoom({ opponent })

          history.push(`/arena`)

          socket.send({
            type: 'leaveArena',
          })
          // this.ROOM_ID = room;
          // this.opponent = opponent;
          // this.task = room.tasks[0];
          // this.room = room;
          // clearInterval(this.timeInQueueInterval);
          // this.nextQuestion();
          break
        }
        default: {
          console.log('Strange response', data)
        }
      }
    })
    getProfile(null)
    getAchievements({})
  }, [])

  if (loading) {
    return <div>loading</div>
  }
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}

const WithLayout: FC<PreloaderWrapperProps> = ({ children }) => {
  return (
    <Layout>
      {children}
      <NotificationList />
    </Layout>
  )
}
