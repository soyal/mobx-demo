
export const fetchList = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          text: '测试条目1',
          type: 1  // 0: todo, 1: complete
        },
        {
          id: 2,
          text: '测试条目2',
          type: 0  // 0: todo, 1: complete,
        },
        {
          id: 3,
          text: '测试条目3',
          type: 1  // 0: todo, 1: complete
        },
        {
          id: 4,
          text: '测试条目4',
          type: 0  // 0: todo, 1: complete
        },
        {
          id: 5,
          text: '测试条目5',
          type: 1  // 0: todo, 1: complete
        },
      ])
    })
  })

  return data
}