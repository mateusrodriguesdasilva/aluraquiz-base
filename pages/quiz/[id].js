import React from 'react'
import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/screens/Quiz'

export default function QuizDaGaleraPage({ dbExterno }) {
   /*  console.log(dbExterno) */

    return (
        /* <div> */
            /* Desafio da próxima aula junto com as animações */
            <ThemeProvider theme={dbExterno.theme}>
            <QuizScreen 
                externalQuestions={dbExterno.questions} 
                externalBg={dbExterno.bg}
            />
            </ThemeProvider>
            /* <pre style={ { color: 'black'}}>
                {JSON.stringify(dbExterno.questions, null, 4)}
            </pre> */
        /* </div> */
    )
}

export async function getServerSideProps(context) {
    const [projectName, githubUser] = context.query.id.split('___')
    //console.log('Infos que o Next da para nós', context.query.id)

    try  {
        const dbExterno = await fetch (`https://${projectName}.${githubUser}.vercel.app/api/db`)
             .then((respostaDoServer) => {
                 if (respostaDoServer.ok) {
                     return respostaDoServer.json()
                 }
                 throw new Error('Falhar em pegar os dados')
             })
             .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
             /* .catch((err) => {
                 //console.log(err)
             }) */
     
             //console.log('dbExterno',dbExterno)
             //console.log('Infos que o Next da para nós', context.query.id)
     
         return {
             props: {
                 dbExterno,
             },
         }

    } catch (err) {
        //redirect ...
        throw new Error(err)
    }

}