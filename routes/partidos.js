const router = require('express').Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
  getByTorneo,
  getByEquipo,
  getByFecha
} = require('../controllers/partidosController');

router.get('/torneo/:torneo',               getByTorneo);
router.get('/equipo/:equipo',               getByEquipo);
router.get('/fecha/:fechaInicio-:fechaFin', getByFecha);


router.get('/',      getAll);
router.get('/:id',   getById);
router.post('/',     create);
router.put('/:id',   update);
router.delete('/:id', remove);

module.exports = router;
