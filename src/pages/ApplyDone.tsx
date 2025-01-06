import { parse } from 'qs'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import FixedBottomButton from '@shared/FixedBottomButton'
import styled from '@emotion/styled'

function ApplyDone() {
  const { success } = parse(window.location.search, {
    ignoreQueryPrefix: true,
  }) as { success: string }

  return (
    <Flex>
      <TextContainer>
        <Text bold textAlign='center' typography='t3' >
          {success === 'true'
            ? '카드가 발급되었습니다.'
            : '카드 발급에 실패했습니다.'}
        </Text>
      </TextContainer>
      <FixedBottomButton
        label="확인"
        onClick={() => {
          window.history.back()
        }}
      />
    </Flex>
  )
}

const TextContainer = styled.div`
  position : absolute;
  top : 50%;
  left : 50%;
  transform : translate(-50%, -50%);
  white-space : nowrap;
`

export default ApplyDone