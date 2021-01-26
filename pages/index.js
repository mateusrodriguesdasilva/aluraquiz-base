import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'

import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import { useState } from 'react';


//JavaScript
/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')//Passamos o estado inicial do nosso componente. Estado inicial do input

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              
              router.push(`/quiz?name=${name}`)
              console.log('Fazendo uma submissão por meio do reat')
            }}  
            >
              <input 
                onChange={function (infosDoEvento){
                  //State
                  //name = infosDoEvento.target.value
                  setName(infosDoEvento.target.value)//Chama a função e passa o novo estado
                }}
              placeholder="" />  
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form> 
          </Widget.Content>
        </Widget>

        <Widget>
            <Widget.Content>
              <h1>Quizzes da Galera</h1>
              <p>lorem opsum dolor sit amet...</p>
            </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mateusrodriguesdasilva"/>
    </QuizBackground>
  );
}
