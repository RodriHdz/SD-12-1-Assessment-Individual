// Task 4: delUser(number)
import { getServerURL } from "./task1.js";

export async function delUser(id) {
    await fetch(`${getServerURL()}/users/${id}`, {
        method: "DELETE"
    });
}
