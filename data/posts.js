import { USERS } from "./users";
export const POSTS = [
    {
        imageurl: 'https://picsum.photos/200/300',
        user: USERS[0].user,
        likes:7000,
        caption: 'Wagwannnnn',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'nobelP',
                comment: 'This is fire bro'
            },
            {
                user: 'fammmmm',
                comment: 'Nahhhhhhhhhhh this is class'
            },
        ]
    },
    {
        imageurl: 'https://picsum.photos/200/300',
        user: USERS[1].user,
        likes:72000,
        caption: 'wake uppppp',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'nobelP',
                comment: 'No'
            },
            {
                user: 'fammmmm',
                comment: 'Im sleeping'
            },
        ]
    }
]