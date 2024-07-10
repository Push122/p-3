let Product=()=>{
    return(
        <>
        <div className=" mt-20 flex">
        <div >
            <img className=" h-80 w-62 border- bg-slate-800 " src="https://th.bing.com/th?id=OIP.O8GNN8NR-Np1YqWg_t5QLAHaJ3&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
            <div className=" flex ">
            <div>
           <button className=" bg-orange-800 mt-4  hover:bg-red-600 rounded-xl overflow-hidden">ADD TO CART</button>
           </div>
           <div>
           <button className=" bg-orange-800 ml-9 mt-4   hover:bg-red-600 rounded-xl  overflow-hidden ">BUY NOW</button>
           </div>
           </div>
        </div>

       <div>
          <p className=" font-bold">STUDIO NEXX</p>
          <p className=" font-normal">Men Jogger Fit Mid Rise Blue Jeans</p>
          <div className=" flex space-x-2 mt-5">
          <p className=" font-bold "> RS.949</p>
          <p className=" font-light line-through ">RS.1,999</p>
          <p className=" font-semibold">52%</p>
          <p className=" font-bold">off</p>
          <p className=" rounded-full h-6 w-6 bg-slate-200 text-center font-light  ">!</p>
          </div>
          <div className=" flex">
          <button className=" rounded-xl bg-green-500 h-6 w-14 text-white">3.9 *</button>
          <p className=" font-medium">243 ratings and 15 reviews</p>
          <img className=" h-3 ml-2 mt-2" src="https://th.bing.com/th?id=OIP.1mutoESH6RAxgcroP619KgAAAA&w=232&h=68&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
          </div>
          <div className="  mt-11 flex">
            <p>Color</p>
            <div className=" h-14 ml-14 flex justify-between">
            <img className=" border" src="https://th.bing.com/th?id=OIP.O8GNN8NR-Np1YqWg_t5QLAHaJ3&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
            <img  className=" border" src="https://th.bing.com/th?id=OIP.O8GNN8NR-Np1YqWg_t5QLAHaJ3&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
            <img className=" border"  src="https://th.bing.com/th?id=OIP.qzeuAlejxoPwc0RjKV7xGQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
            </div>
          </div>
         <div className=" mt-7 flex justify-between">
            <p>Size</p>
            <div className=" ml-24 flex space-x-4">
                <p className=" border">30</p>
                <p className=" border">32</p>
                <p className=" border">34</p>
                <p className=" border">36</p>
                <p className=" text-blue-700 ">Size Chart <input className=" "placeholder="Search" type="text" name="" id="" /></p>

            </div>
         </div>
        </div>
        </div>
        <div className=" ml-60">
          <p>Available offers:-</p>
          <p>*. Bank offers Get RS.50 Instant Discount on first Flipcart UPI on order of RS.200 and above t&c.</p>
          <p>*.Discounts: Flipkart often offers discounts on various products, especially during festive seasons or special sales events like Big Billion Days.</p>
          <p>*.Bank Offers: You may find additional discounts or cashback offers when you make payments using specific bank debit or credit cards.</p>
          <p>*.Bundle Offers: Sometimes Flipkart offers bundle deals where you can buy multiple products together at a discounted price.</p>
          <p>*.Cashback Offers: Cashback offers are also common, where you receive a certain percentage of the purchase amount back as cashback.</p>

          <button className=" rounded- bg-white-400  text-blue-500">+3 more offers</button>
          <div className=" mt-3 flex">
            <img className=" h-5" src="https://th.bing.com/th?id=OIP.2Z41YG1rU348y9Gx8YCh5AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
            <p className=" ml-3">Deliver to</p>
            <p className="ml-28 border bg-slate-50">Services</p>
            <p className=" ml-8 border bg-slate-50">Cash on Delivery available</p>
          </div>
          <div className=" flex">
          <p className=" mt-5">Enter delivery pincode </p>
          <p className=" ml-12 mt-5 border bg-slate-50">Check</p>
          </div>
        </div>
        
 
        </>
    )

}
export default Product