export interface Post {
    id: number,
    title: String,
    content: String,
    imageUrl: String,
    user: {
        id: String,
        nickname: String
    },
    group: {
        id: number,
        name: String
    },
    votes: Object[],
    comments: Object[]
}