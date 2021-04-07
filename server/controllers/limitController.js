const fs = require('fs');
const path = require('path')

class LimitController {

    async writeLimit(req, res) {

        const { limit } = req.body

        fs.writeFile(path.resolve(__dirname, '../../client/src/services/limit.js'), `export const LIMIT = ${limit}`, 'utf8', function (err) {
            if (err) console.log(err);
        });

        return res

    }

}

module.exports = new LimitController()