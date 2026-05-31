function generate(){

let name =
document.getElementById("name").value;

let father =
document.getElementById("father").value;

let mother =
document.getElementById("mother").value;

let dob =
document.getElementById("dob").value;

let curp =
(father[0] || "")+
(name[0] || "")+
(mother[0] || "")+
dob.replaceAll("-","").slice(2);

document.getElementById("result").innerHTML=
`
CURP: ${curp}<br>
RFC: ${curp.slice(0,10)}XXX
`;
}
