function clean(text){
return text
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")
.toUpperCase()
}

function firstVowel(word){

for(let i=1;i<word.length;i++){

if("AEIOU".includes(word[i])){
return word[i]

}

}

return "X"

}

function getDate(date){

return date
.replaceAll("-","")
.slice(2)

}

function generateCURP(){

let first=
clean(
document.getElementById("firstName").value
)

let father=
clean(
document.getElementById("fatherName").value
)

let mother=
clean(
document.getElementById("motherName").value
)

let dob=
getDate(
document.getElementById("birthDate").value
)

let gender=
document.getElementById("gender").value

let curp=
father[0]+
firstVowel(father)+
mother[0]+
first[0]+
dob+
gender

return curp+"XXXX"
}

function generate(){

let curp=
generateCURP()

document.getElementById(
"output"
).innerHTML=
`
<p><b>CURP:</b> ${curp}</p>
<p><b>RFC:</b> ${curp.slice(0,10)}XXX</p>
`

}
