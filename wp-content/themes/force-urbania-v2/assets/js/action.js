$(document).ready(function(){
    $("#subbtn").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var mobile = $("#mobile").val();
        var state = $("#state").val();
        var city = $("#city").val();
        var pattern = /^[6-9][0-9]{0,8}$/;
        console.log(city);
        var validflag = true;
    		if(name == ''){
    			validflag = false;
    			$("#nameErr").addClass('hasError');
    		}else{
    			$("#nameErr").removeClass('hasError');
    			$("#nameErr").hide();
    		}

    		if(mobile == ''){
    			validflag = false;
                $("#mobileLengthErr").removeClass('hasError');
                $("#mobileLengthErr").hide();
    			$("#mobileErr").addClass('hasError');
    		}else{
    			if(mobile.length!=10){
    			validflag = false;	
                $("#mobileErr").removeClass('hasError');
                $("#mobileErr").hide();
    			$("#mobileLengthErr").addClass('hasError');
    			}else{
    				$("#mobileErr").removeClass('hasError');
    				$("#mobileLengthErr").removeClass('hasError');
    				$("#mobileErr").hide();
    				$("#mobileLengthErr").hide();
    			}
    			
    		}

    		if(email == ''){
    			validflag = false;
    			$("#emailErr").addClass('hasError');
    		}else{
    			if(IsEmail(email)==false){
    				validflag = false;
                    $("#emailErr").removeClass('hasError');
                    $("#emailErr").hide();
    				$("#emailValidErr").addClass('hasError');
    			}else{
	    			$("#emailErr").removeClass('hasError');
	    			$("#emailValidErr").removeClass('hasError');
	    			$("#emailErr").hide()
	    			$("#emailValidErr").hide()
    			}
            }

             
            if(state == ''){
    			validflag = false;
    			$("#stateErr").addClass('hasError');
    		}else{
    			$("#stateErr").removeClass('hasError');
    			$("#stateErr").hide();
    		}

            if(city == ''){
    			validflag = false;
    			$("#cityErr").addClass('hasError');
    		}else{
    			$("#cityErr").removeClass('hasError');
    			$("#cityErr").hide();
            }
           
            if(validflag == false){
    			$(".hasError").show();
    			return false;
    		}

        /*if(name.trim() == ''){
            $("#result").html("Name should not br blank");
            return false; 
        } else if (email.trim() == "") {
            $("#result").html("Email id should not be blank");
            return false; 
        }
        else if (!(IsEmail(email)))
        {
            $("#result").html("Invalid email id");
            return false; 
        } else if (mobile.trim()==''){
            $("#result").html("Mobile Number Field Cannot Be Empty");
            return false; 
        }
        else if (mobile.length != 10)
        {
            $("#result").html("Invalid Mobile  Number");
            return false; 
        } else if(city.trim() == ''){
            $("#result").html("City should not be blank");
            return false; 
        } else {*/
            var data = $("#notifyform").serialize();
            $.ajax({
                type:"POST",
                data: data,
                url:weburl+'/submit.php',
                success:function(response){
                    console.log(response);
                    var data = JSON.parse(response);
                    if(data.status == 'success'){
                         $("#name").val('');
                        $("#email").val('');
                        $("#mobile").val('');
                        $("#state").val('');
                        $("#city").val('');
                        $("#result").html("Thank you");
                    } else if(data.status == 'error'){
                        $("#"+data.id).addClass('hasError');
                        $("#"+data.id).show();
                    } else if(data.status == 'not'){
                        $("#result").html("Something went wrong. Please try again later!!");
                    } else {
                        $("#result").html("Something went wrong. Please try again later!!");
                    }
                }
            });
        //}
        
    })
});

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function allowOnlyLetters(e, t)   
{    
   if (window.event)    
   {    
      var charCode = window.event.keyCode;    
   }    
   else if (e)   
   {    
      var charCode = e.which;    
   }    
   else { return true; }    
   if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))    
       return true;    
   else  
   {    
      //alert("Please enter only alphabets");    
      return false;    
   }           
}      