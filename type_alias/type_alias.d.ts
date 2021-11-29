declare type Animal = string | number | undefined;
declare let 동물: Animal;
declare type Person = {
    name: string;
    age: number;
};
declare let 사람1: Person;
declare type Girlfriend = {
    readonly name: string;
};
declare const 여친: Girlfriend;
declare type Square = {
    color?: string;
    width: number;
};
declare let 네모2: Square;
declare type PositionX = {
    x: number;
};
declare type PositionY = {
    y: number;
};
declare type Position = PositionX & PositionY;
declare let position: Position;
declare type Test1 = {
    test: string;
};
declare type Test2 = {
    test: number;
};
declare type Test = Test1 & Test2;
declare type Box = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare let box: Box;
declare type Check1 = {
    name: string;
    phone: number;
    email: string;
};
declare type Check2 = Check1 & {
    isMinor: boolean;
};
