function getfile(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);
		}
	}
	htp.send(null);
}

getfile("dynamic.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	languages(data.languages);
})

var left=document.querySelector(".leftdiv");
function profile(p){
	var pimg=document.createElement("img");
	pimg.src=p.img;
	left.appendChild(pimg);
	var ph3=document.createElement("h3");
	ph3.textContent=p.name;
	left.appendChild(ph3);
	var r=document.createElement("p");
	r.textContent=p.roll;
	left.appendChild(r);
	var c=document.createElement("p");
	c.textContent=p.institute;
	left.appendChild(c);
	var t=document.createElement("p");
	t.textContent=p.place;
	left.appendChild(t);
}


var right=document.querySelector(".rightdiv");
function career(c){
	var hc=document.createElement("h1");
	hc.innerHTML="Resume";
	right.appendChild(hc);


	
	var cc=document.createElement("h2");
	cc.innerHTML="Career Objective";
	right.appendChild(cc);
	var chr=document.createElement("hr");
	right.appendChild(chr);	
	var pinfo=document.createElement("p");
	pinfo.textContent=c.info;
	right.appendChild(pinfo);

}

var right=document.querySelector(".rightdiv");
function education(e){
	var hc=document.createElement("h1");
	hc.innerHTML="Educational Details";
	right.appendChild(hc);
	var chr=document.createElement("hr");
	right.appendChild(chr);	

	var etable=document.createElement("table");
	etable.border="1";
	var tr1="<tr><td>S.no</td><td>degree</td><td>institute</td><td>yop</td></tr>"
	var tr2=" ";
	for(i=0;i<e.length;i++){
		tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yop+"</td></tr>";
	}
	etable.innerHTML=tr1+tr2;
	right.appendChild(etable);


}

var right=document.querySelector(".rightdiv");
function languages(l){
	var hc=document.createElement("h1");
	hc.innerHTML="Languages";
    right.appendChild(hc);
    var chr=document.createElement("hr");
    right.appendChild(chr);

    var etable=document.createElement("table");
    etable.border="2";
    var tr1="<tr><td>Languages</td></tr>"
    var tr2="";
    for(i=0;i<l.length;i++){
    	tr2=tr2+"<tr><td>"+l[i].lang+"</td></tr>"
    }
    etable.innerHTML=tr1+tr2;
    right.appendChild(etable);

}