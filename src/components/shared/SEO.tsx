import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
}

function SEO({ title }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={`${title}카드를 신청해보자.`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={"/assets/images/cards.jpg"} />
      <meta property="og:image:width" content="260" />
      <meta property="og:image:height" content="260" />
      <meta property="og:description" content={`${title}카드를 신청해보자.`} />
      <meta property="og:locale" content="ko_KR" />
    </Helmet>
  )
}

export default SEO