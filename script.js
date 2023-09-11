const list=document.querySelector('ol');
const button= document.querySelector('.add-button')
const input=document.querySelector('.field');
//add
button.addEventListener("click",addToList);
//remove  
list.innerHTML=JSON.parse(localStorage.getItem('bbb'));
list.addEventListener("click",function(e)
{
    if(e.target.tagName==='LI')
    {
       e.target.classList.toggle('checked');
       console.log( e.target.classList)
    }
    else if(e.target.tagName==='SPAN')
    {
        console.log(e.target.parentElement)
        list.removeChild(e.target.parentElement);
        updateData();
    }
})
 function addToList()
 {
    if(input.value=='')
    {
        alert("This field cant be empty");
    }
    else
    {
       const item=document.createElement("li");
       item.innerHTML=`${input.value}`;
       let span=document.createElement('span');
       span.innerHTML='\u00d7';
       item.appendChild(span);
       list.appendChild(item);
       input.value='';
       updateData();
       
    }
 }
 function updateData()
 {
    localStorage.setItem('bbb',JSON.stringify(list.innerHTML));
 }
