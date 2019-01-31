var msPerDay = 24 * 60 * 60 * 1000;
 
// July 17, 2014 00:00:00 UTC.
var july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));//2014-1970=44年
//这样创建日期真是醉人。。。还要自己计算天数。。。11是闰年中多出的天数。。。
//197是6×30+16(7月的16天)+3(3个大月)-2(2月少2天)

var options = { year: "2-digit", month: "2-digit", day: "2-digit",
                hour: "2-digit", minute: "2-digit", timeZoneName: "short" };
var americanDateTime = new Intl.DateTimeFormat("en-US", options).format;
 
console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT