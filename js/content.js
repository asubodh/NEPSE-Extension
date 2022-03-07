var myArray = 'https://corsanywhere.herokuapp.com/https://nepse-data-api.herokuapp.com/data/todaysprice'

document.addEventListener("DOMContentLoaded", function () {
$.getJSON(myArray, function (data) {

    console.log(data)

    buildTable(myArray)


    function buildTable(myArray) {
        var table = document.getElementById('myTable')

        for (var i = 0; i < data.length; i++) {
            var row = `<tr>
                    <td>${data[i].companyName}</td>
                    <td>${data[i].amount}</td>
                    <td>${data[i].closingPrice}</td>
                    <td>${data[i].maxPrice}</td>
                    <td>${data[i].minPrice}</td>
                    <td>${data[i].previousClosing}</td>
                    <td>${data[i].difference}</td>
              </tr>`

                document.getElementById("myTable").innerHTML += row;


          }
    }

});
});