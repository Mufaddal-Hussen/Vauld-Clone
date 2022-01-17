import React from 'react'
import './style.css';
import './script';

export default function Card() {
    return (

        // <!-- card 1 -->
     <div className="cards d-flex justify-content-center ">

         
         <div className="card m-3" style= {{ width : '35rem', height : '30rem' }} >
            
        <div className="card-body ">
            <div className="card1">Your funds</div>
            <span className="card11">Secured with<img src="https://www.vauld.com/assets/icons/BITGO.svg" className="d-inline w-10" alt="..."/> Bitgo</span>
            <div className="card2 card-body  w-100 d-flex justify-content-around">
                <div className="csrd3 w-50  text-center m-3">
                    <div className="text-info text-md">₹ 0.00</div>
                    <span className="text-center text-black-50">Total Assest value</span>
                </div>
                <div className="csrd4 w-50  text-center m-3">
                    <div className="text-info text-md">₹ 0.00</div>
                    <span className="text-center text-black-50">Total intrest eraned</span>
                </div>
            </div>
            
            <div className="carousel">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/inr.svg" className="d-inline w-5" alt="..."/>INR</a>
                        
                      </div>
                      
                      <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/btc.svg" className="d-inline w-10" alt="..."/>BTC</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/eth.svg" className="d-inline w-10" alt="..."/>ETH</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/usdt.svg" className="d-inline w-10" alt="..."/>USDT</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/bnb.svg" className="d-inline w-10" alt="..."/>BNB</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/usdc.svg" className="d-inline w-10" alt="..."/>USDC</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/sol.svg" className="d-inline w-10" alt="..."/>SOL</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/ada.svg" className="d-inline w-10" alt="..."/>ADA</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/xrp.svg" className="d-inline w-10" alt="..."/>XRP</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/dot.svg" className="d-inline w-10" alt="..."/>DOT</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/doge.svg" className="d-inline w-10" alt="..."/>DOGE</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/shib.svg" className="d-inline w-10" alt="..."/>SHIB</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/matic.svg" className="d-inline w-10" alt="..."/>MATIC</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/busd.svg" className="d-inline w-10" alt="..."/>BUSD</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/link.svg" className="d-inline w-10" alt="..."/>LINK</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/uni.svg" className="d-inline w-10" alt="..."/>UNI</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/dai.svg" className="d-inline w-10" alt="..."/>DAI</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/atom.svg" className="d-inline w-10" alt="..."/>ATOM</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/algo.svg" className="d-inline w-10" alt="..."/>ALGO</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/ltc.svg" className="d-inline w-10" alt="..."/>LTC</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/bch.svg" className="d-inline w-10" alt="..."/>BCH</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/trx.svg" className="d-inline w-10" alt="..."/>TRX</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/xlm.svg" className="d-inline w-10" alt="..."/>XRP</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/mana.svg" className="d-inline w-10" alt="..."/>MANA</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/icp.svg" className="d-inline w-10" alt="..."/>ICP</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/vet.svg" className="d-inline w-10" alt="..."/>VET</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/ftt.svg" className="d-inline w-10" alt="..."/>FTT</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/fil.svg" className="d-inline w-10" alt="..."/>FIL</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/etc.svg" className="d-inline w-10" alt="..."/>ETC</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/xtz.svg" className="d-inline w-10" alt="..."/>XTZ</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/xmr.svg" className="d-inline w-10" alt="..."/>XMR</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/grt.svg" className="d-inline w-10" alt="..."/>GRT</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/aave.svg" className="d-inline w-10" alt="..."/>AAVE</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/eos.svg" className="d-inline w-10" alt="..."/>EOS</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/cake.svg" className="d-inline w-10" alt="..."/>CAKE</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/btt.svg" className="d-inline w-10" alt="..."/>BTT</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/crv.svg" className="d-inline w-10" alt="..."/>CRV</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/mkr.svg" className="d-inline w-10" alt="..."/>MKR</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/enj.svg" className="d-inline w-10" alt="..."/>ENJ</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/zec.svg" className="d-inline w-10" alt="..."/>ZEC</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/chz.svg" className="d-inline w-10" alt="..."/>CHZ</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/bat.svg" className="d-inline w-10" alt="..."/>BAT</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/tusd.svg" className="d-inline w-10" alt="..."/>TUSD</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/dash.svg" className="d-inline w-10" alt="..."/>DASH</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/yfi.svg" className="d-inline w-10" alt="..."/>YFI</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/comp.svg" className="d-inline w-10" alt="..."/>COMP</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/1inch.svg" className="d-inline w-10" alt="..."/>1INCH</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/usdp.svg" className="d-inline w-10" alt="..."/>USDP</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/snx.svg" className="d-inline w-10" alt="..."/>SNX</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/sushi.svg" className="d-inline w-10" alt="..."/>SUSHI</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/zrx.svg" className="d-inline w-10" alt="..."/>ZRX</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/qtum.svg" className="d-inline w-10" alt="..."/>QTUM</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/acm.svg" className="d-inline w-10" alt="..."/>ACM</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/adx.svg" className="d-inline w-10" alt="..."/>ADX</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/agld.svg" className="d-inline w-10" alt="..."/>AGLD</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/aion.svg" className="d-inline w-10" alt="..."/>AION</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/akro.svg" className="d-inline w-10" alt="..."/>AKRO</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/alice.svg" className="d-inline w-10" alt="..."/>ALICE</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/alpaca.svg" className="d-inline w-10" alt="..."/>ALPACA</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/alpha.svg" className="d-inline w-10" alt="..."/>ALPHA</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/cake.svg" className="d-inline w-10" alt="..."/>CAKE</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/amp.svg" className="d-inline w-10" alt="..."/>AMP</a>
                    </div>
                    <div className="carousel-item">
                        <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/ankr.svg" className="d-inline w-10" alt="..."/>ANKR</a>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="sr-only "></span>
                    </a>
                    <a className="carousel-control-next " href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                      <span className="sr-only "></span>
                    </a>
                  </div>
                </div>
          <h5 className="card-title text-center height: 50px m-5"><img src="https://www.vauld.com/assets/coins/inr.svg" className="d-inline w-10" alt="..."/>INR 0.00</h5>
          <p className="card-text text-center text-dark text-sm">Complete KYC & Deposit INR To Buy Crypto</p>
          <p className="card-text text-center text-black-50 text-sm">KYC Take Only 2 minutes and is auto-approved instantly</p>
          <a href="#" className="btn btn-primary w-100">Complete KYC To Deposit INR</a>
        </div>
      </div>
      

      {/* <!-- card 2  --> */}
      
   <div className="card m-3" style={{ width : '25rem', height : '30rem' }}>
    <div className="card-body">
        <div className="card1">Fixed Deposit</div>
       <div className="d-flex justify-content-between"> <span className="card12 m-3">Amount</span><span className="card12 m-3">Balance 0.00 BTC</span></div>
    <div className="selecter">

         <select className="shadow p-2 mb-3 bg-white rounded" name="carncy" id="carncy">
             <option value="btc"><a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/btc.svg" className="d-inline w-10" alt="..."/>BTC</a></option>
             <option value="saab"><a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/eth.svg" className="d-inline w-10" alt="..."/>ETH</a></option>
             <option value="opel"><a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/usdt.svg" className="d-inline w-10" alt="..."/>USDT</a></option>
             <option value="audi"><a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/bnb.svg" className="d-inline w-10" alt="..."/>BNB</a></option>
             <option value="audi"><a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/usdc.svg" className="d-inline w-10" alt="..."/>USDC</a></option>
             <option value="audi"><a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/sol.svg" className="d-inline w-10" alt="..."/>SOL</a></option>
             <option value="audi"> <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/ada.svg" className="d-inline w-10" alt="..."/>ADA</a></option>
             <option value="audi"> <a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/xrp.svg" className="d-inline w-10" alt="..."/>XRP</a></option>
             <option value="audi"><a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/dot.svg" className="d-inline w-10" alt="..."/>DOT</a></option>
             <option value="audi"><a href="#" className="btn"><img src="https://www.vauld.com/assets/coins/inr.svg" className="d-inline w-5" alt="..."/>INR</a></option>

            </select>
            <input className="w-80 inpt shadow p-2 mb-3 bg-white rounded" type="text" name="" id="" placeholder="Amount"/>
            
    </div>

    <div className="term&btn m-3 d-flex justify-content-center ">
        <div className="term d-flex-column">
            <div className="termt">
                <span>Term</span>
            </div>
            <div className="termd">
                <span className="text-info">30 Days</span>
            </div>

        </div>
        <div className="btn d-flex justify-content-center ">
            <div className="rnwtext termt m-1">
                <span>Auto Renew</span>
            </div>
            <div className="btnt m-1">
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input custom-switch" id="customSwitch1"/>
                    
                  </div>
            </div>
            <div className="optn text-info m-1">
                <span>Advanced Options</span>

            </div>
        </div>
    </div>
    <p className="otrtxt  ">Fixed Deposit Will be renewed on completion</p>
    <h5 className="card-title text-center height: 50px  text-info">INTEREST 6.70% APY</h5>
    <p className="card-text text-center text-dark text-sm">Payout Amount BTC 0.00</p>
    <p className="card-text text-center text-black-50 text-sm">44.444% higher than our base return</p>
    
      <a href="#" className="btn btn-primary w-100 btn-lg disabled mt-4" >CREATE FIXED DEPOSIT</a>
      
    </div>
</div>




{/* <!-- card 3 --> */}

<div className=" card m-3" style={{ width : '25rem',  height : '30rem' }} >
    <div className="card-body">
        <div className="txtsrch d-flex justify-content-between">
            <div className="card1">Start Trading</div>
            <div className="srch">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search card1" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>

        </div>
            <div className="pp d-flex justify-content-between m-2 ">
                <div className="pairs"><span>Pairs</span></div>
                <div className="price"><span className="mx-4">Price  </span><span> 24HChange(%)</span></div>
                
            </div>

            <div className="all d-flex justify-content-between my-4 shadow-sm  bg-body rounded ">
                <div className="star">
                    <i className="bi bi-star m-1 card1"></i>BTC/USDT
                </div>
                <div className="prc">43,741.52</div>
                <div className="cng text-success">2.912%<i className="bi bi-arrow-up-short"></i></div>

            </div>
            <div className="all d-flex justify-content-between my-4 shadow-sm bg-body rounded">
                <div className="star">
                    <i className="bi bi-star m-1 card1"></i>BUSD/USDT
                </div>
                <div className="prc">0.9996</div>
                <div className="cng text-danger">-0.01%<i className="bi bi-arrow-down-short"></i></div>

            </div>
            <div className="all d-flex justify-content-between my-4 shadow-sm bg-body rounded">
                <div className="star">
                    <i className="bi bi-star m-1 card1"></i>SHIB/USDT
                </div>
                <div className="prc">0.00003219</div>
                <div className="cng text-success">12.478%<i className="bi bi-arrow-up-short"></i></div>

            </div>
            <div className="all d-flex justify-content-between my-4 shadow-sm bg-body rounded">
                <div className="star">
                    <i className="bi bi-star m-1 card1"></i>XRP/USDT
                </div>
                <div className="prc">0.7948</div>
                <div className="cng text-success">3.692%<i className="bi bi-arrow-up-short"></i></div>

            </div>
            <div className="all d-flex justify-content-between my-4 shadow-sm bg-body rounded">
                <div className="star">
                    <i className="bi bi-star m-1 card1"></i>ETH/BTC
                </div>
                <div className="prc">0.76745</div>
                <div className="cng text-success">0.986%<i className="bi bi-arrow-up-short"></i></div>

            </div>
            <div className="all d-flex justify-content-between my-4 shadow-sm bg-body rounded">
                <div className="star">
                    <i className="bi bi-star m-1 card1"></i>USDC/USDT
                </div>
                <div className="prc">0.9993</div>
                <div className="cng text-danger ">-0.03%<i className="bi bi-arrow-down-short"></i></div>

            </div>
            <div className="all d-flex justify-content-between my-4 shadow-sm bg-body rounded">
                <div className="star">
                    <i className="bi bi-star m-1 card1"></i>XML/USDT
                </div>
                <div className="prc">0.2877</div>
                <div className="cng text-success">6.674%<i className="bi bi-arrow-up-short"></i></div>

            </div>
            <div className="all d-flex justify-content-between my-4 shadow-sm bg-body rounded">
                <div className="star">
                    <i className="bi bi-star m-1 card1"></i>BTC/USDC
                </div>
                <div className="prc">43,889.05</div>
                <div className=" cng text-success">2.425%<i className="bi bi-arrow-up-short"></i></div>

            </div>
          





      {/* <!-- <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
    </div>
  </div>









</div>



    )
}