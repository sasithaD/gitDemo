let a:number=2;


export class classDemo{
    userName:string;//within the class we dont want to declare properties with using let keyword
    password:string;

    constructor(userName:string,password:string){
        this.userName=userName;
        this.password=password;
    }

    setName(userName:string){
        this.userName=userName;
    }

    getName(){
        return this.userName;
    }
}

