import Mock from 'mockjs'

function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
    '"}'
  )
}

let List = []
const count = 200

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: Mock.Random.guid(),
      name: Mock.Random.name(),
      ip: Mock.Random.ip(),
      'age|18-60': 1,
      birthday: Mock.Random.date(),
      gender: ()=> {
        const gender = Mock.Random.integer(0, 1)
        return gender === 1 ? 'male':'female'
      }
    })
  )
}

export default {
 
  getUserList: config => {
    const { name, page = 1, limit = 20 } = param2Obj(config.url)
    const mockList = List.filter(user => {
      if (name && user.name.indexOf(name) === -1) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 20000,
      count: mockList.length,
      list: pageList
    }
  },

  createUser: config => {
    const { name, ip, age, birthday, gender } = JSON.parse(config.body)
    List.unshift({
      id: Mock.Random.guid(),
      name: name,
      ip: ip,
      age: age,
      birthday: birthday,
      gender: gender
    })
    return {
      code: 20000,
      data: {
        message: 'Created succesffuly!'
      }
    }
  },

  deleteUser: config => {
    const { id } = param2Obj(config.url)
    if (!id) {
      return {
        code: 400,
        message: 'Wrong parameters'
      }
    } else {
      List = List.filter(u => u.id !== id)
      return {
        code: 20000,
        message: 'Deleted successfully!'
      }
    }
  },

  batchRemove: config => {
    let { ids } = param2Obj(config.url)
    ids = ids.split(',')
    List = List.filter(u => !ids.includes(u.id))
    return {
      code: 20000,
      data: {
        message: 'Batch delete successfully!'
      }
    }
  },

  updateUser: config => {
    const { id, name, ip, age, birthday, gender } = JSON.parse(config.body)
    const gender_num = parseInt(gender)
    List.some(u => {
      if (u.id === id) {
        u.name = name
        u.age = age
        u.ip = ip
        u.birthday = birthday
        u.gender = gender_num
        return true
      }
    })
    return {
      code: 20000,
      data: {
        message: 'Editing successfully!'
      }
    }
  }
}