'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const base='https://broad-hill-ce92.cjferper.workers.dev',root=path.join(__dirname,'dist');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);}
(async()=>{
 const paths=files(root),results=[];
 for(let i=0;i<paths.length;i+=5)results.push(...await Promise.all(paths.slice(i,i+5).map(async file=>{
  const name=path.relative(root,file).replaceAll('\\','/');
  const r=await fetch(base+'/'+name+'?v=20261020-f5-movil',{headers:{'Cache-Control':'no-cache'}}),bytes=Buffer.from(await r.arrayBuffer());
  assert.ok(r.ok&&hash(bytes)===hash(fs.readFileSync(file)),'No coincide con el archivo local: '+name);
  return {file:name,status:r.status,sha256:hash(bytes),matchesLocal:true};
 })));
 const rootResponse=await fetch(base+'/?v=20261020-f5-movil');
 assert.ok(rootResponse.ok&&(await rootResponse.text()).includes('vf-ui.js?v=20261020-f5-movil'),'La raíz no sirve la sección V/F.');
 const result={url:base,checkedAt:new Date().toISOString(),rootStatus:rootResponse.status,files:results};
 fs.writeFileSync(path.join(__dirname,'../borradores/fase5/VERIFICACION_PUBLICA.json'),JSON.stringify(result,null,2)+'\n');
 console.log(`${results.length} archivos públicos idénticos por SHA-256; raíz HTTP 200 y sección V/F disponible.`);
})().catch(e=>{console.error(e.message);process.exitCode=1;});
