//Array destructuring
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-published'} = book.publisher

console.log(publisherName)

//Array destructuring
const item = ['coffee(hot)', '$2.00', '$2.50', '$2.75']

const [itemName, , mediumprice] = item

console.log(`A medium ${itemName} cost ${mediumprice}`)