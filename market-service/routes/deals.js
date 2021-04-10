var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
   'handsetCards': [
    { imageName: 'imge1.jpg', title: '10% off on personal cares', cols: 2, rows: 1 },
    { imageName: 'imge2.jpg', title: 'Extende warranty for headphones', cols: 2, rows: 1 },
    { imageName: 'imge3.jpg', title: '5% discount for POEME', cols: 2, rows: 1 },
    { imageName: 'imge4.jpg', title: 'Bets 8% of watch', cols: 2, rows: 1 }
  ],
   'webCards': [
    { imageName: 'imge1.jpg', title: '10% off on personal cares', cols: 2, rows: 1 },
    { imageName: 'imge2.jpg', title: 'Extende warranty for headphones', cols: 1, rows: 1 },
    { imageName: 'imge3.jpg', title: '5% discount for POEME', cols: 1, rows: 2 },
    { imageName: 'imge4.jpg', title: 'Bets 8% of watch', cols: 1, rows: 1 }
  ],
  };
  res.json(jsonResponse);
});

module.exports = router;
