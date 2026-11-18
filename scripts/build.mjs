import {cpSync,mkdirSync,readFileSync,writeFileSync} from 'node:fs';
mkdirSync('dist/vendor',{recursive:true});cpSync('node_modules/three/build/three.module.js','dist/vendor/three.js');cpSync('node_modules/three/LICENSE','dist/vendor/THREE-LICENSE.txt');
cpSync('dist','site',{recursive:true});
for(const f of ['index.html','style.css']){const p='site/'+f;writeFileSync(p,readFileSync(p,'utf8').replaceAll('"/assets/','"./assets/').replaceAll("'/assets/","'./assets/").replaceAll('"/app.js','"./app.js').replaceAll('"/style.css','"./style.css'));}
