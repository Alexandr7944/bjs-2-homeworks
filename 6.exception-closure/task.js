function parseCount(formValue) {
    let num = parseInt(formValue);
    if(Number.isNaN(num)) {
        throw new Error('Невалидное значение')
    }
    return num;
}

function validateCount(formValue) {
    try{
        return parseCount(formValue);
    }catch(error){
        return (error);
    }
}

class Triangle{
    constructor(a, b, c){
        if(a + b < c || a + c < b || c + b < a){
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter(){
        return  this.a + this.b + this.c;
    }

    getArea(){
        let halfPerimeter = (this.a +  this.b +  this.c) / 2;
        let area = (halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)) ** 0.5;
        return +(area.toFixed(3))
    }
}

function getTriangle(a, b, c) {
    try{
        return new Triangle(a, b, c);
    }catch(error){
        return {
            getPerimeter:() => "Ошибка! Треугольник не существует", 
            getArea:() => "Ошибка! Треугольник не существует"
        }
    }
}