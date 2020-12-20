const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`

export const media = {
  custom: (maxWidth: number): string => customMediaQuery(maxWidth),
  desktop: customMediaQuery(1367),
  rubber: `@media (min-width: 449px) and (max-width: 1366px)`,
  laptop: customMediaQuery(1280),
  tablet: customMediaQuery(1024),
  phone: customMediaQuery(448)
}


