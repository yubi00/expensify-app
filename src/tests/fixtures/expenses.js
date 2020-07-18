import moment from 'moment'
const expenses = [
    {
        id: '1',
        description: 'rent',
        amount: 1500,
        note: '',
        createdAt: 0
    },
    {
        id: '2',
        description: 'water bill',
        amount: 100,
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'jacket',
        amount: 2500,
        note: 'winter jacket',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]

export default expenses