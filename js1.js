function validation(){
    let firstName=document.getElementById("fn").value;
    let lastname=document.getElementById("ln").value;
    let password=document.getElementById("pwd").value;
    let password2=document.getElementById("pwd1").value;
    let Mail=document.getElementById("mail").value;
    let MobileNo=document.getElementById("mno").value;

    if(firstName=="" || firstName==null)
    {
       
        document.getElementById('f1').innerHTML="Please Enter The First Name";
        return false;
    }

    
     if(lastname=="")
     {
        {
            document.getElementById('f2').innerHTML="Please Enter The Last Name";
            return false;
        } 
     }
     if(password=="")
     {
        {
            document.getElementById('f3').innerHTML="Please Enter The Last Name";
            return false;
        } 
     }
     if(password2=="")
     {
        {
            document.getElementById('f4').innerHTML="Please Enter The Last Name";
            return false;
        } 
     }
     if(password!=password2)
     {
         alert("password Not Matched");
     }
     if(Mail=="")
     {
        {
            document.getElementById('f5').innerHTML="Please Enter The Last Name";
            return false;
        } 
     }
     if(MobileNo=="")
     {
        {
            document.getElementById('f6').innerHTML="Please Enter The Last Name";
            return false;
        } 

     }
     if(isNaN(MobileNo)==true)
     {
      alert("Enter Valid Number");
     }
     
}