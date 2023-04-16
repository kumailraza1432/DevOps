import React, { useState , useEffect} from "react";
import CustomNavbar from "./CustomNavbar";
import Footer from './footer'

function ProductList() {
  const [products, setProducts] = useState([])
  async function getData(){
    const response = await fetch("http://127.0.0.1:8080/mobile/");
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
    setProducts(prevState => {
      const newData = prevState.filter(row => row.id !== id);
      return newData;
    });
  };

  return (
    <div >
        <CustomNavbar />
        <table>
      <thead>
      </thead>
      <tbody>
        {products.map(row => (
          <tr key={row.id}>
            <div style={{border:"1px solid black"}}>
            <td>
              <div style={{backgroundColor:'#63C5DA',width:"90px"}}>{row.brand}</div>
            </td>
            <td>
            <div style={{backgroundColor:'#59788E', width:"170px"}}>{row.model}</div>
            </td>
            <td>
            <div style={{backgroundColor:'#63C5DA', width:"90px"}}>${row.price}</div>
            </td>
            <td>
            <div style={{backgroundColor:'#59788E', width:"170px"}}>{row.battery_life}</div>
            </td>
            <td>
            <div style={{backgroundColor:'#63C5DA', width:"170px"}}>{row.operating_system}</div>
            </td>
            <td>
            <div style={{backgroundColor:'#59788E', width:"170px"}}>{row.ram}</div>
            </td>
            <td>
              <button onClick={() => handleDelete(row.id)}>Delete</button>
            </td>
            </div>
          </tr>
        ))}
      </tbody>
    </table>
      <Footer />
    </div>
  );
}

export default ProductList;
