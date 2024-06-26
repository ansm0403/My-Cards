import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import React from 'react'
import Flex from '../shared/Flex'
import Text from '../shared/Text'

export default function AdBanners() {
  return (
    <Flex direction = "column" css={bannerContainerStyles}>
        <div css={bannerContainerStyles}></div>
        <Text></Text>
        <Text></Text>
    </Flex>
  )
}
const bannerContainerStyles = css
`
    padding : 16px;
    background-color : ${colors.grey};
    border-radius : 4px;
`