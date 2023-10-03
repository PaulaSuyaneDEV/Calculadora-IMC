function calculo(){
   const n1 = document.getElementById('n1').value;
   const n2 = document.getElementById('n2').value;
   const n3 = document.getElementById('n3').value;
   const imc = Math.round(n3 / (n2 * n2)) 
   const res = document.getElementById('res');



   if (imc < 18.5){
    res.style.textAlign = 'center';
    res.innerHTML = `Olá ${n1} o seu IMC é ${imc} <br>ABAIXO DO PESO`
    }

    else if (imc > 18.5 && imc <= 25){
        res.style.textAlign = 'center';
        res.innerHTML = `Olá ${n1} o seu IMC é ${imc}<br> PESO IDEAL `
    }

    else if (imc > 25 && imc <= 30){
        res.style.textAlign = 'center';
        res.innerHTML = `Olá ${n1} o seu IMC é ${imc} <br>ACIMA DO PESO IDEAL`
    }

    else if(imc > 30 && imc <= 35){
        res.innerHTML = `Olá ${n1} o seu IMC é ${imc}<br> MUITO ACIMA DO PESO IDEAL`
    }  
    
    else if (imc > 35 && imc <= 40 ){
        res.innerHTML = `IMC ${imc} <br>ACIMA DO PESO IDEAL E CORRENDO RISCOS`
    }
    
    else {
        res.innerHTML = `Olá ${n1} o seu IMC é ${imc}, <br>ACIMA DO PESO IDEAL E CORRENDO SÉRIOS RISCOS`
    }
}




