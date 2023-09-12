
        const reajuste = () =>{
        var salario=Number(prompt("Valor do salário"));
        var reajuste=Number(prompt("Valor do reajuste"));
        var tt=salario+reajuste;
        porc=parseInt(reajuste*100/tt+salario);
        alert(`Valor com reajuste: ${porc}`); 
    

        }
        document.addEventListener("DOMContentLoaded",()=> {
            const btnsDatadenasc = [...document.getElementsByClassName("nasc")]
            btnsDatadenasc.forEach((btnDatadenasc) => {
                btnDatadenasc.addEventListener('click',(evt)=>{
                    var ano = prompt("Qual é a aua idade? ");
                    var ano2 = prompt("Que ano nós estamos? ");
                    ano = parseInt(ano);
                    ano2 = parseInt(ano2);
                    var data = (ano2 - ano);
                
                    alert(`Você nasceu em ${data}`)
                })
            });
        }
        )
        addEventListener("DOMContentLoaded", ()=>{
            const btnMaiorMenor=[...document.getElementsByClassName("cem")]
            btnMaiorMenor.forEach((el)=> {
                el.addEventListener("click",()=>{
                    let num = Number(prompt("Escreva um número:"));
                    if(num>=100 ? alert(`${num} é ou igual a cem`) : alert(`${num} é menor do que cem`));
                })
            })
        })
        
        const areadoretangulo1=()=>{
            var h = Number(prompt("Altura do retângulo"));
            var b = Number(prompt("Base do retângulo"));
            var a = b * h;
        
            alert("A área do retângulo é: "+a);
        }
        
        const arraY=()=>{
            let numeros = new Array();
            let Qtd = parseInt (prompt("Defina a quantidade de números a serem digitados: "))
            for(let i=0; i<Qtd; i++){
                numeros[i] = parseInt (prompt(`Digite o ${i+1}º número inteiro : `))
            }   
            alert(`Os números digitados foram ${numeros} respectivamente`)
        }
    const trianguloretangulo = ()=>{
        var h = Number(prompt("Autura do Triângulo retângulo: "));
        var b = Number(prompt("Base do Triângulo retângulo: "));
        var a = b * h;

        alert("Há área do retângulo é: "+a);
    }
    
    const salario = ()=> {
        var valorHora = Number(prompt("Digite o valor da sua hora: "))
        var quantidadesHoras = Number(prompt("Quantas hora você trabalha? "))
        var salario = valorHora * quantidadesHoras;
        alert(`O valor do seu sálario deve ser de ${salario}R$`)
    }

    const idade = () =>{
        var nasc = Number(prompt("Em que ano você nasceu? "));
        var anoAtual = 2022;
        var idade = anoAtual - nasc;
        alert(`Você tem: ${idade} anos.`)
    }

    const media = () => {
        var qtdNotas= (prompt("Digite a quantidade de notas: "));
        var soma = 0
        var notas = new Array()
        for(let i = 0; i<qtdNotas;i++){
            notas[i]=Number(prompt(`Digite a ${i +1}º nota: `))
            var soma = soma + notas[i]
        }
        let media = soma/qtdNotas
        
        
    //     var soma = 0;
    //     var i = 1;
    //     while(i <= qtdNotas){
    //         var nota = Number(prompt("Digite uma nota: "))
    //         var soma = soma + nota;
    //         var i = i +1;
    // }
    // var media = soma/qdtNotas;
    alert(`A média de notas é: ${media}`);
    }

    const dobro = () => {
        let num=prompt("Escreva um Número: ")
        let dobro = num*2;
        alert("Dobro do número é: " + dobro)
    }
    const diasViajado = () => {
    let viagem = Number(prompt("Escreva quantas horas você viajou: "));
    let diasViajados = (viagem/24);
    alert(`Você viajou: ${diasViajados.toFixed(2)} dias`);
    }
    
    function parimpar(){
           let num = Number(prompt("Digite um número: "));
           if(num % 2 == 0 ? alert (`${num} é par`) : alert (`${num} é impar`));
    }
    // if(num % 2 == 0){
    //     alert ('Esse número é par');
    // } else {
    //     alert ('Esese número e impar');
    // }
    // }

    const horasvividas= ()=>{
    let vida=Number(prompt("Sua idade: "))
    let horas=vida*8760
    alert(`Você viveu ${horas} horas`)
    }
    /*Exercício: Perguntar ao usuário PESO E ALTURA para
    calcular o IMC. Após calcular o IMC, validar se está
    dentro da seguinte classificação:
    IMC    Categoria
    < 20,7  Abaixo do peso
    20,7 a 26,4 Peso ideal
    26,5 a 27,8 Pouco acima do peso
    27,9 a 31,1 Acima do peso
    31,2 e acima Obesidade
    imc = peso/(altura**2)*/
    const calcular = ()=>{
    let peso = Number(prompt("Digite seu peso: "));
    let altura = Number(prompt("Digite sua altura: "));
    imc = peso/(altura**2); 
    if(imc < 20.7){
        alert("Abaixo do peso " + imc.toFixed(1));
    }else if(imc >= 20.7 && imc <= 26.4){
        alert("Peso ideal " + imc.toFixed(1));
    }else if(imc > 26.4 && imc <=27.8){
        alert("Pouco acima do peso " + imc.toFixed(1));
    }else if(imc > 27.8 && imc <= 31.1){
        alert("Acima do peso " + imc.toFixed(1));
    }else{
        alert("Obeso");
    }
}

    const operar = ()=>{
    var tabf = parseInt(prompt("Qual tabuada você quer? "));
    var lim = parseInt(prompt("Até que número? "));
    var opr = prompt("Que operação deseja realizar? (multipllicação, divisão, soma ou subtração.) ");
    switch(opr.toLowerCase()){
        case "multiplicação":
        for(i=0; i<= lim; i++){
            var resultado = tabf * i;
            alert (`${tabf} x ${i} = ${resultado}`);
        }
        break
        case "divisão":
        //try{
        // for(i=1; i<= lim; i++){
        //     var resultado = (tabf / i);
        //     var resultadoArr = parseFloat(resultado.toFixed(2));
        // alert (`${tabf} / ${i} = ${resultadoArr}`);
        // }
        break
        case "Divisão":
        for(i=1; i<= lim; i++){
            var resultado = (tabf / i);
            var resultadoArr = parseFloat(resultado.toFixed(2));
        alert (`${tabf} / ${i} = ${resultadoArr}`);
        }
        break
        case "soma":
        for(i=0; i<= lim; i++){
            var resultado = tabf + i;
            alert (`${tabf} + ${i} = ${resultado}`);
        }
        break

        case "subtração":
        for(i=0; i<= lim; i++){
            var resultado = tabf - i;
        alert (`${tabf} - ${i} = ${resultado}`);
        }
        break

        default:
        alert ("Operação inválida. Verifique se a operação desejada foi digitada corretamente!!!")
    }
    
}
