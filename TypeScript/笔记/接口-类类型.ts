/* 
类类型: 实现接口
1. 一个类可以实现多个接口
2. 一个接口可以继承多个接口
*/

interface Alarm {
    alert(): any;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}

class Car2 implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

new Car().alert()
const car2: Car2 = new Car2()
car2.alert()
car2.lightOn()
car2.lightOff()

// 接口继承接口
interface LightableAlarm extends Alarm, Light { }
class Car3 implements LightableAlarm {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
const car3: Car3 = new Car3()
car3.alert()
car3.lightOn()
car3.lightOff()