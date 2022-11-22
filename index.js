const dataAneh = {
    statusCode: 200,
    listing: [
      {
        id: 1,
        name: "budi",
        hobbies: {
          day: "monday",
          activity: "running",
          location: "sport hall",
        },
      },
      {
        id: 2,
        name: "ahmad",
        hobbies: {
          day: "monday",
          activity: "swimming",
          location: "empang",
        },
      },
    ],
  };



function getHobies(param){
    const result = param.listing.filter(param => param.name=="ahmad");
    let element
    for (const key in result) {
      
        element = result[key];
      
    }

    return(element.hobbies);
}

console.log(getHobies(dataAneh));

