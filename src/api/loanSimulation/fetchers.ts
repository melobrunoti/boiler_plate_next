import { BASE_API, NEXT_PUBLIC_CONTAINER_V2_API } from "@/constants";
import { loggedFetchConteiner } from "../config";

export function getLoanTipes() {
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/product`);
} 