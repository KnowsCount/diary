import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { useState } from 'react'
import Typical from 'react-typical'
import Button from '../components/Button'
import Modal from 'react-modal'
import Editor from '../components/Editor'

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

const ButtonWrapper = styled.div`
  margin-top: 3rem;
`

Modal.setAppElement('#__next')

const Home: NextPage = () => {
  const [toggle, setToggle] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <Container>
      <Head>
        <title>Diary</title>
        <meta name="description" content="a diary app for personal use" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
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
          <Button text='Start'/>
          <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Minimal Modal Example"
          >
            <h1>{(new Date().toJSON().slice(0, 10))}</h1>
            <Editor></Editor>
            <ButtonWrapper onClick={closeModal}>
              <Button text='Close'></Button>
            </ButtonWrapper>
          </Modal>
        </div>
      </Main>
    </Container>
  )
}

export default Home
