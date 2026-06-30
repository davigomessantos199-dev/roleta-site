let saldo = 1000;

function girar(){
    const premios = [
        {nome:"50 Coins", valor:50},
        {nome:"100 Coins", valor:100},
        {nome:"500 Coins", valor:500},
        {nome:"Nada 😢", valor:0},
        {nome:"Jackpot 🔥", valor:1000}
    ];

    const premio = premios[Math.floor(Math.random() * premios.length)];

    const roleta = document.getElementById("roleta");
    roleta.style.transform = "rotate(" + (1440 + Math.random()*360) + "deg)";

    setTimeout(()=>{
        saldo += premio.valor;
        document.getElementById("saldo").innerText = saldo;
        document.getElementById("resultado").innerText =
            "Você ganhou: " + premio.nome;
    },3000);
}
