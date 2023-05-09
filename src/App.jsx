import "./App.css"

function App() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const user = { name, email }
    console.log(user)
   //Create Operation==========POST=================
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert('Data added successfully')
        }
      })
  }

  return (
    <>
      <h1>Simple CRUD operation</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="name" type="text" name="name" /> <br />
        <input placeholder="email" type="email" name="email" /> <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default App
