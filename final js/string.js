let name="vikash";
let repocount=50;
//console.log(name + repocount)
console.log(`my name is ${name} and my repoacount is ${repocount}`) 

const gameName=new String("vikash")
console.log(gameName)
console.log(typeof gameName) 
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("k" ))

const newString=(gameName.substring(0,4));
console.log(newString);

const newString1=(gameName.slice(-5,5));
console.log(newString1);

const anotherString="    vikash  "
console.log(anotherString);
console.log(anotherString.trim());

const url="https://vikash.com/vikash%20singh"
console.log(url.replace("%20","-"));
console.log(url.includes('kumar'))
console.log(url.at)