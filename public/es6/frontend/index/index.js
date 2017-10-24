// 首页相关的js

// $(function(){// 页面加载完成后调用
//     console.log('index js');
// });
// console.log('reng');
//定义类
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }

var point = new Point(3,4);

console.log(point.toString);