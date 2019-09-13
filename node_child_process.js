const { spawn, exec } = require('child_process');
const command = spawn('ab', ['-n', '100', '-c', '100', 'http://google.co.in/']);

//  Spawn creates the child process and streams the data back
//  No size limitation, hence suitable for high data transactions
command.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});

command.stderr.on('data', data => {
  console.error(`stderr: ${data}`);
});

command.on('close', code => {
  console.log(`child process exited with code ${code}`);
});

//  Using exec(), we create a shell and then spawn a process
//  This buffers the data and max data output is 200KB
//  No suitable for high volume of data

exec('ls -lax /kskssksks', (error, stdout) => {
  if (error) {
    console.log('Error', error);
  } else {
    console.log('Output', stdout);
  }
});
