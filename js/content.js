var myArray = 'https://corsanywhere.herokuapp.com/https://nepse-data-api.herokuapp.com/data/todaysprice'

document.addEventListener("DOMContentLoaded", function () {
    $.getJSON(myArray, function (data) {

        // console.log(data)

        $('#search-input').on('keydown', function (event) {
            if (event.keyCode == 13) {
            var value = $(this).val()
            console.log('Value:', value);
            var data = searchTable(value, myArray)
            buildTable(data)
            }
        })

        buildTable(myArray)

        function searchTable(value, data) {

            var filteredData = []

            for (var i = 0; i < data.length; i++) {
                value = value;
                var name = data[i].companyName;
                if (name = value) {
                    filteredData.push(data[i])

                }
            }

            return filteredData
        }

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