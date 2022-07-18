// Importamos los operadores que nos permiten hacer consultas más interesantes
const { Op } = require("sequelize");

// Traemos la DB
const db = require('../models');

// SELECT * FROM libros
// JOIN ..... autor
const getBooks = async () => {
    const libros = await db.libro.findAll({
                            include: db.autor
                        })
                        .then(results => {
                            return results;
                        });

    return libros;
}

const getAuthors = async () => {
    const authors = await db.autor.findAll({
                        order: ['nombreCompleto'],
                    }).then(results => {
                        return results;
                    });

    return authors;
}

const getBookById = async (id) => {
    // console.log('Recibiste', id);
    // Find by primary key / buscar por ID
    const book = await db.libro.findByPk(id, {include: db.autor})
                    .then(result => {
                        return result;
                    });

    return book;
};

// WHERE titulo LIKE "%termino%"
const findBookByTitle = async (termino) => {
    const books = await db.libro.findAll({
        where: {
            titulo: {
                [Op.substring]: termino,
            }
        }
    }).then(result => {
        return result;
    });

    return books;
}

const insertBook = async (titulo, precio, portada, autorId) => {
    const libro = await db.libro.create({
        titulo, precio, portada, autorId
    });
    return libro;
}


module.exports = {
    getBooks,
    getAuthors,
    getBookById,
    findBookByTitle,
    insertBook
}
