import { useQuery } from 'react-query'
import { useInView } from 'react-intersection-observer'


import Spacing from '@shared/Spacing'
import SkeletonUI from '../shared/SkeletonUI'

export default function Review() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  const { data = [], isLoading } = useQuery(
    ['review'],
    () => {
      return new Promise<string[]>((resolve) => {
        setTimeout(() => {
          resolve(['너무 좋아요', '꼭 신청하세요 !!'])
        }, 2_000)
      })
    },
    {
      enabled: inView,
    },
  )

  return (
    <div ref={ref}>
      {isLoading ? (
        <>
          <SkeletonUI width={30} height={10} />
          <Spacing size={3} />
          <SkeletonUI width={30} height={10} />
        </>
      ) : (
        data.map((review) => <div>{review}</div>)
      )}
    </div>
  )
}
