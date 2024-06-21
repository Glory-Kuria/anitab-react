const baseUrl = process.env.REACT_APP_BASE_URL;


export const login = async(userName,password)=>{
    try{
const response = await fetch(`${baseUrl}/auth/login`,{
    method :'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({userName,password})
});
return response.json();
    }
    catch(error){
        return `Error during Login${error.message}`

    };
}