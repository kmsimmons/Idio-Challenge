var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}), counter = 0, staffRoster = [],

//do not change Employee function!

Employee = function(staffMember) {
   this.firstname = staffMember.firstname
   this.familyname = staffMember.familyname
   this.age = staffMember.age

   this.setName = function(newName) { this.firstname = newName }
   this.setFullName = function(name) { return this.name + ' ' +  this.familyname }
};


readline.on('line', function(line) {
  counter+=1;
  //empty array to store employee data

  employeeData = []
  staffRoster[counter] = function() {
    //trim additional spaces from firstname, familyname and age

    var staff = new Employee({ firstname : line.trim(), familyname : line.trim(), age : line.trim() })
    //check data types to make sure data is valid
   
    if(typeof(staff.firstname) === 'string' && typeof(staff.familyname) === 'string') {
        //push staff into employeeData array

        employeeData.push(staff)
        //log new #, first name, family name, and age
        console.log("#" + (employeeData.indexOf(staff) + 1) + ',' + staff.firstname);
        
        // console.log(staff)
    } else {
        console.log('')
    }
  };
}).on('close', function() {
  staffRoster.forEach(function(element){
    element();
  });
  console.log('Have a great day!');
  process.exit(0);
});