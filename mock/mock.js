// // 使用 Mock
var Mock = require('mockjs')
// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': "asdfasdf"
//     }]
// })
// // 输出结果
// console.log(JSON.stringify(data, null, 4))

var Random = Mock.Random
var r = Random.email()
console.log(r);
// => "n.clark@miller.io"
Mock.mock('@email')
// => "y.lee@lewis.org"
var rs = Mock.mock({ email: '@email' })
console.log(rs);
// => { email: "v.lewis@hall.gov" }


Random.extend({
    constellation: function (date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})
Random.constellation()

// => "水瓶座"
var mr = Mock.mock('@CONSTELLATION')

console.log(mr);
// => "天蝎座"
var ms = Mock.mock({
    constellation: '@CONSTELLATION'
})
console.log(ms);

// => { constellation: "射手座" }



var rb = Random.boolean()
console.log(rb);
// => true
Random.boolean(1, 9, true)
// => false
Random.bool()
// => false
Random.bool(1, 9, false)
// => true


var rn = Random.natural()
// => 1002794054057984
console.log(rn);
var rl = Random.natural(10000)
// => 71529071126209
console.log(rl);
Random.natural(60, 100)


var rf = Random.float()
// => -1766114241544192.8
console.log(rf);
var rm = Random.float(0)
console.log(rm);

// => 556530504040448.25
Random.float(60, 100)
// => 82.56779679549358
Random.float(60, 100, 3)
// => 61.718533677927894
Random.float(60, 100, 3, 5)
// => 70.6849

var rurl = Random.url()
console.log(rurl);
// => "mid://axmg.bg/bhyq"
Random.url('http')
console.log("hwl");
// => "http://splap.yu/qxzkyoubp"
Random.url('http', 'nuysoft.com')
// => "http://nuysoft.com/ewacecjhe"
console.log("何伟亮");

var rr = Random.range(10)
console.log(rr);

var rrn = Random.range(3, 20);
console.log(rrn);


var rd = Random.date();
console.log(rd);

var rd2 = Random.date('MM-dd');
console.log(rd2);

var rd3 = Random.date('y-M-d');
console.log(rd3);

var img = Random.image();
console.log(img);


var img2 = Random.image('200x100', '#00405d', '#FFF', '何伟亮');
console.log(img2);

var guid = Random.guid();
console.log(guid);
