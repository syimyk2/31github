// const me = {
// 	talk() {
// 		return 'whatt a hec'
// 	},
// }

// me.talk()

class Person {
	talk() {
		return 'Talking'
	}
}

const me =  new Person()
const you =  new Person()
me.age = 12

console.log(me.__proto__)
console.log(you)

