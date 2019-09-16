import React from 'react';
import './styles.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bay: [
        { prod_name: 'cartoon books', prod_description: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.', image: './assets/one.jpg', price: '$2000' },
        { prod_name: 'Kitchen utensils', prod_description: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.', image: './assets/two.jpg', price: '$2000' },
        { prod_name: 'Hand bag', prod_description: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.', image: './assets/three.jpg', price: '$2000' },
        { prod_name: 'Shoes', prod_description: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.', image: './assets/four.jpg', price: '$2000' },
        { prod_name: 'Ladies kurthis', prod_description: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.', image: './assets/five.jpg', price: '$2000' }
      ],
      temp_prod_name: '',
      temp_prod_description: '',
      temp_image: '',
      temp_price: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (event) => {
    let current = this.state.bay.slice();
    let imagePath = "" + this.state.temp_image;
    let pathArr = imagePath.split('\\');
    imagePath = "./assets/" + pathArr[pathArr.length - 1];
    current.push({ prod_name: this.state.temp_prod_name, prod_description: this.state.temp_prod_description, image: imagePath, price: this.state.temp_price })
    this.setState({
      bay: current,
      temp_prod_name: '',
      temp_prod_description: '',
      temp_image: '',
      temp_price: ''
    })
    console.log(current)
    event.preventDefault();

  }

  render() {

    let list = this.state.bay.map(
      i => {

        return <div className="container">
          <hr />
          <div className="card">
            <div class="row">
              {/* <div class="card card-body"> */}
              <div className="column left" >
                {/* <img src={i.image}/> */}

                <img src={require("" + i.image)} />
              </div>
              <div className="column right" >
                <h3> {i.prod_name}</h3>
                {i.prod_description}<br />
                <h5> {i.price}</h5>
                <button class="btn btn-outline-primary" >Buy Now</button>&nbsp;&nbsp;
          <button class="btn btn-outline-primary " >Add to cart</button>
              </div>
              {/* <img src={i.image} /> */}
              {/* <div class="col">
         
          </div> */}
              {/* <button className="btn btn-primary float-right">Add to cart</button> */}
              {/* </div>  */}
            </div>
          </div>

          <br />
        </div>

      }
    );
    return (
      <div>
        <div className="container">
          <button class="btn btn-outline-primary">Add</button></div>

          {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

        <form onSubmit={this.handleSubmit}>
          Product Name: <input type="text" name="temp_prod_name" value={this.state.temp_prod_name} onChange={this.handleChange} /><br /><br />
          Description: <textarea name="temp_prod_description" value={this.state.temp_prod_description} onChange={this.handleChange} /><br /><br />
          Image: <input type="file" name="temp_image" value={this.state.temp_image} onChange={this.handleChange} /><br /><br />
          Price: <input type="text" name="temp_price" value={this.state.temp_price} onChange={this.handleChange} />
          <input type="submit" value="add" />
        </form>
        {list}
      </div>
    )
  }
}
export default App; 
