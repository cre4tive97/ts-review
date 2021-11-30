declare type 함수타입 = (a: string) => number;
declare let 함수: 함수타입;
declare type 회원타입 = {
    name: string;
    age: number;
    plusOne: (a: number) => number;
    changeName: (name: string) => void;
};
declare let 회원정보: 회원타입;
declare type CutType = (x: string) => string;
declare let cutZero: CutType;
declare type RemoveType = (x: string) => number;
declare let removeDash: RemoveType;
declare type 만들함수타입 = (x: string, a: CutType, b: RemoveType) => number;
declare let 만들함수: 만들함수타입;
