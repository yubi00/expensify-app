console.log('sample')
const oldexpense = {id: "0817cac0-5f7a-497f-af22-20db5f11a377", description: "water bill", note: "", amount: 200, createdAt: 500}

const newexpense = {description: "internet bill", amount: 250000, createdAt: 500, note: ""}

const mergeexpense = {...oldexpense, ...newexpense}

console.log(mergeexpense)