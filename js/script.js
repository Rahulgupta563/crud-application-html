let users = [
    {name:"Sonu Kumar",email:"sonukumar@gamail.com"},
    {name:"rahul Kumar",email:"rahulkumar@gamail.com"},
    {name:"Raj Kumar",email:"rajkumar@gamail.com"}
]

function render(){
    let template  = ''
    users.map((value , index )=>{
        template = template + `<tr>
        <th scope="row">${index+1}</th>
        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>
            <button class="btn btn-warning btn-sm">Edit</button>
            <button class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>`
    })
    document.getElementById("table-row").innerHTML = template   
}

function addUser(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    users.push({name:name,email:email})
    render()
}


render()