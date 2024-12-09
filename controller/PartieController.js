const Partie = require("../models/partie");
const Joueur = require("../models/joueur");

async function addjoueur(req, res) {
  try {
    //console.log("body" + req.body);
    const j = new Joueur({
      pseudo: req.body.pseudo,
      sante: 100,
      score: 0,
    });
    await j.save();
    res.status(200).json(j);
  } catch (err) {
    console.log(err);
  }
}

async function showjoueur(req, res) {
  try {
    const j = await Joueur.find();
    res.status(200).json(j);
  } catch (err) {
    console.log(err);
  }
}

async function showbyid(req, res) {
  try {
    const j = await Joueur.findById(req.params.id);
    res.status(200).json(j);
  } catch (err) {
    console.log(err);
  }
}

async function deletejoueur(req, res) {
  try {
    await Joueur.findByIdAndDelete(req.params.id);
    res.status(200).send(" deleted");
  } catch (err) {
    console.log(err);
  }
}

async function attaque(req, res) {
  try {
    const j1 = await Joueur.findById(req.params.id1);
    const j2 = await Joueur.findById(req.params.id2);
    score1 = j1.score + 10;
    sante1 = j2.sante - 20;

    const j1u = await Joueur.findByIdAndUpdate(
      req.params.id1,
      {
        score: score1,
      },
      { new: true }
    );
    const j2u = await Joueur.findByIdAndUpdate(
      req.params.id2,
      {
        sante: sante1,
      },
      { new: true }
    );

    res.status(200).send(j1u + " new result " + j2u);
  } catch (err) {
    console.log(err);
  }
}

async function addpartie(req, res) {
  try {
    //console.log("body" + req.body);
    const p = new Partie({
      nom: req.body.nom,
      joueur_1: req.params.id1,
      joueur_2: req.params.id2,
      etat: "En cours",
    });
    await p.save();
    res.status(200).json(p);
  } catch (err) {
    console.log(err);
  }
}

async function addpartiesocket(data) {
  try {
    //console.log("body" + req.body);
    const p = new Partie({
      nom: data.nompartie,
      joueur_1: data.joueur1,
      joueur_2: data.joueur2,
      etat: "En cours",
    });
    await p.save();
    //res.status(200).json(p);
  } catch (err) {
    console.log(err);
  }
}

async function affichesocket(data) {
  try {
    const j1u = await Joueur.findById(data.joueur1);
    const j2u = await Joueur.findById(data.joueur2);

    return { j1: j1u, j2: j2u };
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  addjoueur,
  showjoueur,
  showbyid,
  deletejoueur,
  attaque,
  addpartie,
  addpartiesocket,
  affichesocket,
};
