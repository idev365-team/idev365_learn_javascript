function UserException (message){
    this.message=message;
    this.name="UserException";
  }
  
  // Make the exception convert to a pretty string when used as
  // a string (e.g. by the error console)
  UserException.prototype.toString = function (){
    return this.name + ': "' + this.message + '"';
  }


function test(){
    try{
        console.log("查询数据库")
      throw new UserException("访问无权限")
      return 1
    }catch(err){
        console.log(err)
        // return 2
    }finally{
        console.log("关闭数据库连接")
        // return 3
    }
}

console.log(test())

