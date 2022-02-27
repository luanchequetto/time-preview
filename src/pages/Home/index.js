import React from 'react'
import { CardsWrapper } from '../../components/CardsWrapper'
import { CitySearch } from '../../components/CitySearch'
import { SelectedCard } from '../../components/SelectedCard'
import { Sidebar } from '../../components/Sidebar'
import { Container, PageWrapper } from './styles'

export const Home = () => {
  return (
    <PageWrapper >
      <Sidebar />
      <Container>
        <CitySearch />
        <CardsWrapper />
      </Container>
      <SelectedCard />
    </PageWrapper>
  )
}
