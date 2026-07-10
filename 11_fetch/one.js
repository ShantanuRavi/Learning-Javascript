// async function getUsers() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         if (!response.ok) {
//             throw new Error("Failed to fetch data");
//         }

//         const users = await response.json();

//         console.log(users);

//     } catch (error) {
//         console.log(error);
//     }
// }

// getUsers();

// const response = await fetch("https://api.github.com/users/shantanuravi")

// if(!response.ok)
// {
//     throw new Error("HTTP error")
// }
// else{
//     const data = await response.json();
//     console.log(data.avatar_url)
// }