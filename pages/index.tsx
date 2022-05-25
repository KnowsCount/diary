import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Typical from 'react-typical'
import Button from '@components/Button'
import Modal from 'react-modal'
import Editor from '@components/Editor'

const Container = styled.div`
  padding: 0 2rem;
`

const Main = styled.main`
  min-height: 90vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: 4rem;
  cursor: pointer;
`

const ModalEditor = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 3rem;
`

const ButtonsWrapper = styled.div`
  display: flex;
`

const ModalButton = styled.div``

Modal.setAppElement('#main')

const Home: NextPage = () => {
  const [toggle, setToggle] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = (e: any) => {
    setIsOpen(false)
    e.stopPropagation()
  }
  const getStarterText = () => {
    if (toggle == true) {
      let starterText: string = 'Dear diary, \n'
      return starterText
    } else {
      let starterText: string = 'Dear me, \n'
      return starterText
    }
  }
  return (
    <Container>
      <Head>
        <title>{getStarterText()}</title>
        <meta name="description" content="a diary app for personal use" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main id='main'>
        <Title
          onClick={()=>setToggle(!toggle)}
        >
          {
            toggle ? 
            (<Typical
              steps={['Dear diary,']}
              loop={1}
            />) : 
            (<Typical
                steps={['Dear me,']}
                loop={1}
              />
            )
          }
        </Title>
        <div onClick={openModal}>
          <Button 
            frontColour='hsl(345deg 100% 47%)'
            backColour='hsl(340deg 100% 32%)'
            text='Start'
          />
        </div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={e => e.stopPropagation()}
            contentLabel="Modal"
          >
            <h1>{(new Date().toJSON().slice(0, 10))}</h1>
            <ModalEditor>
              <Editor starterText={getStarterText()} />
            </ModalEditor>
            <ButtonsWrapper>
              <ModalButton onClick={closeModal}>
                <Button
                  frontColour='hsl(345deg 100% 47%)'
                  backColour='hsl(340deg 100% 32%)' text='Close'
                />
              </ModalButton>
              <ModalButton onClick={closeModal}>
                <Button
                  frontColour='hsl(225, 76%, 46%)'
                  backColour='hsl(225, 76%, 32%)' text='Submit'
                />
              </ModalButton>
            </ButtonsWrapper>
          </Modal>
      </Main>
    </Container>
  )
}

export default Home
