import { useSearchParams } from "react-router-dom";

export const useIsAdmin = () => {
    const searchParams = useSearchParams()[0];
    return searchParams.get("isAdmin") === "t";
};
