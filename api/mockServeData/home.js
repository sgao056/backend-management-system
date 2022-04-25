import Mock from 'mockjs'

let List = []
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          Apple: Mock.Random.float(100, 8000, 0, 0),
          Samsung: Mock.Random.float(100, 8000, 0, 0),
          BlackBerry: Mock.Random.float(100, 8000, 0, 0),
          Huawei: Mock.Random.float(100, 8000, 0, 0),
          Nokia: Mock.Random.float(100, 8000, 0, 0),
          TCL: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: 'TCL',
            value: 899
          },
          {
            name: 'Apple',
            value: 1799
          },
          {
            name: 'Nokia',
            value: 1400
          },
          {
            name: 'BlackBerry',
            value: 1299
          },
          {
            name: 'Huawei',
            value: 1899
          },
          {
            name: 'Samsung',
            value: 1499
          }
        ],
       
        userData: [
          {
            date: 'Mon.',
            new: 5,
            active: 200
          },
          {
            date: 'Tue.',
            new: 10,
            active: 500
          },
          {
            date: 'Wed.',
            new: 12,
            active: 550
          },
          {
            date: 'Thu.',
            new: 60,
            active: 800
          },
          {
            date: 'Fri.',
            new: 65,
            active: 550
          },
          {
            date: 'Sat.',
            new: 53,
            active: 770
          },
          {
            date: 'Sun.',
            new: 33,
            active: 170
          }
        ],
        
        orderData: {
          date: ['20220401', '20220402', '20220403', '20220404', '20220405', '20220406', '20220407'],
          data: List
        },

        tableData: [
            {
                name:'Apple',
                todayPurchase:'20',
                monthlyPurchase:'500',
                totalPurchase:'1000'
            },
            {
                name:'Samsung',
                todayPurchase:'30',
                monthlyPurchase:'400',
                totalPurchase:'800'
            },
            {
                name:'BlackBerry',
                todayPurchase:'10',
                monthlyPurchase:'300',
                totalPurchase:'700'
            },
            {
                name:'Huawei',
                todayPurchase:'10',
                monthlyPurchase:'400',
                totalPurchase:'900'
            },
            {
                name:'Nokia',
                todayPurchase:'5',
                monthlyPurchase:'100',
                totalPurchase:'200'
            },
            {
                name:'TCL',
                todayPurchase:'15',
                monthlyPurchase:'300',
                totalPurchase:'800'
            }
        ]
      }
    }
  }
}