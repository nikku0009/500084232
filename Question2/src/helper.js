export const getToken = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      companyName: "Naman Train Company",
      clientID: "826e7260-fed2-4d98-99c1-e6aabef19733",
      clientSecret: "LUfRUssUCbZClckQ",
      ownerName: "Naman Mathur",
      ownerEmail: "500084232@stu.upes.ac.in",
      rollNo: "500084232",
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const response = await fetch(
      "http://20.244.56.144/train/auth",
      requestOptions
    ).catch((error) => console.log("error", error));
    const data = await response.json();
    return data.access_token;
  };
  
  export const getTrain = async (token, no) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    const response = await fetch(
      "http://20.244.56.144/train/trains/" + no,
      requestOptions
    ).catch((error) => console.log("error", error));
    const data = await response.json();
    return data;
  };
  
  export const getAllTrains = async (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    const response = await fetch(
      "http://20.244.56.144:80/train/trains",
      requestOptions
    ).catch((error) => console.log("error", error));
    const data = await response.json();
    return data;
  };
  