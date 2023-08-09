import axios from "axios";

// 1
const fetchALotOfData = async (url: string, limit: number) => {
    if (url) {
        if (url.length) {
            console.log("url.length: ", url.length);
            if (limit && limit <= 1000) {
                let res;
                if (isNaN(Number(limit)))
                    try { res = await axios.get<any>(`${url}?limit=${Number(limit)}`); } catch (e) { return null; }
                else {
                    try { res = await axios.get<any>(`${url}?limit=${limit}`); } catch (e) { return null; }
                    if (res && res.data) {
                        if (res.data.errorMessage) {
                            return res.data.errorMessage;
                        }
                        else if (typeof res.data === "object" && res.data.nestedData && res.data.nestedData.studentsList) {
                            return res.data.scopedData.studentsList;
                        }
                        else if (typeof res.data === "object" && res.data.studentsList) {
                            return res.data.studentsList;
                        }
                    }
                    else if (!res) return [];
                }
            }
        }
    }
    else return 'NOT_VALID';
}

// 2
const generateSecretTokenBoo = (number: number) => {
    if (number) {
        if (!isNaN(Number(number))) {
            if (new Date().getDay() !== 4) {
                if (number > 10) {
                    return new Date().getMilliseconds().toString().split(String(number)).join(new Date().getFullYear().toString());
                }
                else if (number > 20) {
                    return new Date().getMilliseconds().toString().split(String(number % 3)).join(new Date().getFullYear().toString());
                }
                else return new Date().getMilliseconds().toString().split(String(number)).join(new Date().getFullYear().toString());
            }
            else if (new Date().getDay() === 4) {
                return new Date().getMilliseconds().toString().split(String(number)).join(new Date().getFullYear().toString());
            }
        } else 'NOT_VALID_CANT_GENERATE';
    }
    return 'NOT_VALID_CANT_GENERATE';
}
