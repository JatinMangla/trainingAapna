function Show()
{	
	var nm=document.getElementById("id1").value;
	var ad=document.getElementById("id2").value;
	var ph=document.getElementById("id3").value;
    var em=document.getElementById("id4").value;
    var op=document.get
	document.getElementById("p1").innerHTML="Details <br> name - "+nm+"<br> address - "+ad+"<br> phone - "+ph+"<br> email - "+em;
}


function Radio()
{
	if(document.getElementById('rb1').checked)
	{
		document.getElementById("p4").innerHTML="Gender - Male";
	}
	else if(document.getElementById('rb2').checked)
	{
		document.getElementById("p4").innerHTML ="Gender - Female";
	}
    else if(document.getElementById('rb3').checked)
	{
		document.getElementById("p4").innerHTML ="Gender - Other";
	}
	
};

function Option()
{
	var opt = document.getElementById("nation");  
    document.getElementById("p2").innerHTML = "Nationality - "+opt.options[opt.selectedIndex].text;
	
};

function Check()
{
	if(document.getElementById('cb1').checked)
	{
		document.getElementById("p3").innerHTML="Course - MBA";
	}
	if(document.getElementById('cb2').checked)
	{
		document.getElementById("p3").innerHTML ="Course - MCA";
	}
	if(document.getElementById('cb3').checked)
	{
		document.getElementById("p3").innerHTML="Course - Btec";
	}
};

function List()
{  
    var mylist = document.getElementById("myList");  
    document.getElementById("p5").innerHTML = "State - "+mylist.options[mylist.selectedIndex].text;  
}  

function All()
{
    Show();
    Option();
    Radio();
    Check();
    List();
}