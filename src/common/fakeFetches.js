export const resetFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("SUCCESS") }, 300)
    })
}