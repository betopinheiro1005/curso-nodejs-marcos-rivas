const exec = require('child_process').exec

exec('ls', (err, stdout) =>{
    if(err){
        throw err;
    }

    console.log('Comando executado!');
    console.log(stdout);
});