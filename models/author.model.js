
const getAllAuthors = () => {
    return db.query('SELECT * FROM authors');
}

const createAuthor = ({name, email, image}) =>{
    return db.query('INSERT INTO authors (name, email, image) VALUES (?,?,?)', 
    [name, email, image]);
};

const readPostbyAuthor = (id) => {
    return db.query('SELECT * FROM posts WHERE id_author = ?',
    [id]);
}

module.exports = {
    getAllAuthors,
    createAuthor,
    readPostbyAuthor
}