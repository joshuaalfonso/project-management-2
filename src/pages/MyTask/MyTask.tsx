import { Heading } from "@chakra-ui/react"
import { useEffect } from "react"



const MyTask = () => {

  const fetchData = async () => {

      const response = await fetch('http://192.168.1.4:3000/testing');

      const data = await response.json();

      console.log(data)
  }


  useEffect(() => {

    fetchData()

  }, [])


  return (
    <>
        <Heading mb={'10'}>
            My Task
        </Heading>
    </>
  )
}

export default MyTask