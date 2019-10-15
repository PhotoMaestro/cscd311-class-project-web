const container = $("#content");

// Get list
$.get(
    "http://localhost/halls/rooms",
    (list) => {
        list.forEach(hall => {
            renderHall(hall);
        });

    }
).fail(() => {
    alert("Something went wrong. Please refresh the page.")
})

function renderHall(hall) {
    container.append(`<div class='text-center'><h3 class="mb-4">${hall.name.toUpperCase()}</h3></div>`);
    let table = `<table class='table table-striped my-3'>
                    <thead class="thead-light">
                        <tr>
                            <th scope='col'>Room</th>
                            <th scope='col'>Member 1</th>
                            <th scope='col'>Member 2</th>
                            <th scope='col'>Member 3</th>
                            <th scope='col'>Member 4</th>
                        </tr>
                    </thead>
                    <tbody>`;
    hall.rooms.forEach(room => {
        table += `<tr><th scope='row'>${room.name}</th>`;
        for (let i = 0; i < 4; i++) {
            const member = room.members[i] || "N/A";
            table += `<td>${member}</td>`;
        }
        table += "</tr>"
    });

    table += "</tbody></table><hr class='my-4'>"
    container.append(table);
}