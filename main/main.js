//Description: Using inheritance to create instances from subclasses via a superclass.
//Source: Codecademy's Learn Intermediate JavaScript.

//create superclass "Hospital Employee":
class HospitalEmployee {
  constructor(name) {
    this._name = name; //this property needs to be set via constructor call.
    this._remainingVacationDays = 20; //property set on default to 20. no need to set.
  } //closes constructor.
  
  get name() { //getter method.
    return this._name;
  }
  
  get remainingVacationDays() { { //getter method.
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) { //regular method that can pass an argument.
    this._remainingVacationDays -= daysOff;
  }
} //closes superclass.

/////////////////////////////////
//////////////BREAK//////////////
/////////////////////////////////
  
//create subclass inherited from superclass:
class Nurse extends HospitalEmployee {
  constructor(name, certifications) { //constructor takes in 2 arguments that need to be set as properties.
    super(name); //passes the value into superclass' constructor to set name property of instance.
    //**note: the _remainingVacationDays gets set for the Nurse instance from the superclass' constructor too.
    this._certifications = certifications;
  } //closes constructor.

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this._certifications.push(newCertification);
    //push the string argumennt into the array of certifications.
  }
} //closes subclass.

/////////////////////////////////
//////////////BREAK//////////////
/////////////////////////////////

//create an instance of the Nurse subclass and store it in a const variable "nurseOlynyk."
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

//call method .takeVacationDays w/ argument of 5 on new instance.
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays); //use getter method to log updated remainingVacationDays of new instance.

//call method .addCertification w/ argument of "Genetics."
nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications); //use getter method to log updated certifications of new instance. 
//[ 'Trauma', 'Pediatrics', 'Genetics' ]

/////////////////////////////////
//////////////BREAK//////////////
/////////////////////////////////

//log entire instance:
console.log(nurseOlynyk);

/* 
the following object is the final stored version in the container titled nurseOlynyk.
Nurse {
  _name: 'Olynyk',
  _remainingVacationDays: 15,
  _certifications: [ 'Trauma', 'Pediatrics', 'Genetics' ] }
*/
