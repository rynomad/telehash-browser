require("./includes/forge.min.js")
var thjs = require("thjs")
var thForge = require("./thforge.js")
thjs.localize(thForge)
thjs.forge = thForge

thjs.seeds = require('./seeds.js');
thjs.web = require('./thweb.js');


module.exports = thjs;
