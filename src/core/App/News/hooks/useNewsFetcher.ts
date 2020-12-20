import { useStore } from 'effector-react'

import { profileStore } from "../../../../store/profile/model"
import { newsStore } from "../../../../store/news/model"
import { getNews } from "../../../../store/news/events"

import { useEffect } from 'react'

export function useNewsFetcher() {
    const news = useStore(newsStore).news
    const nextFrom = useStore(newsStore).nextFrom
    const { info } = useStore(profileStore)
    const { language } = info

    useEffect(() => {
        getNews({ limit: 10, startFrom: 0 })
    }, [language])

    return { news, nextFrom }
}
