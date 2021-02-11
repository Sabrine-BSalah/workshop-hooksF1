import { useState, useEffect } from 'react'

const useCount = () => {
  // States
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Message");

  /**
   *  Component didiMount & willUnmout
   **/

  useEffect(() => {
    console.log("Component didmount")
    return () => {
      console.log("Component will unmout")
    };
  }, []);


  /**
   *  Component didiMount & willUnmout
   **/

  // useEffect(() => {
  //   console.log("Component didUpdate")
  // });

  useEffect(() => {
    if (count === 0) return
    console.log("Component didUpdate : Count")
  }, [count]);


  useEffect(() => {
    if (message === "Message") return
    console.log("Component didUpdate : Message")
  }, [message]);



  // Methods
  const handleClickAdd = () => {
    setCount(count + 1)
  }

  const handleClickMinus = () => {
    count > 0 &&
      setCount(count - 1)
  }


  return {
    count,
    message, setMessage, handleClickAdd, handleClickMinus
  }
}

export default useCount
