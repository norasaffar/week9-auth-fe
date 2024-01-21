
export const testFetch = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json(); 

    console.log(data);
};

export const signupFetch = async (username, email, password) => {
    const response = await fetch("http://localhost:5001/users",{
       method:"POST",
       mode: "cors",
       headers:{
        "Content-Type": "application/json",
       },
        body: JSON.stringify({
        username: username,
        email: email,
        password: password,
       }),
    });

    const data =  await response.json();
    console.log("signup done", data);
};

export const loginFetch = async (username, password) => {
  console.log("hello login fetch")
    const response = await fetch("http://localhost:5001/users/login",{
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  
    const data = await response.json();
    return data;
  
  };

  export const getAllBooks = async () => {
     const response = await fetch ("http://localhost:5001/books",{
       method:"GET",
       mode: "cors",
       headers:{
        "Content-Type": "application/json",
       },
     });   
     
     const data = await response.json();

     return data;

  };


    export const addFavBook = async (BookId, username) => {
    const response = await fetch("http://localhost:5001/users/updateFavBook" ,{
      method:"PUT",
      mode: "cors",
      headers: {
        "Content-Type":"application/json",
      },
        body: JSON.stringify({
        BookId:BookId ,
        username: username,
      }),
    });
  
    const data = await response.json();
    console.log(data);

    return data;
  };
    
       


  
  