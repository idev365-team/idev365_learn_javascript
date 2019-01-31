# Array 
## 创建
var arr = []
arr = [1,2,3]

## 查找数量
arr.length

## 查找
arr[0]
arr[1]
arr[2]

## 修改
arr[0]=123

## 添加和删除

### 尾部的添加删除
arr.push(1)
arr.push(1,2,3)
arr2=[1,2,3]
arr.push( ...arr2 )
arr.pop()


### 头部的添加删除
arr.unshift(1)
arr.unshift(1,2,3)
arr.shift()


# 字符串转换为数组
str="1,2,3"
var arr = str.split(',')


# 数组转换为字符串
var arr = [1,2,3]
var str = arr.join(',')
var str = arr.join(' ')
var str = arr.join(';')
var str = arr.join('|')
var str = arr.join('-')