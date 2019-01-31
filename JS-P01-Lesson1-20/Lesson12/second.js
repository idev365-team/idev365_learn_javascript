// second.js
function secondInit(){
    var name = '张三';
    return {
        greeting:function () {
            alert('我们亲爱的' + name + '同学，正在认真听课.');
        }
    }
}