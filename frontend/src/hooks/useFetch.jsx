

const useFetch = () => {

  const handleFetch = async (url) => {
    const res = await fetch(url)
    const result = await res.json()
    return result
  }

  return {
    handleFetch
  }
}

export default useFetch