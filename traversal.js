
function iterateNestedKeys(obj) {
    
    Object.keys(obj).forEach(key => {
      console.log(key); 
  
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        iterateNestedKeys(obj[key]);
      }
    });
  }
  
  const nestedObject = {
    name: "John",
    address: {
      city: "New York",
      postalCode: "10001",
      geo: {
        lat: 40.7128,
        lon: -74.0060
      }
    },
    age: 30
  };
  let res=iterateNestedKeys(nestedObject)
  console.log(res)
  