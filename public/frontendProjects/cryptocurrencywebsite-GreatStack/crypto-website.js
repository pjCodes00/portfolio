 
       async function getPrice() {
        const response=  await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd')

        const data= await response.json()
        console.log(data)

        const html= `<div class="logo-txt-div">
        <div class="img-cont"><img src="images/bitcoin.png"></div>
        <div class="text-cont">
          <p class="coin1">$${data.bitcoin.usd}</p>
          <p class="coin2">Bitcoin</p>
        </div>
      </div>

      <div class="logo-txt-div">
        <div class="img-cont"><img src="images/ethereum.png"></div>
        <div class="text-cont">
          <p class="coin1">$${data.ethereum.usd}</p>
          <p class="coin2">Ethereum</p>
        </div>
      </div>

      <div class="logo-txt-div">
        <div class="img-cont"><img src="images/dogecoin.png"></div>
        <div class="text-cont">
          <p class="coin1">$${data.dogecoin.usd}</p>
          <p class="coin2">Dogecoin</p>
        </div>
      </div>`

      document.querySelector('.bottom-container').innerHTML= html
       }
       getPrice()
    