export default class Student {
  constructor(){
    this._name = 'Student';
  }
  set name(name){
    this._name = name;
  }
  get name(){
    return this._name;
  }
}