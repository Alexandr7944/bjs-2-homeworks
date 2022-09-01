class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(num) {   
        this._state =  num;    
        if(this._state < 0) {
            this._state = 0;
        }else if(this._state > 100) {
            this._state = 100;
        }
    }
    
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state = 100);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state = 100);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state){
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'novel';
        this.author = author;
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state){
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'fantastic';
        this.author = author;
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state){
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'detective';
        this.author = author;
    }
}

class Library{
    constructor(name, books) {
        this.name = name + "";
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].name === bookName) {
                return this.books.splice([i], 1)[0];
            }
        }
        return null;
    }
}

class Student{
    constructor(name) {
        this.name = name;
        this.subjectNames = [];
    }

    addMark(mark, subjectName) {
        if(mark < 1 || mark > 5) {
            return 'Ошибка, оценка должна быть числом от 1 до 5';
        }
        for (let index = 0; index < this.subjectNames.length; index++) {
            if(this.subjectNames[index].subjectName === subjectName) {
                return this.subjectNames[index].marks.push(mark);
            }
        }
        
        return this.subjectNames.push({
            subjectName: subjectName,
            marks: [mark]
            });
    }

    getAverageBySubject(subjectName) {
        for (let index = 0; index < this.subjectNames.length; index++) {
            if(this.subjectNames[index].subjectName === subjectName) {
                return +((this.subjectNames[index].marks.reduce((acc, item) => acc + item, 0)) / this.subjectNames[index].marks.length).toFixed(2);
            }
        }
        return 'Несуществующий предмет'
    }

    getAverage() {
        let summ = 0;
        let number = 0;
        for (let index = 0; index < this.subjectNames.length; index++) {
            summ += this.subjectNames[index].marks.reduce((acc, item) => acc + item, 0);
            number += this.subjectNames[index].marks.length;
        }
        return +((summ / number).toFixed(2));
    }

    exclude(reason) {
        return reason;
    }
}