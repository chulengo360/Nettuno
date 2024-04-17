var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingresso",
      "name": "Ingresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -2.6015783209366568,
        "pitch": 0.4428116953828223,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": 2.633000588775733,
          "pitch": 0.06409567023132645,
          "rotation": 0,
          "target": "2-corridoio"
        },
        {
          "yaw": -2.60297400763433,
          "pitch": 0.20587489959065763,
          "rotation": 0,
          "target": "1-salotto"
        },
        {
          "yaw": 2.009502989927073,
          "pitch": 0.07618675262270891,
          "rotation": 0,
          "target": "6-cucina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salotto",
      "name": "Salotto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -2.558188419723024,
        "pitch": 0.0475500482190192,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": 1.2764093750151382,
          "pitch": 0.04253008747592446,
          "rotation": 0,
          "target": "2-corridoio"
        },
        {
          "yaw": 0.9266030703955668,
          "pitch": 0.005899698286251365,
          "rotation": 0,
          "target": "6-cucina"
        },
        {
          "yaw": 0.21238024994498161,
          "pitch": 0.04248260889326616,
          "rotation": 0,
          "target": "0-ingresso"
        },
        {
          "yaw": -2.5602739668404766,
          "pitch": 0.14556782514252475,
          "rotation": 0,
          "target": "7-esterno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridoio",
      "name": "Corridoio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -3.0406411356673324,
        "pitch": 0.3156962512438657,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": 2.8793728698246444,
          "pitch": 0.02925889061621767,
          "rotation": 0,
          "target": "3-bagno"
        },
        {
          "yaw": -2.7962193747710913,
          "pitch": 0.06499052647434667,
          "rotation": 0,
          "target": "5-camera-da-letto"
        },
        {
          "yaw": -0.062152068954349105,
          "pitch": 0.12048428850211224,
          "rotation": 0,
          "target": "0-ingresso"
        },
        {
          "yaw": -1.1714943133691804,
          "pitch": 0.13539363573883634,
          "rotation": 0,
          "target": "1-salotto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bagno",
      "name": "Bagno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.8803429007341768,
        "pitch": 0.04641384634998502,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": -0.3690669212074553,
          "pitch": 0.1040288251488839,
          "rotation": 0,
          "target": "2-corridoio"
        },
        {
          "yaw": 2.742187164503468,
          "pitch": -0.10923312497601856,
          "rotation": 0,
          "target": "4-borgo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-borgo",
      "name": "Esterno lato borgo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.092926336082445,
        "pitch": 0.31764811026049244,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": -2.620390989999697,
          "pitch": 0.23096284344277507,
          "rotation": 0,
          "target": "3-bagno"
        },
        {
          "yaw": 2.6454939490843534,
          "pitch": 0.11011324561237501,
          "rotation": 0,
          "target": "7-esterno"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.135148388166529,
          "pitch": -0.09266178627166965,
          "title": "San Giovanni Battista",
          "text": "<div>La chiesa dei Santi Giovanni Battista ed Evangelista, nota anche semplicemente come chiesa di San Giovanni, è la parrocchiale di Nettuno, in città metropolitana di Roma Capitale e sede suburbicaria di Albano; fa parte della vicaria di Nettuno.</div><div><br></div><div>L'antica città di Antium divenne sede vescovile già in epoca paleocristiana; la diocesi di Anzio venne soppressa nel VII secolo e aggregata alla sede suburbicaria di Albano.</div><div><br></div><div>I privilegi che spettavano alla cattedrale della soppressa diocesi anziatina furono ereditati probabilmente dalla collegiata di Nettuno, sorta lì dove precedentemente esisteva un tempio pagano intitolato al dio Nettuno e dedicata all'Assunzione della Beata Vergine Maria; ciò può essere comprovato dal fatto che per secoli la pieve nettunese si fregiò del titolo di matrice di Anzio e Conca, come testimoniato pure dalla relazione della visita del 1636 del cardinale Emilio Altieri. Inoltre, in altri documenti la collegiata di Nettuno era menzionata come concattedrale della diocesi albanense.</div><div><br></div><div>Nel 1738 la vecchia chiesa fu demolita per far posto alla nuova parrocchiale; l'edificio, disegnato dall'architetto Carlo Marchionni, venne portato a compimento nel 1748.</div>"
        },
        {
          "yaw": 1.7396178790025312,
          "pitch": -0.027908557575141657,
          "title": "Porto di Nettuno",
          "text": "<div>Il porto Marina di Nettuno è un porto turistico che si sviluppa nel comune di Nettuno.</div><div>Lo stretto legame con il Mar Tirreno ha permesso lo sviluppo dell'attività portuale. Fu costruito nel 1986, in seguito al forte incremento demografico che riguardò la zona.</div>"
        }
      ]
    },
    {
      "id": "5-camera-da-letto",
      "name": "Camera da letto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.7201186261713906,
        "pitch": 0.7454239185968703,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": -0.03156836420541964,
          "pitch": 0.16005144801617277,
          "rotation": 0,
          "target": "2-corridoio"
        },
        {
          "yaw": -2.7513639516279227,
          "pitch": -0.03406770052590069,
          "rotation": 0,
          "target": "7-esterno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cucina",
      "name": "Cucina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 1.7217165575309705,
        "pitch": 0.151727526524283,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": 2.2680067781875763,
          "pitch": -0.06732772796105735,
          "rotation": 0,
          "target": "4-borgo"
        },
        {
          "yaw": -0.7340762918986705,
          "pitch": 0.10292579743663488,
          "rotation": 0,
          "target": "0-ingresso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-esterno",
      "name": "Esterno lato piazza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.7123918379312357,
        "pitch": 0.2063111639254558,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": -1.061139898389003,
          "pitch": 0.015934123961068636,
          "rotation": 0,
          "target": "4-borgo"
        },
        {
          "yaw": -2.713520163401519,
          "pitch": 0.20416055434474423,
          "rotation": 0,
          "target": "0-ingresso"
        },
        {
          "yaw": -2.6139190957142233,
          "pitch": -0.04428909351824828,
          "rotation": 0,
          "target": "8-terrazza"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5771907585531295,
          "pitch": -0.0563567294404681,
          "title": "Porto di Nettuno",
          "text": "<div>Il porto Marina di Nettuno è un porto turistico che si sviluppa nel comune di Nettuno.</div><div>Lo stretto legame con il Mar Tirreno ha permesso lo sviluppo dell'attività portuale. Fu costruito nel 1986, in seguito al forte incremento demografico che riguardò la zona.</div>"
        }
      ]
    },
    {
      "id": "8-terrazza",
      "name": "Terrazza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 1.2462997952639885,
        "pitch": 0.12621680918695155,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": 1.3577294458889195,
          "pitch": -0.047843986845528264,
          "rotation": 0,
          "target": "7-esterno"
        },
        {
          "yaw": -0.014703255413358818,
          "pitch": 0.1330255589130509,
          "rotation": 0,
          "target": "4-borgo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
