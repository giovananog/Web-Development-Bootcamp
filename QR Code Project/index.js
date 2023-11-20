import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'

let url;

inquirer
  .prompt([
    {
        "type": 'input',
        "name": 'url',
        "message": 'Type in your URL: ',
    },
  ])
  .then((answers) => {
    url = answers['url'];
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-img-test.png'));
    fs.writeFile('URL.txt', url, error => {
        if (error) throw error;
        console.log('The file has been saved!');
        });
  });
