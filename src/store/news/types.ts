export interface NewsState {
    loading: boolean
    news: Array<Article>
    article: Article
    nextFrom: number
}

interface Article {
    date: string,
    icon: string,
    index: number,
    description: string,
    title: string,
    _id: string
}