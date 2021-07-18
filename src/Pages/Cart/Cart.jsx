import React from "react";
import Header from "../../Components/Header/Header";

function Cart({ data }) {
  console.log(data, "is data");
  if (!data.length) {
    return (
      <div>
        <Header />
        <h2 className="text-info text-center">Cart is Empty</h2>;
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="bg-light d-flex m-auto mt-4 col-6">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
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
                    <td>
                      <button disabled="true" className="btn btn-danger">
                        remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
