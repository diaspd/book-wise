import { ChartLineUp } from 'phosphor-react'
import { PageTitle } from '../PageTitle'
import { TitleContainer } from './styles'

export function Header() {
  return (
    <TitleContainer>
      <PageTitle title="Início" icon={<ChartLineUp size={32} />} />
    </TitleContainer>
  )
}
