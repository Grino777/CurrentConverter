const GetCurrencies = () => {
    const TOKEN = '6aa1d8847a992177af1fb5efdb5a6d56'

    const res = fetch(`http://apilayer.net/api/live?access_key=${TOKEN}&currencies=EUR,RUB&source=USD&format=1`)

    return res
}

export default GetCurrencies