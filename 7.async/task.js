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

    getCurrentFormattedTime(addMin = 0) {
        const dateNow = new Date();
        const hour = dateNow.getHours() < 10 ? `0${dateNow.getHours()}` : `${dateNow.getHours()}`;
        const min = dateNow.getMinutes() < 10 ? `0${dateNow.getMinutes()}` : `${dateNow.getMinutes()}`;
        return hour + ':' + (+min + addMin);
    };

    checkClock(obj) {
        if(obj.time == this.getCurrentFormattedTime()) { 
            return console.log(obj.callback());
        }
    }
    
    start() {
        if(!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.find((item, index, arr) => this.checkClock(item)), 1000);
            // this.timerId = setInterval(() => this.alarmCollection.find((item, index) => this.checkClock(index)), 1000);
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
        this.alarmCollection = [];
    }
}

let test;
testCase();
function testCase() {
    console.log(test = new AlarmClock);
    test.addClock(test.getCurrentFormattedTime(), () => console.log('Пора вставать!'), 1);
    test.addClock(test.getCurrentFormattedTime(1), () => {
        console.log('Давай, вставай уже!');
        test.removeClock(2);
    }, 2);
    test.addClock(test.getCurrentFormattedTime(2), () => {
        console.log('Иди умываться');
        test.stop();
        test.printAlarms();
        test.clearAlarms();
        test.printAlarms();
    }, 3);
    test.printAlarms();
    test.start();
}