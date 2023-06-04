import { faker } from '@faker-js/faker'

const namesArray = []

// 使用faker库生成随机姓名
for (let i = 0; i < 10000; i++) {
  namesArray.push(faker.name.fullName())
}

export default namesArray