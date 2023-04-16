import React, { useState , useEffect} from "react";
import CustomNavbar from "./CustomNavbar";
import Footer from './footer'

function ProductList() {
  const [products, setProducts] = useState([])
  async function getData(){
    const response = await fetch("/mobile/");
    console.log(response.body);
    const result = await response.json();
    setProducts(result)

    //setPhones(result);
  }
  useEffect( () => {
    getData().then(()=>{
      console.log(products);
    })
  }, []);
  
  const handleEdit = (id, field, value) => {
    setProducts(prevState => {
      const newData = prevState.map(row => {
        if (row.id === id) {
          return {
            ...row,
            [field]: value
          }
        }
        return row;
      });
      return newData;
    });
  };

  const handleDelete = (id) => {
    fetch('/mobile/' + id, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))
getData()
    // setProducts(prevState => {
    //   const newData = prevState.filter(row => row.id !== id);
    //   return newData;
    //});
  };

  return (
    <div >
        <CustomNavbar />
        <table style={{marginLeft:200, marginRight:200}}>
      <thead>
      </thead>
      <tbody>
        {products.map(row => (
          <div style={{border:'2px solid black',margin:5,borderRadius:9}}>
            <tr key={row._id}>
            <div>
            <td>
              <div style={{margin:15,width:"90px"}}>{row.brand}</div>
            </td>
            <td>
            <div style={{margin:15, width:"170px"}}>{row.model}</div>
            </td>
            <td>
            <div style={{margin:15, width:"90px"}}>${row.price}</div>
            </td>
            <td>
            <div style={{margin:15, width:"170px"}}>{row.battery_life}</div>
            </td>
            <td>
            <div style={{margin:15, width:"170px"}}>{row.operating_system}</div>
            </td>
            <td>
            <div style={{margin:15, width:"170px"}}>{row.ram}</div>
            </td>
            <td>
              <button onClick={() => handleDelete(row._id)}>Delete</button>
            </td>
            </div>
          </tr>
          </div>
        ))}
      </tbody>
    </table>
      <Footer />
    </div>
  );
}

export default ProductList;
