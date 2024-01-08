var user=[{name:"mido",password:"aa11AA!@#"}]

var seller=[{  name:"ahmed", password:"asdffg!@#" }]
function chicked()
{
    var username=document.getElementById('user').value;
    var userpass=document.getElementById('password').value;
     var radio=document.getElementById('aa').value;
     if(radio.value="user")
     {
        for(var i=0;i<user.length;i++)
        {
            if(user[i].name==username && user[i].password==userpass)
            {
                alert("user")
                window.location.href="userhome.html";
    
    
            }
           
         
        }
     }
        
    
    
    
    if(radio.value="seller")
   {
    for(var i=0;i<seller.length;i++)
    {
        if(seller[i].name==username && seller[i].password==userpass)
        {
            alert("seller")
            window.location.href="sellerhome.html";

        }
    }
   }


}
    



    



   
  

   