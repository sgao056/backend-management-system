import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)

    if (username === 'admin123' && password === 'admin123') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: 'home',
              icon: 's-home',
              url: '/home'
            },
            {
              path: '/products',
              name: 'products',
              label: 'products',
              icon: 'video-play',
              url: '/products'
            },
            {
              path: '/user',
              name: 'user',
              label: 'user',
              icon: 'user',
              url: '/user'
            },
            {
              label: 'Others',
              icon: 'location',
              children: [
                {
                  path: '/page1',
                  name: 'page1',
                  label: 'page1',
                  icon: 'setting',
                  url: '/page1'
                },
                {
                  path: '/page2',
                  name: 'page2',
                  label: 'page2',
                  icon: 'setting',
                  url: 'page2'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: 'Admin login successfully'
        }
      }
    } 
    else if (username === 'guest123' && password === 'guest123') {
      return {
        code: 20000,
        data: {
          menu: [
            {
                path: '/home',
                name: 'home',
                label: 'home',
                icon: 's-home',
                url: '/home'
              },
              {
                path: '/user',
                name: 'user',
                label: 'user',
                icon: 'user',
                url: '/user'
              }
          ],
          token: Mock.Random.guid(),
          message: 'Guest login successfully'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: 'Username and password do not match'
        }
      }
    }

  }
}