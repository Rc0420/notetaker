console.log("first line of js");
showNote();
let addbtn=document.getElementById('add_btn');
addbtn.addEventListener('click',function(e){
let addtext=document.getElementById('add_text');
let notes=localStorage.getItem('note');

if(notes==null)
{
    noteObj=[];
}
else
{
   noteObj=JSON.parse(notes);
}
noteObj.push(addtext.value);
localStorage.setItem('note',JSON.stringify(noteObj));
addtext.value="";
console.log(noteObj);
showNote();
});

function showNote()
{
    let notes=localStorage.getItem('note');

if(notes==null)
{
    noteObj=[];
}
else
{
   noteObj=JSON.parse(notes);
}
let html="";
noteObj.forEach(function(element,index) {
    html+=` <div  class=" nodeCard mx-2 my-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <a href="#" id="${index}" onclick="deleteN(this.id)" class="btn btn-outline-primary">Delete Note</a>
    </div>
</div>`;
});
let notesrep=document.getElementById("note");
if(noteObj.length!=0)
{
    notesrep.innerHTML=html;
} 
}


function deleteN(index)
{
    let notes=localStorage.getItem('note');

    if(notes==null)
    {
        noteObj=[];
    }
    else
    {
       noteObj=JSON.parse(notes);
    }

    noteObj.splice(index,1);
    localStorage.setItem('note',JSON.stringify(noteObj));
    showNote();
}

let stext=document.getElementById("search_text");

stext.addEventListener('input',function(e){
    let inputtext=stext.value;
    console.log(inputtext);
    let notecard=document.getElementsByClassName("nodeCard");
    Array.from(notecard).forEach(function(element){
        let cardtext=document.getElementsByTagName("p")[0];
      console.log(cardtext);
    });


})


