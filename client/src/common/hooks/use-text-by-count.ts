import { useRef } from "react";

export function useTextByCount(texts: { none?: string, single: string, multi: (count: number) => string }) {

    const textsRef = useRef(texts);

    function generateTextByCount(count: number) {
        if (!count && typeof textsRef.current.none === "string") {
            return textsRef.current.none
        }
        if (count === 1) {
            return textsRef.current.single;
        }
        return textsRef.current.multi(count);
    }

    return generateTextByCount;

}
