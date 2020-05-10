//javasrcipt
function goal(){
    count=0;
    if (document.f1.c1.checked==true)
        count++;
    if (document.f1.c2.checked==true)
        count++;
    if (document.f1.c3.checked==true)
        count++;
    if (document.f1.c4.checked==true)
        count++;
    if (document.f1.c5.checked==true)
        count++;
    if (document.f1.c6.checked==true)
        count++;
    if (document.f1.c7.checked==true)
        count++;
    if (document.f1.c8.checked==true)
        count++;
    if (document.f1.c9.checked==true)
        count++;
    if (document.f1.c10.checked==true)
        count++;
    if (document.f1.c11.checked==true)
        count++;
    if (document.f1.c12.checked==true)
        count++;
    if (document.f1.c13.checked==true)
        count++;
    if (document.f1.c14.checked==true)
        count++;
    if (document.f1.c15.checked==true)
        count++;
    if (document.f1.c16.checked==true)
        count++;
    if (document.f1.c17.checked==true)
        count++;
    if (document.f1.c18.checked==true)
        count++;
    if (document.f1.c19.checked==true)
        count++;
    if (document.f1.c20.checked==true)
        count++;
    if (document.f1.c21.checked==true)
        count++;
    if (document.f1.c22.checked==true)
        count++;
    if (document.f1.c23.checked==true)
        count++;
    if (document.f1.c24.checked==true)
        count++;
    if (document.f1.c25.checked==true)
        count++;
    
    
if(document.f1.name.value!="Enter your name here")    
{
        if(count*4<50)
    {
        document.getElementById("change").innerHTML = "Hey "+document.f1.name.value+", There is still a lot for you to explore.";
        alert("Hey "+document.f1.name.value+", Your progress is "+count*4 + "%. There is still a lot for you to explore.");
    }
    else if(count*4==50)
    {
        alert("Hey "+document.f1.name.value+", Your progress is "+count*4 + "%. Yippee! You are halfway there");
        document.getElementById("change").innerHTML = "Hey "+document.f1.name.value+", You are halfway there";
    }
    else if(count*4<75)
    {
        alert("Hey "+document.f1.name.value+", Your progress is "+count*4 + "%. Great Going");
        document.getElementById("change").innerHTML = "Hey "+document.f1.name.value+", Great Going";
    }
    else if(count*4==100)
    {
        alert("Hey "+document.f1.name.value+", Your progress is "+count*4 + "%. Congratulations!!!");
        document.getElementById("change").innerHTML = "Hey "+document.f1.name.value+", Congratulations!!!";
    }
    else
    {
        alert("Hey "+document.f1.name.value+", Your progress is "+count*4 + "%. You are almost there");
        document.getElementById("change").innerHTML = "Hey "+document.f1.name.value+", You are almost there";
    }
}

else    
{
        if(count*4<50)
    {
        document.getElementById("change").innerHTML = "Hey "+document.f1.name.value+", There is still a lot for you to explore.";
        alert("Hey Web Development Enthusiast, Your progress is "+count*4 + "%. There is still a lot for you to explore.");
    }
    else if(count*4==50)
    {
        alert("Hey Web Development Enthusiast, Your progress is "+count*4 + "%. Yippee! You are halfway there");
        document.getElementById("change").innerHTML = "Hey "+document.f1.name.value+", You are halfway there";
    }
    else if(count*4<75)
    {
        alert("Hey Web Development Enthusiast, Your progress is "+count*4 + "%. Great Going");
        document.getElementById("change").innerHTML = "Hey "+document.f1.name.value+", Great Going";
    }
    else if(count*4==100)
    {
        alert("Hey Web Development Enthusiast, Your progress is "+count*4 + "%. Congratulations!!!");
        document.getElementById("change").innerHTML = "Hey "+document.f1.name.value+", Congratulations!!!";
    }
    else
    {
        alert("Hey Web Development Enthusiast, Your progress is "+count*4 + "%. You are almost there");
        document.getElementById("change").innerHTML = "Hey "+document.f1.name.value+", You are almost there";
    }
}

}
