var express = require('express');
var router = express.Router();

// Importamos nuestra api
const api = require('../api');

/* GET home page. */
router.get('/libros', async (req, res) => {
  const libros = await api.getBooks();
  res.send(libros);
});

router.get('/libro/:id', async (req, res) => {
  // Le enviamos como parámetro el ID del libro que quiere ver el usuario
  const libro = await api.getBookById(req.params.id);
  res.send(libro);
});

// Mostrar el listado en JSON de todos los autores
router.get('/autores', async (req, res) => {
  const autores = await api.getAuthors();
  res.send(autores);
});

/* POST agregar-libro */
router.post('/agregar-libro', async (req, res) => {
  let {titulo, autor, precio} = req.body;

  // titulo, precio, portada, autorId
  await api.insertBook(titulo, precio, '', autor);

  res.status(200).send('ok');
});


module.exports = router;
