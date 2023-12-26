
enum Actions {
    '+' = 'add',
    '-' = 'subtract',
    '*' = 'multiply',
    '/' = 'divide',

};

interface TheMathOperations {
    add(x:number, y:number):number;
    subtract(x:number, y:number):number;
    multiply(x:number, y:number):number;
    divide(x:number, y:number):number;
};

class Calculator implements TheMathOperations {
    add(x:number, y: number): number {
        return x + y;
    };
    subtract(x:number, y: number): number {
        return x - y;
    };
    multiply(x:number, y: number): number {
        return x * y;
    };
    divide(x:number, y: number): number {
        if (y === 0) { throw new Error('You can`t divide by zero.')};
        return x / y;
    };
};

function calculate(calculator: Calculator, action: Actions, x: number, y: number): number {
    return calculator[action](x, y);
};

let objForCalculation: Calculator = new Calculator();

calculate(objForCalculation, Actions['/'], 36, 3);





interface Book {
    bookName: string;
    authorName: string;
};

interface Author {
    bio: string;
}

interface BookService {
    getBookName(book: Book): string;
    getAuthorBio(author: Author): string;
}

class BookServiceImplementation implements BookService {

    getBookName(book: Book): string {
        return book.bookName;
    };
    getAuthorBio(author: Author): string {
        return author.bio;
    };
};

let bookService: BookServiceImplementation = new BookServiceImplementation();




