// Output a prompt
process.stdout.write('prompt > ');
let pwd= require('./pwd');
const fs= require('fs');
const ls= require('./ls');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    // console.log(data);
    const cmd = data.toString().trim(); // remove the new line
    // console.log(cmd);
    process.stdout.write('You typed: ' + cmd);
     if(cmd == 'pwd'){
         pwd(cmd);
     } else if(cmd == 'ls'){
         ls(cmd)
     }
    
    // process.stdout.write('\nprompt > ');
    
});
