const fs = require('fs');

// let conteudo = fs.readFileSync('./logs.log');
// console.log(`tamanho: ${conteudo.length}`);

let stream = fs.createReadStream('./logs.log', 'utf-8');

let data = '';

stream.once('data', () => {
    console.log('Iniciando o stream...');
});

stream.on('data', (chunk) => {
    console.log(`${chunk.length} | `);
    data += chunk;
});

stream.on('end', () => {
    console.log('Fim de stream!\n');
    console.log(data.length);
})