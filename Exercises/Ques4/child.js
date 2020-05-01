const childProcess = require('child_process');

childProcess.execFile('ls', [ '/tmp'], (error, stdout, stderr)=>{
    if(error){
        throw(error);
    }
	console.log(stdout);
});