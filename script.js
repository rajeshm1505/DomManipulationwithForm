

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        
        var food = "";
        let gender;
        let count = 0;

        const form = document.querySelector("#form");
        
        let tbody = document.getElementById("tbody");
        let fname = document.getElementById("first-name").value;
        let lname =  document.getElementById("last-name").value;
        let address =  document.getElementById("address").value;
        let pincode =  document.getElementById("pincode").value;
        let state =  document.getElementById("State").value;
        let country =  document.getElementById("Country").value;
        let table = document.getElementsByClassName("table");
        let display = document.getElementById("display-table");
        
        if (document.getElementById('gender1').checked) {
            gender = document.getElementById('gender1').value;
        } else if (document.getElementById('gender2').checked) {
            gender = document.getElementById('gender2').value;
            
        } else if (document.getElementById('gender3').checked) {
            gender = document.getElementById('gender3').value;
            
        } else {
            alert ("Please select the gender options");
            return false;
        } 
         
       
        if(document.getElementById("food1").checked == true){
           food = document.getElementById("food1").value;
           count++
        }
        
        if(document.getElementById("food2").checked == true){
           food = food + " " + document.getElementById("food2").value;
           count++
        }
       
        if(document.getElementById("food3").checked == true){
           food = food + " " + document.getElementById("food3").value;
           count++
        }
       
        if(document.getElementById("food4").checked == true){
           food = food + " " + document.getElementById("food4").value;
           count++
        }

        if(document.getElementById("food5").checked == true){
           food = food + " " + document.getElementById("food5").value;
           count++
        } 

        if (count < 2 ) {
            alert("Please select two food option");
            return false; 
        } else {
            
            if(display != null){
                display.removeAttribute('id');
            }
           let row = tbody.insertRow();
           let cell1 = row.insertCell(0);
           let cell2 = row.insertCell(1);
           let cell3 = row.insertCell(2);
           let cell4 = row.insertCell(3);
           let cell5 = row.insertCell(4);
           let cell6 = row.insertCell(5);
           let cell7 = row.insertCell(6);
           let cell8 = row.insertCell(7);
           
           cell1.innerText = fname;
           cell2.innerText = lname;
           cell3.innerText = address;
           cell4.innerText = pincode;
           cell5.innerText = gender;
           cell6.innerText =food;
           cell7.innerText = state;
           cell8.innerText = country;
           form.reset();
        }
       
});


 