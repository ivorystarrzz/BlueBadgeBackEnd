module.exports = function (sequelize, DataTypes) {
    return sequelize.define('authtestdata', {
        authtestdata: DataTypes.STRING,
        owner: DataTypes.INTEGER
    });
};



/***************************************
* FETCH/POST to Auth/Create
*************************************/
function postToAuthRouteCreate() {

    const fetch_url = `http://localhost:4001/authtest/create`
    const accessToken = localStorage.getItem('SessionToken')
    let authTestDataInput = document.getElementById('authTestData').value; //1
    let authInputData = { authtestdata: { item: authTestDataInput } }; //2
    const response = fetch(fetch_url, {
        method: 'POST', //3
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData) //4
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}