
const servicesData = [
  {name:"Teretana",desc:"Savremena oprema",img:"/images/service1.jpg"},
  {name:"Personalni trening",desc:"Rad sa trenerom",img:"/images/service2.jpg"},
  {name:"Kardio zona",desc:"Trake i bicikle",img:"/images/service3.jpg"},
  {name:"Grupni treninzi",desc:"HIIT treninzi",img:"/images/service4.jpg"}
];

const services = document.getElementById("services");

if(services){
  servicesData.forEach(s=>{
    const div=document.createElement("div");
    div.classList.add("card");

    div.innerHTML=`
      <img src="${s.img}">
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
    `;

    services.appendChild(div);
  });
}




const form=document.getElementById("form");
if(form){

  form.addEventListener("submit",e=>{
    e.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let msg=document.getElementById("msg").value;
    let status=document.getElementById("status");

    if(name===""||email===""||msg===""){
      status.innerText="Popunite sva polja!";
      status.style.color="red";
    } else if(!email.includes("@")){
      status.innerText="Email nije validan!";
      status.style.color="red";
    } else{
      status.innerText="Uspešno poslato!";
      status.style.color="lightgreen";
      form.reset();
    }
  });
}

const darkBtn=document.getElementById("darkModeBtn");
if(darkBtn){
  darkBtn.onclick=()=>document.body.classList.toggle("dark");
}

const calcBtn = document.getElementById("calcBtn");

if (calcBtn) {
  calcBtn.addEventListener("click", function () {

    const plan = document.getElementById("plan").value;
    const loyalty = document.getElementById("loyalty").checked;
    const result = document.getElementById("cena");

    let cena = Number(plan);

    // ako ima loyalty karticu
    if (loyalty) {
      cena = cena - (cena * 0.20); // 20% popust
    }

    result.innerText = "Ukupna cena: " + cena + " RSD";

    if (loyalty) {
      result.innerText += " (20% loyalty popust primenjen)";
      result.style.color = "lightgreen";
    } else {
      result.style.color = "white";
    }
  });
}