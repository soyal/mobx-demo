
export const toggleType = async (type) => {
  // const TABLE = {
  //   'todo': 0,
  //   'complete': 1
  // }

  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })

  return data
}