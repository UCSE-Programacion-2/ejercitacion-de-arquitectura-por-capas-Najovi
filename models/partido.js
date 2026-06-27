const mongoose = require('mongoose');

const partidoSchema = new mongoose.Schema({
  date:       { type: String, required: true },
  home_team:  { type: String, required: true },
  away_team:  { type: String, required: true },
  home_score: { type: Number, required: true },
  away_score: { type: Number, required: true },
  tournament: { type: String, required: true },
  city:       { type: String },
  country:    { type: String },
  neutral:    { type: Boolean, default: false }
});

module.exports = mongoose.model('Partido', partidoSchema, 'partidos');
