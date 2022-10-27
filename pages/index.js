import Head from 'next/head'
import Button from '../components/button'
import TextInput from '../components/textField'


export default function Home() {
  return (
    <>
      <Head>
        <title>To-do List</title>
      </Head>

      <h1>Home Page</h1>
      
      <TextInput label="Enter your task"/>
      <Button>click me</Button>
    </>
  )
}
