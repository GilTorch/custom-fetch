const customFetchRequest = (url,options = {
    method: "GET"
}) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest()
        req.open(options.method,url,true)
        req.send() 
        req.onload = () => {
            resolve({ json: () => Promise.resolve(JSON.parse(req.responseText))})
        }
        req.onerror = (e) => {
            console.log(`Error Happened ${JSON.stringify(e)}`)
            reject(e)
        }
    })
}

async function logJSONData() {
    try {
        const response = await customFetchRequest("https://jsonplaceholder.typicode.com/userssss");
        console.log(`Response: ${response}`)
        const jsonData = await response.json();
        console.log(jsonData);
    }catch(e){
        console.log(`Error: ${e}`)
    }

  }

logJSONData()