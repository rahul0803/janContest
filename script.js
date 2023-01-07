//// .then method :
function fetchCryptoData() {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    const cryptoData = fetch(url);
    cryptoData.then((response) => {
        console.log(response);
        return response.json();
    })
        .then((data) => {
            console.log(data);
            let table = "";
            data.map((values) => {
                table += `
                <tr>
        <td><img src="${values.image}"/></td>
        <td>${values.name}</td>
        <td>${values.symbol}</td>
        <td>$${values.current_price}</td>
        <td>$${values.total_volume}</td>
        <td class="${values.price_change_percentage_24h > 0 ? "positiveValues" : "negativeValues"}">${values.price_change_percentage_24h}</td>
        <td> Mkt Cap : $${values.market_cap}</td>
        </tr>`
            })
            document.getElementById("table-body").innerHTML = table;
        })
}
fetchCryptoData();



//// Async/Await method :
async function getCryptoData() {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    // console.log(data);                                               
    return data;
}

async function callGetCryptoData() {
    const responseData = await getCryptoData();
    console.log(responseData);
    let tableData = "";
    responseData.map((cryptoValues) => {
        tableData += `<tr>                                               
        <td><img src="${cryptoValues.image}"/></td>
        <td>${cryptoValues.name}</td>
        <td>${cryptoValues.symbol}</td>
        <td>$${cryptoValues.current_price}</td>
        <td>$${cryptoValues.total_volume}</td>
        <td class="${cryptoValues.price_change_percentage_24h > 0 ? "positiveValues" : "negativeValues"}">${cryptoValues.price_change_percentage_24h}</td>
        <td> Mkt Cap : $${cryptoValues.market_cap}</td>
        </tr>`
    })
    document.getElementById("table-body").innerHTML = tableData;
}
callGetCryptoData();