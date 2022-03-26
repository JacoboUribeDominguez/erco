

const useFetch = () => {

  const handleFetch = async (url) => {
    let res = {};
    let result = {};
    console.log(url)
    try{
      res = await fetch(url)
      result = await res.json()
    } catch ( Exc ) {
      console.error("ERROR: en handleFetch")
      console.log(Exc)
    }
    return result
  }

  return {
    handleFetch
  }
}

export default useFetch