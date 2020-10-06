function validation()
var name= document.getElementById(“name”).value ;
if(name===‘’)
{
alert(“Field is empty”);
return false;
}
var contact= document.getElementById(“contact”).value ;
if(contact===‘’)
{
alert(“Field is empty”);
return false;
}
 if(contact.length!==10)
{
alert(“Invalid length”);
return false;
}
else if(is NaN())
{
alert(“Input Valid Number”)
return false;
}
var email=document.getElementByID(“email”).value;
var at=emailIndexOf(“@”);
var dot=email.lastIndexOf(“.”);
if(at<1 ||dot<at+4 ||dot<=email.length) 
{
alert(“Invalid Email”);
return false;
}
/*for checkbox validation*/
<form name=“form1”>
<input type=checkbox”name=“ch1”>
if(!this.form1.ch1.checked) {
alert(“Click the box”);
return false;
}
<input type=“radio”name=“” value=“”required/checked>

