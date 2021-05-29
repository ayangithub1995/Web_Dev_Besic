const addButton=document.querySelector("#add")
const list=document.querySelector("#list")

addButton.addEventListener("click", function()
{
   const inputBox=document.querySelector("#text-input");
   const li=document.createElement("li")
   li.textContent=inputBox.value;
   li.classList.add("list-content");
   li.style.border="1px solid black"//not a good way for giving style .This is one type to give style within js.
   list.append(li);  
   inputBox.value="";
});