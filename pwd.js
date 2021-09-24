
module.exports= (cmd) =>{
    if(cmd == 'pwd'){
        process.stdout.write(`Current directory: ${process.cwd()}`);
    }
    process.stdout.write('\nprompt > ');
};