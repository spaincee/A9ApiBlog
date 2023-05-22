const getAllPostsWithAuthor = () => {
    return db.query('SELECT p.id_post, p.title, p.description, p.created_date, p.category , a.name as author, a.email, a.image FROM posts as p JOIN authors as a ON p.id_author = a.id_author');
};

const readPost = (id) => {
    return db.query('SELECT p.id_post, p.title, p.description, p.created_date, p.category , a.name as author, a.email, a.image FROM posts as p JOIN authors as a ON p.id_author = a.id_author WHERE p.id_post = ?',
    [id]);
}

const createPost = ({title, description, category, author}) =>{
    return db.query('INSERT INTO posts (title, description, category, id_author) VALUES (?,?,?,?)', 
    [title, description, category, author]);
};

module.exports = {
    getAllPostsWithAuthor,
    createPost,
    readPost
}