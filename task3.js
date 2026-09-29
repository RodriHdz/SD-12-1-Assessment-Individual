import { getServerURL } from "./task1.js";

export async function addUser(first_name, last_name, email) {
    const response = await fetch(`${getServerURL()}/users`);
    const users = await response.json();

    const highestId = users.length > 0
        ? Math.max(...users.map(user => user.id))
        : 0;

    const newUser = {
        id: highestId + 1,
        first_name: first_name,
        last_name: last_name,
        email: email
    };

    await fetch(`${getServerURL()}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
}