const fs = require('fs');
const readline = require('readline');

let i = readline.createInterface(process.stdin, process.stdout);

i.question('Qual é o seu nome? > ', (nome)=>{

    let stream = fs.createWriteStream(`./${nome}.txt`);
    stream.write(`Dito isto: ${nome} \n`);
    //fs.writeFileSync(`./${nome}.txt`, `Dito isto ${nome} \n`);
    process.stdout.write('O que você quer dizer? \n');

    i.on('line', (dito)=>{
        if(dito.trim() == 'sair'){
            stream.close();
            i.close();
        }else{
            stream.write(dito.trim() + '\n');
            //fs.appendFileSync(`./${nome}.txt`, dito.trim() + '\n');
        }
    });
});