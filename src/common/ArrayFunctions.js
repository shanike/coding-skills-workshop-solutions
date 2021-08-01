export function ReverseArrayAndIncrease(arr) {
    for (let i in arr) {
        arr[arr.length - i - 1] += 1;
        
    }   
    return arr.reverse().map(item => item++).map(item => console.log(item));
}





























export async function AsyncArr(array) {
    console.log("start func 1")
    let counter = 0;
    array.forEach(async (item) => {
        let res = await fetch(item).then(res => res.json());
        counter++;
        console.log('res:', res)
        console.log("counter", counter)
    })
    console.log("Done func 1.")
}

export async function AsyncArr2(array) {
    console.log("start func 2")
    let counter = 0;
    for (let item of array) {
        counter++;
        let res = await fetch(item).then(res => res.json());
        console.log("res", res)
        console.log("counter", counter)
    }
    console.log("Done func 2.")
}














export const callFunctions = () => {
    // ReverseArrayAndIncrease([1, 2, 3, 4]);

    // AsyncArr(["https://swapi.dev/api/people/1", "https://swapi.dev/api/planets/1", "https://swapi.dev/api/people/5"]);
    AsyncArr2(["https://swapi.dev/api/people/1", "https://swapi.dev/api/planets/1", "https://swapi.dev/api/people/5"])
}