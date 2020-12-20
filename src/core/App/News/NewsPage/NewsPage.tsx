import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

import { getMoreNews } from '../../../../store/news/events'
import { useNewsFetcher } from '../hooks/useNewsFetcher'

import {
  WrapperStyled,
  NewsWrapper,
  FirstRowImageWrapper,
  ImageStyled,
  ArticleTitleStyled,
  SecondRowArticleWrapper,
  SecondRowArticleContentWrapper,
  FirstRowArticleWrapper,
  FirstRowArticleContentWrapper,
  ArticleTimeStyled,
} from './NewsPage.style'

export const NewsPage: FC = () => {
  const { news, nextFrom } = useNewsFetcher()
  const history = useHistory()
  const [isLoadMore, setLoadMore] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setLoadMore(window.scrollY >= document.body.clientHeight * 0.9 - window.innerHeight)
    }
    console.log(document.body.clientHeight - window.innerHeight, window.scrollY)

    if (isLoadMore) {
      getMoreNews({ limit: 10, startFrom: nextFrom })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLoadMore])

  const goToArticle = (index: number) => {
    history.push(`news/${index}`)
  }

  return (
    <WrapperStyled>
      <NewsWrapper>
        {news.map((article, index) => {
          const isFirstRow = index % 5 < 3
          const date = new Date(article.date)
            .toLocaleString('ru', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            })
            .replace(/[/]/g, '.')

          return (
            <div onClick={() => goToArticle(article.index)}>
              <LazyLoad height={300} offset={-100}>
                {isFirstRow ? (
                  <FirstRowArcticle article={article} date={date} />
                ) : (
                  <SecondRowArcticle article={article} date={date} />
                )}
              </LazyLoad>
            </div>
          )
        })}
      </NewsWrapper>
    </WrapperStyled>
  )
}

interface ArcticleProps {
  date: string
  article: {
    icon: string
    title: string
  }
}

const FirstRowArcticle: FC<ArcticleProps> = ({ article, date }) => (
  <FirstRowArticleWrapper>
    <FirstRowImageWrapper>
      <ImageStyled src={article.icon} />
    </FirstRowImageWrapper>
    <FirstRowArticleContentWrapper>
      <ArticleTimeStyled>{date}</ArticleTimeStyled>
      <ArticleTitleStyled>{article.title}</ArticleTitleStyled>
    </FirstRowArticleContentWrapper>
  </FirstRowArticleWrapper>
)

const SecondRowArcticle: FC<ArcticleProps> = ({ article, date }) => (
  <SecondRowArticleWrapper image={article.icon}>
    <SecondRowArticleContentWrapper>
      <ArticleTimeStyled>{date}</ArticleTimeStyled>
      <ArticleTitleStyled>{article.title}</ArticleTitleStyled>
    </SecondRowArticleContentWrapper>
  </SecondRowArticleWrapper>
)
