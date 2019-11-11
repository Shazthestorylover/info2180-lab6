var button = document.getElementById("searchButton");

// function SuperheroAjaxRequest()
// {
//     // if (httpRequest.readyState === httpRequest.DONE) 
//     // {
//     //     if (httpRequest.status === 200) 
//     //     {
//     //         // var response = httpRequest.responseText;
//     //         alert(httpRequest.responseText);
//     //     } 
//     //     else 
//     //     {
//     //         alert('There was a problem with the request.');
//     //     }
//     // }
//     var xhttp = new XMLHttpRequest();
    
// }

function superheroList()
{
    var xhttp = new XMLHttpRequest();
    var URL = "superheroes.php";
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            alert(this.responseText);
        }
    };
    xhttp.open('GET', URL);
    xhttp.send();
}