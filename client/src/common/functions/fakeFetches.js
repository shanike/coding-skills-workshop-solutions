export const resetFetch = (...props) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("SUCCESS") }, 300)
    })
}