var hour=new Date().getHours();

if(hour>=06 && hour<12){
    document.body.style.backgroundColor='#f9f3c5';
    alert('Səhər-Günorta')
}
if(hour>=12 && hour<18){
    document.body.style.backgroundColor='#b3c7dc';
    alert('Günorta')
}
if(hour>=18 && hour<24){
    document.body.style.backgroundColor='#646f6f';
    alert('Günorta-Axşam')
}
if(hour>=00 && hour<06){
    document.body.style.backgroundColor='#292929';
    alert('Axşam')
}

