export function ReverseArrayAndIncrease(arr: number[]) {
    return arr.reverse().map(item => item++).filter(item => item > 0).map(item => console.log(item));
}

export async function AsyncArr(array: string[]) {
    console.log("start func 1")
    let counter = 0;
    array.forEach(async (item) => {
        counter++;
        let res = await fetch(item).then(res => res.json());
        console.log('res:', res)
        console.log("counter", counter)
    })
    console.log("Done func 1.")
}


const sAB = (l: any) => {
    let nl = [...l]
    let t = {}

    for (let i = 0; i < nl.length; i++) {
        for (let j = i + 1; j < nl.length; j++) {
            if (nl[i].name > nl[j].name) {
                t = nl[i];
                nl[i] = nl[j];
                nl[j] = t;
            }
        }
    }
    return nl
};
