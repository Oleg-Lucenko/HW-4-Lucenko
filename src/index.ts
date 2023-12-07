interface Calculator {
    x: number;
    y: number;
    add(x:number, y:number):number;
    subtract(x:number, y:number):number;
    multiply(x:number, y:number):number;
    divide(x:number, y:number):number;
};

function calculate(data: Calculator): string {
    let add = data.add(data.x, data.y);
    let subtract = data.subtract(data.x, data.y);
    let multiply = data.multiply(data.x, data.y);
    let divide = data.divide(data.x, data.y);
    return `Addition ${add}, subtraction ${subtract}, multiplication ${multiply}, division ${divide}`
};


interface Book {
    bookName: string;
    quantityPages: number;
};

interface Author {
    authorName: string;
    surname: string;
}

interface BookService {
    getBookName(): string;
    getAuthorName(): string;
}




