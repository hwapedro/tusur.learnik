import React, { FC, MouseEvent, forwardRef, createRef } from 'react'


import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'
import {
  WrapperStyled,
  ArticleWrapper,
  ImageWrapper,
  ImageStyled,
  TitleWrapper,
  TitleStyled,
  MetaWrapper,
  DateStyled,
  TextStyled,
  BottomMetaWrapper,
  BeforeSocialWrapper,
  BeforeLineStyled,
  MetaLabelStyled,
  SocialWrapper,
  SocialListStyled,
  ListItemStyled,
  SvgButtonStyled,
  SvgStyled,
  AfterLineWrapper,
  AfterLineStyled,
  NavigationArticleStyled,
  NavigationWrapper,
  NavigationNewsStyled,
} from './Article.style'
import { useArticleFetcher } from '../hooks/useArticleFetcher'
import { NEWS_PAGE } from '../../../../global/routes'
import { useHistory } from 'react-router'

type Ref = HTMLInputElement
const ref = createRef<Ref>()

const copyLink = (e: MouseEvent) => {
  ref.current?.select()
  console.log(ref.current?.select())
  document.execCommand('copy')
}

export const CopyUrl = forwardRef<Ref>((props, ref) => (
  <input
    style={{ position: 'absolute', left: '-1000px' }}
    id="url-input"
    ref={ref}
    value={window.location.href}
  />
))

export const ArticlePage: FC = () => {
  const article = useArticleFetcher()
  const history = useHistory()

  return (
    <WrapperStyled>
      <ArticleWrapper>
        <NavigationWrapper>
          <NavigationNewsStyled onClick={()=>history.push(NEWS_PAGE)}>
            <I18nWrapper pathString="header.news" />
          </NavigationNewsStyled>
          <NavigationArticleStyled>{article.title}</NavigationArticleStyled>
        </NavigationWrapper>
        <ImageWrapper>
          <ImageStyled src={article.icon} />
        </ImageWrapper>
        <TitleWrapper>
          <TitleStyled>{article.title}</TitleStyled>
          <MetaWrapper>
            <DateStyled>
              {new Date(article.date)
                .toLocaleString('ru', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })
                .replace(/[/]/g, '.')}
            </DateStyled>
            <SocialWrapper>
              <SocialListStyled>
                <ListItemStyled>
                  <SvgButtonStyled
                    onClick={() =>
                      window.open(
                        `https://vk.com/share.php?url=${window.location.href}`,
                        '',
                        'width=500,height=500'
                      )
                    }
                  >
                    <SvgStyled viewBox="0 0 192 113.9">
                      <path d="M187.6 7.6c1.3-4.5 0-7.6-6.3-7.6h-21c-5.4 0-7.8 2.8-9.1 6 0 0-10.6 26.1-25.8 42.8-4.9 4.9-7 6.4-9.7 6.4-1.3 0-3.3-1.5-3.3-6V7.6c0-5.4-1.5-7.6-6-7.6h-33C70.1 0 68 2.5 68 4.8c0 5.1 7.5 6.3 8.4 20.4v30.9c0 6.7-1.2 7.9-3.9 7.9-7 0-24.4-26.1-34.6-56-2.1-5.5-4-7.9-9.4-7.9h-21C1.5.1.3 2.9.3 6.1c0 5.5 7 33.1 33.1 69.5 17.4 24.9 41.8 38.3 64 38.3 13.3 0 15-3 15-8.1V86.9c0-6 1.2-7.2 5.5-7.2 3.1 0 8.4 1.5 20.8 13.5 14.2 14.2 16.6 20.7 24.6 20.7h21c6 0 9-3 7.2-8.8-1.9-5.8-8.7-14.4-17.7-24.6-4.9-5.8-12.3-12-14.4-15.1-3.1-4-2.2-5.8 0-9.3 0-.2 25.6-36.2 28.2-48.5z"></path>
                    </SvgStyled>
                  </SvgButtonStyled>
                </ListItemStyled>
                <ListItemStyled>
                  <SvgButtonStyled onClick={(event) => copyLink(event)}>
                    <SvgStyled viewBox="0 0 19 19">
                      <path d="M9.02 14.32c-.22-.06-.43-.15-.64-.24l-1.76 1.76c-.95.95-2.5.95-3.46 0-.95-.95-.95-2.5 0-3.46l3.46-3.46c.44-.44 1.02-.67 1.6-.7.27-.01.54.02.81.09.38.11.75.31 1.05.61.21.21.35.46.47.71.07-.06.15-.11.21-.17l1.6-1.6a4.28 4.28 0 00-.55-.66c-.41-.41-.86-.72-1.35-.95-.28-.14-.56-.24-.85-.32-1.11-.3-2.31-.19-3.37.31-.4.19-.78.44-1.12.74-.08.07-.16.14-.23.21l-3.46 3.46a4.895 4.895 0 000 6.92 4.895 4.895 0 006.92 0l3.28-3.28c-.85.24-1.76.26-2.61.03z"></path>
                      <path d="M17.57 1.43a4.895 4.895 0 00-6.92 0L7.54 4.54c.79-.19 1.63-.2 2.42.02.26.07.5.17.75.28l1.67-1.67c.95-.95 2.5-.95 3.46 0 .95.95.95 2.5 0 3.46l-3.46 3.46c-.44.45-1.02.67-1.6.7-.27.01-.54-.02-.81-.1-.38-.11-.75-.31-1.05-.61-.26-.27-.44-.6-.55-.93-.06.05-.13.09-.19.15l-1.65 1.65c.19.3.4.59.66.86.41.41.86.72 1.35.95a4.915 4.915 0 004.21 0c.4-.19.78-.44 1.12-.74.08-.07.16-.13.23-.21l3.46-3.46a4.886 4.886 0 00.01-6.92z"></path>
                    </SvgStyled>
                  </SvgButtonStyled>
                </ListItemStyled>
              </SocialListStyled>
            </SocialWrapper>
          </MetaWrapper>
        </TitleWrapper>
        <TextStyled dangerouslySetInnerHTML={{ __html: article.description }} />

        <BottomMetaWrapper>
          <BeforeSocialWrapper>
            <BeforeLineStyled />
            <MetaLabelStyled>Share this article</MetaLabelStyled>
            <BeforeLineStyled />
          </BeforeSocialWrapper>
          <SocialWrapper>
            <SocialListStyled>
              <ListItemStyled>
                <SvgButtonStyled
                  onClick={() =>
                    window.open(
                      `https://vk.com/share.php?url=${window.location.href}`,
                      '',
                      'width=500,height=500'
                    )
                  }
                >
                  <SvgStyled viewBox="0 0 192 113.9">
                    <path d="M187.6 7.6c1.3-4.5 0-7.6-6.3-7.6h-21c-5.4 0-7.8 2.8-9.1 6 0 0-10.6 26.1-25.8 42.8-4.9 4.9-7 6.4-9.7 6.4-1.3 0-3.3-1.5-3.3-6V7.6c0-5.4-1.5-7.6-6-7.6h-33C70.1 0 68 2.5 68 4.8c0 5.1 7.5 6.3 8.4 20.4v30.9c0 6.7-1.2 7.9-3.9 7.9-7 0-24.4-26.1-34.6-56-2.1-5.5-4-7.9-9.4-7.9h-21C1.5.1.3 2.9.3 6.1c0 5.5 7 33.1 33.1 69.5 17.4 24.9 41.8 38.3 64 38.3 13.3 0 15-3 15-8.1V86.9c0-6 1.2-7.2 5.5-7.2 3.1 0 8.4 1.5 20.8 13.5 14.2 14.2 16.6 20.7 24.6 20.7h21c6 0 9-3 7.2-8.8-1.9-5.8-8.7-14.4-17.7-24.6-4.9-5.8-12.3-12-14.4-15.1-3.1-4-2.2-5.8 0-9.3 0-.2 25.6-36.2 28.2-48.5z"></path>
                  </SvgStyled>
                </SvgButtonStyled>
              </ListItemStyled>
              <ListItemStyled>
                <SvgButtonStyled onClick={(event) => copyLink(event)}>
                  <SvgStyled viewBox="0 0 19 19">
                    <path d="M9.02 14.32c-.22-.06-.43-.15-.64-.24l-1.76 1.76c-.95.95-2.5.95-3.46 0-.95-.95-.95-2.5 0-3.46l3.46-3.46c.44-.44 1.02-.67 1.6-.7.27-.01.54.02.81.09.38.11.75.31 1.05.61.21.21.35.46.47.71.07-.06.15-.11.21-.17l1.6-1.6a4.28 4.28 0 00-.55-.66c-.41-.41-.86-.72-1.35-.95-.28-.14-.56-.24-.85-.32-1.11-.3-2.31-.19-3.37.31-.4.19-.78.44-1.12.74-.08.07-.16.14-.23.21l-3.46 3.46a4.895 4.895 0 000 6.92 4.895 4.895 0 006.92 0l3.28-3.28c-.85.24-1.76.26-2.61.03z"></path>
                    <path d="M17.57 1.43a4.895 4.895 0 00-6.92 0L7.54 4.54c.79-.19 1.63-.2 2.42.02.26.07.5.17.75.28l1.67-1.67c.95-.95 2.5-.95 3.46 0 .95.95.95 2.5 0 3.46l-3.46 3.46c-.44.45-1.02.67-1.6.7-.27.01-.54-.02-.81-.1-.38-.11-.75-.31-1.05-.61-.26-.27-.44-.6-.55-.93-.06.05-.13.09-.19.15l-1.65 1.65c.19.3.4.59.66.86.41.41.86.72 1.35.95a4.915 4.915 0 004.21 0c.4-.19.78-.44 1.12-.74.08-.07.16-.13.23-.21l3.46-3.46a4.886 4.886 0 00.01-6.92z"></path>
                  </SvgStyled>
                </SvgButtonStyled>
              </ListItemStyled>
            </SocialListStyled>
          </SocialWrapper>
          <AfterLineWrapper>
            <AfterLineStyled />
          </AfterLineWrapper>
        </BottomMetaWrapper>
      </ArticleWrapper>
      <CopyUrl ref={ref} />
    </WrapperStyled>
  )
}
