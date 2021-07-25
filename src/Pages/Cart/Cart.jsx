import React from "react";
import Header from "../../Components/Header/Header";

function Cart({ data,login,removeCart }) {
  console.log(data, "is data");
  if (!data.length) {
    return (
      <div>
        <Header login={login}/>
        <h2 className="text-info text-center">Cart is Empty</h2>;
      </div>
    );
  }
  
  return (
    <>let k=0;
      <Header login={login} />
      <div className="bg-light d-flex m-auto mt-4 col-6">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price Rs.</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((ele, idx) => {
                return (
                  <tr>
                    <th scope="row">{idx + 1}</th>
                    <td>{ele.title}</td>
                    <td>{ele.desc}</td>
                    <td>{ele.price}</td>
                    <td>          
                      <button className="btn btn-danger" onClick={()=> removeCart(ele.id)}>
                        Remove
                      </button>
                      
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <tr> 
              <td style={{color: "black"}}>Total:</td>
              <td></td>
               <button className="btn btn-primary" >Checkout</button>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Cart;
