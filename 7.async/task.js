class AlarmClock{
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {

        if(!id){
            throw new Error('error text');
        }
        
        if(this.alarmCollection.find(i => i.id === id)) {
            return console.error('Будильник с таким id уже существует');
        }
      
        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter(i => i.id !== id);
    }

    getCurrentFormattedTime() {
        const dateNow = new Date();
        const hour = dateNow.getHours() < 10 ? `0${dateNow.getHours()}` : `${dateNow.getHours()}`;
        const min = dateNow.getMinutes() < 10 ? `0${dateNow.getMinutes()}` : `${dateNow.getMinutes()}`;
        return hour + ':' + min;
    };

    checkClock(item) {
        if(this.alarmCollection[item].time == this.getCurrentFormattedTime()) { 
            return console.log(this.alarmCollection[item].callback());
        }
    }
    
    start() {
        if(!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.find((item, index) => this.checkClock(index)), 1000);
        }
    }

    stop() {
        if(this.timerId) {
            return clearInterval(this.timerId), this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((element, index) => {
            console.log(`Будильник № ${this.alarmCollection[index]['id']} заведен на ${this.alarmCollection[index]['time']}`);
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = this.alarmCollection.filter(i => i == false);
    }
}

let test;
testCase();
function testCase() {
    console.log(test = new AlarmClock);
    test.addClock(test.getCurrentFormattedTime(), () => {console.log('Пора вставать!')}, 1);
    test.addClock(new Date().getHours() + ':' + (new Date().getMinutes() + 1), () => {
        console.log('Давай, пора вставать!');
        test.removeClock(2);
        /*После удаления звонка метод find видит прежнюю длину массива и обращается к элементам которых нет, появляется ошибка

            VM9607 task.js:32 Uncaught TypeError: Cannot read properties of undefined (reading 'time')
            at AlarmClock.checkClock (VM9607 task.js:32:39)
            at VM9607 task.js:39:94
            at Array.find (<anonymous>)
            at VM9607 task.js:39:67
            
        при этом когда делаю тоже самое не в callback все работает без замечания*/
    }, 2);
    test.addClock(new Date().getHours() + ':' + (new Date().getMinutes() + 2), () => {
        console.log('Иди умываться');
        test.stop();
        test.printAlarms();
        test.clearAlarms();
        test.printAlarms();
    }, 3);
    test.printAlarms();
    test.start();
}