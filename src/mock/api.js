import Mock from 'mockjs'

Mock.mock('/getCoures', {
  'data|1-5': [{
    'id|+1': 1,
    'time': Mock.Random.date('HH'),
    'isOverClass|1': Mock.Random.integer(0, 2),
    'studentNick|1-5': Mock.Random.cname(),
    'grade': Mock.Random.integer(1, 12),
    'totalTime': Mock.Random.integer(60, 120),
    'image': Mock.Random.dataImage()
  }]
})