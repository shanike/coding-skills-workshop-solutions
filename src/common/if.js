// 1
const fetchALotOfData = (url, limit) => {
    if (url) { //
        if (url.length) { // 
            console.log("url.length: ", url.length);
            if (limit && limit <= 1000) { //! ^
                let res;
                if (isNaN(Number(limit)))
                    try { res = await fetch(`${url}?limit=${Number(limit)}`); } catch (e) { return null; }
                else { //!
                    try { res = await fetch(`${url}?limit=${limit}`); } catch (e) { return null; }
                    if (!res) return;
                    if (res.errorMessage) {
                        return res.errorMessage;
                    }
                    else if (typeof res === "object" && res.data && res.data.studentsList) {
                        return res.data.studentsList;
                    }
                    else if (typeof res === "object" && res.studentsList) {
                        return res.studentsList;
                    }
                    // }
                    // else if (!res) return [];
                }
            }
        }
    }
    else return 'NOT_VALID';
}

// 1 better
const GoodfetchALotOfData = (url, limit) => {
    if (!url || !url.length || isNaN(Number(limit)) || !limit || limit > 1000)
        return 'NOT_VALID';
    console.log("url.length: ", url.length);
    try {
        let res = await fetch(`${url}?limit=${limit}`);
        if (!res || typeof res !== "object")
            return [];
        if (res.errorMessage) return res.errorMessage
        if (res.data && res.data.studentsList) return res.data.studentsList;
        if (res.studentsList) return res.studentsList
    } catch (e) { return null; }
}


// 2
const generateSecretTokenBoo = (number) => {
    if (number) {
        if (number.length) {
            if (new Date().getDay() !== 4) {
                if (number > 10) {
                    return new Date().getMilliseconds().split(number).join(new Date().getFullYear());
                }
                else if (number > 20) {
                    return new Date().getMilliseconds().split(number % 3).join(new Date().getFullYear());
                }
                else return new Date().getMilliseconds().split(number).join(new Date().getFullYear());
            }
            else if (new Date().getDay() === 4) {
                return new Date().getMilliseconds().split(number).join(new Date().getFullYear());
            }
        } else 'NOT_VALID_CANT_GENERATE'; //!
    }
    return 'NOT_VALID_CANT_GENERATE'; //!  ^
}
