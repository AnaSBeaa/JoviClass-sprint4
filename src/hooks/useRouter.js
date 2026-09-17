import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";

export function useRouter() {
    return useContext(RouterContext);
}
