import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'
import Spinner from './components/loading/Loading'
// import Parent from './components/forLiftUpState/Parent';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

function App() {
  return (
    <>
      <h1>react World on the go</h1>
      {/* <Parent></Parent> */}
      <Suspense fallback={<Spinner></Spinner>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>


    </>
  )
}

export default App
