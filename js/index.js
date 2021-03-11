function roll(dice){
    //Base de Cálculo
    const modInput = document.getElementById("modificador").value;
    const quant = document.getElementById("quantidade").value;
    const maiorCheck = document.getElementById("maior");
    const menorCheck = document.getElementById("menor");
    const quantValue = parseInt(quant);
    const modF = parseInt(modInput);
    let mod = 0, qtd = 0, diceroll = 0;
    let sinal = "";

    //Modificador
    if(modInput === ""){mod = 0;}
    else{mod = modF;}

    //Sinal
    if(mod >= 0){sinal = "+";}
    else{sinal = "";}

    //Cálculo de Rolagem
    if(quant === ""){qtd = 1;}
    else if(quant === "0"){qtd = 1;}
    else if(quant === "-0"){qtd = 1;}
    else{qtd = quantValue;}

    for(let i = 0; i < qtd; i++){
        const calcRoll = Math.floor((Math.random() * dice + 1));
        diceroll += calcRoll;
    }

    //Cálculo final.
    const finalRoll = diceroll + mod;            

    //Subscrição de dados.
    if(qtd < 0){
        document.getElementById("caixaResultado").style.backgroundColor = "white";
        document.getElementById("resultado").style.color = "black";
        document.getElementById("roll").innerHTML = "Você colocou um número negativo de dados. Nenhum resultado obtido.";
        document.getElementById("resultado").innerHTML = 0;
    }
    else if(maiorCheck.checked){
        if(diceroll === 1 * qtd){
        document.getElementById("caixaResultado").style.backgroundColor = "red";
        document.getElementById("resultado").style.color = "black";
        document.getElementById("roll").innerHTML = `Você rolou ${qtd}d${dice}[${diceroll}${sinal}${mod}], resultando um:`;
        document.getElementById("resultado").innerHTML = "ERRO CRÍTICO!";
        }
        else if(diceroll === dice * qtd){
        document.getElementById("caixaResultado").style.backgroundColor = "green";
        document.getElementById("resultado").style.color = "white";
        document.getElementById("roll").innerHTML = `Você rolou ${qtd}d${dice}[${diceroll}${sinal}${mod}], resultando um:`;
        document.getElementById("resultado").innerHTML = "ACERTO CRÍTICO!";               
        }
        else{
        document.getElementById("caixaResultado").style.backgroundColor = "white";
        document.getElementById("resultado").style.color = "black";
        document.getElementById("roll").innerHTML = `Você rolou ${qtd}d${dice}[${diceroll}${sinal}${mod}], resultando um:`;
        document.getElementById("resultado").innerHTML = finalRoll;
        }    
    }
    else if(menorCheck.checked){
        if(diceroll === 1 * qtd){
        document.getElementById("caixaResultado").style.backgroundColor = "green";
        document.getElementById("resultado").style.color = "white";
        document.getElementById("roll").innerHTML = `Você rolou ${qtd}d${dice}[${diceroll}${sinal}${mod}], resultando um:`;
        document.getElementById("resultado").innerHTML = "ACERTO CRÍTICO!";
        }
        else if(diceroll === dice * qtd){
        document.getElementById("caixaResultado").style.backgroundColor = "red";
        document.getElementById("resultado").style.color = "black";
        document.getElementById("roll").innerHTML = `Você rolou ${qtd}d${dice}[${diceroll}${sinal}${mod}], resultando um:`;
        document.getElementById("resultado").innerHTML = "ERRO CRÍTICO!";               
        }
        else{
        document.getElementById("caixaResultado").style.backgroundColor = "white";
        document.getElementById("resultado").style.color = "black";
        document.getElementById("roll").innerHTML = `Você rolou ${qtd}d${dice}[${diceroll}${sinal}${mod}], resultando um:`;
        document.getElementById("resultado").innerHTML = finalRoll;
        }    
    }
    else{
        document.getElementById("caixaResultado").style.backgroundColor = "white";
        document.getElementById("resultado").style.color = "black";
        document.getElementById("roll").innerHTML = `Você rolou ${qtd}d${dice}[${diceroll}${sinal}${mod}], resultando um:`;
        document.getElementById("resultado").innerHTML = finalRoll; 
    }
}