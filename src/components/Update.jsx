import { useLoaderData } from "react-router-dom";


const Update = () => {
    const user = useLoaderData()
    console.log(user);

    const handleUpdateInfo=(e)=>{
        e.preventDefault();
        const form = e.target
        const name = form.name.value 
        const email = form.email.value
        console.log(name,email);
        const updatedUser = {name,email}

        fetch(`http://localhost:5000/users/${user._id}`,{
            method:'PUT',
            headers: {
                "content-type": "application/json",
              },
              body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('User updated successfully')
            }
        })
    }
    return (
        <div>
            <h1>Updated information:{user.name}</h1>
            <form onSubmit={handleUpdateInfo}>
                <input placeholder="Name" defaultValue={user?.name} type="text" name="name" /> <br />
                <input  placeholder="email" defaultValue={user?.email} type="email" name="email" /> <br />
                <input type="submit" name="submit" /> <br />
            </form>
        </div>
    );
};

export default Update;