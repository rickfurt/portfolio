import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'



class App extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <h1>All the Components will be rendered here...</h1>
         );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
