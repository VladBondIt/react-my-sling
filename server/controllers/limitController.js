const fs = require('fs');

class LimitController {

    async writeLimit(req, res) {

        const { limit } = req.body

        fs.writeFile('../../react-my-sling/client/src/services/limit.js', `export const LIMIT = ${limit}`, 'utf8', function (err) {
            if (err) console.log(err);
        });

        return res

    }

}

module.exports = new LimitController()