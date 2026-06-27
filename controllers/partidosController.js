const Partido = require('../models/partido');


const getAll = async (req, res) => {
  try {
    const partidos = await Partido.find().limit(20);
    res.json(partidos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener partidos', error: error.message });
  }
};


const getById = async (req, res) => {
  try {
    const partido = await Partido.findById(req.params.id);
    if (!partido) {
      return res.status(404).json({ mensaje: 'Partido no encontrado' });
    }
    res.json(partido);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar partido', error: error.message });
  }
};


const create = async (req, res) => {
  try {
    const nuevoPartido = await Partido.create(req.body);
    res.status(201).json(nuevoPartido);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear partido', error: error.message });
  }
};


const update = async (req, res) => {
  try {
    const actualizado = await Partido.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }       
    );
    if (!actualizado) {
      return res.status(404).json({ mensaje: 'Partido no encontrado' });
    }
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar partido', error: error.message });
  }
};


const remove = async (req, res) => {
  try {
    const eliminado = await Partido.findByIdAndDelete(req.params.id);
    if (!eliminado) {
      return res.status(404).json({ mensaje: 'Partido no encontrado' });
    }
    res.json({ mensaje: 'Partido eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar partido', error: error.message });
  }
};


const getByTorneo = async (req, res) => {
  try {
    const partidos = await Partido.find({ tournament: req.params.torneo });
    res.json(partidos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar por torneo', error: error.message });
  }
};


const getByEquipo = async (req, res) => {
  try {
    const partidos = await Partido.find({
      $or: [
        { home_team: req.params.equipo },
        { away_team: req.params.equipo }
      ]
    });
    res.json(partidos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar por equipo', error: error.message });
  }
};


const getByFecha = async (req, res) => {
  try {
    const { fechaInicio, fechaFin } = req.params;
    const partidos = await Partido.find({
      date: {
        $gte: fechaInicio,  
        $lte: fechaFin        
      }
    });
    res.json(partidos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar por fecha', error: error.message });
  }
};

module.exports = { getAll, getById, create, update, remove, getByTorneo, getByEquipo, getByFecha };
