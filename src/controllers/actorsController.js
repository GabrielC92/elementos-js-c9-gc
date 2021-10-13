const db = require('../database/models');

module.exports = {
    list: (req,res) => {
        db.Actor.findAll()
            .then(actors => {
                res.render('actorsList',{
                    actors,
                    title: 'Listado de Actores'
                })
            })
            .catch(error => console.log(error));
    },
    detail: (req,res) => {
        db.Actor.findByPk(req.params.id)
            .then(actor => {
                res.render('actorsDetail',{
                    actor,
                    title: `${actor.first_name} ${actor.last_name}`
                })
            })
            .catch(error => console.log(error));
    }
}