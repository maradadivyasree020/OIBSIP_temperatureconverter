function convert(){
    let a=document.querySelector("input[name='temp']:checked");
    if(a.id==="cels")
    far();
    if(a.id==="fare")
    cel();
}

function far(){
    let b=document.querySelector('input').value;

    let ans=(b*1.8)+32;
    console.log(ans);

    let c=document.querySelector('#cel');
    let f=document.querySelector('#far');  

    c.innerHTML=b;
    f.innerHTML=ans;
} 

function cel(){
    let b=document.querySelector('input').value; 

    let ans=((b*1)-32)*0.56;
    console.log(ans);

    let c=document.querySelector('#cel');
    let f=document.querySelector('#far');

    c.innerHTML=ans;
    f.innerHTML=b;
}

function clear(){
    let b=document.querySelector('input');
    b.value="";
}

