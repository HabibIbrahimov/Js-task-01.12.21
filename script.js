class CustomMatch{
    constructor(number){
        this.number=number;
    }
    plus(a){
       this.number=this.number+a;
       return this;
    }
    minus(b){
       this.number=this.number-b;
       return this;
    }
    multiply(c){
        this.number=this.number*c;
        return this;
    }
    divide(d){
        this.number=this.number/d;
        return this;
    }
}
var result = new CustomMatch(100).plus(6).minus(30).multiply(3).divide(2);
console.log(result);