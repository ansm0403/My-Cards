import styled from '@emotion/styled'
import { GridLoader } from 'react-spinners'

export default function LoadingSpinner() {
  return (
    <Container>   
        <GridLoader /> 
    </Container>

  )
}

const Container = styled.div`
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
`
