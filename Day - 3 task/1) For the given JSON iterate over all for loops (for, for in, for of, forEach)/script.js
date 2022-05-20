let json = [{ "name": "siva", "dept": "mech", "age": "22" }, { "name": "ram", "dept": "IT", "age": "29" }, { "name": "raja", "dept": "cse", "age": "24" }];

// for loop

for(var i = 0; i < json.length; i++) {
    var obj = json[i];
        console.log(obj.name);
          console.log(obj.dept);
         console.log(obj.age);

}


//for in
for(let key in json){
        console.log(json[key].name);
        console.log(json[key].dept);
        console.log(json[key].age);
}

// for of
for (let value of json) {
    console.log(value.name);
    console.log(value.dept);
    console.log(value.age);

}

//for each
json.forEach(function(val){
   console.log(val.name);
   console.log(val.dept);
  console.log(val.age);
 });




 




