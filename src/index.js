class Ahraaar{
  constructor(){
    this.name= 'Ahraar';
  }

  sayHello(){
    const times = 3;
    const hiWord = 'Hey';
    let hiPhrase = "";

    for(let i = 0;i<times;i++){
hiPhrase = hiWord
    }

    return hiPhrase +" I Am "+ this.name;
  }

}

const instance = new Ahraaar();

document.getElementById("app").innerHTML = instance.sayHello();
