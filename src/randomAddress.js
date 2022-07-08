import axios from "axios";

function getRandomAddress() {
    const path = "https://random-data-api.com/api/address/random_address";
    axios.get(path).then((response) => {
        document.getElementById("title").innerHTML = response.data.street_name
    })
};

export default getRandomAddress;





