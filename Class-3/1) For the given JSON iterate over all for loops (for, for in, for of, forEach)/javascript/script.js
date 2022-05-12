
// JSON string
let s = '{"name":"siva","age":21,"city":"salem","contact":122345,"email":"abc@gmail.com"}';

// JSON string into object
let a = JSON.parse(s);

// iteration in for in loop
for (const index in a) {
    console.log(index, ":", a[index]);
}