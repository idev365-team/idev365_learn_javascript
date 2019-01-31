var phone = new Object()

phone["name"]="小米";
phone["color"]="黑色";
phone["sendMsg"]=function(phoneNumber,msg){
        console.log("往"+phoneNumber+":"+msg)
    }



phone.sendMsg("139111111111","欢迎学习JavaScript指南")
console.log(phone["name"])


for (var key in phone ){
    console.log(key,phone[key])
}

console.log( Object.keys(phone) )

console.log( Object.getOwnPropertyNames(phone) )