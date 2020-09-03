import * as wasm from "benchmark";

//wasm.greet();

var start = new Date()

wasm.iterate_array(1000, "Lorem Ipsum");
var end = new Date() - start
console.info('Execution time: %dms', end)

var start = new Date()


let my_string = ""
for (let i = 0; i < 100000000; i++) {
    my_string += "a";
}

var end = new Date() - start


console.info('Execution time: %dms', end)
