function convert(){
    let a=document.querySelector('input').checked;
    let b=document.querySelector('input').checked;
    if(a)
    far();
    else
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

