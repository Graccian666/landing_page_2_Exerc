AOS.init();

const dataLanca = new Date("Sep 26, 2024 12:00:00");
const timeLanca = dataLanca.getTime();

const timer = setInterval(function(){
    const agora = new Date();
    const timeAtual = agora.getTime();

    const difTime = timeLanca - timeAtual

    const diasAte = Math.floor(difTime / (1000*60*60*24))
    const horasAte = Math.floor(difTime % (1000*60*60*24) / (1000*60*60))
    const minutosAte = Math.floor(difTime % (1000*60*60 ) / (1000*60))
    const segundosAte = Math.floor(difTime % (1000*60) / (1000))

    document.getElementById('timer').innerHTML = `${diasAte}d ${horasAte}h ${minutosAte}m ${segundosAte}s`

    if(difTime < 0){
        document.getElementById('timer').innerHTML = `Jogo já Lançado`
    }
},1000)

