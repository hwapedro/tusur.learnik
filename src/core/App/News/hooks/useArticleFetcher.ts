import { useStore } from 'effector-react'
import { useParams } from "react-router-dom"
import { profileStore } from "../../../../store/profile/model"
import { newsStore } from "../../../../store/news/model"
import { getArticle } from "../../../../store/news/events"

import { useEffect } from 'react'

export function useArticleFetcher() {
    const article = useStore(newsStore).article
    const { index } = useParams()
    const { info } = useStore(profileStore)
    const { language } = info

    useEffect(() => {
        getArticle(index)
    }, [language])

    return article
}
