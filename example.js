const position = require('./');
const Lexer = require('snapdragon-lexer');
const lexer = new Lexer('foo/bar');
lexer.use(position());

lexer.capture('slash', /^\//);
lexer.capture('text', /^\w+/);

var token = lexer.advance();
console.log(token);
