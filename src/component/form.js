import React, { Component } from "react";
import {Form, FormControl, Button} from "react-bootstrap";
import "./css/form.css";
import AgeStats from "./AgeStats";

class MyForm extends Component{
    constructor(){
        super();

        this.state = {
            newDate: '',
            birthday: '1992-06-21',
            showStats: false
        }
    }

    changeBirthday(){
        console.log(this.state);
        this.setState({
            birthday: this.state.newDate,
            showStats: true
        })
    }

    render(){
        return(
            <div className="MyCss">
                <Form inline>
                <h2>Inpit Your Birthday !</h2>
                    <FormControl 
                    type="date"
                    onChange={event => this.setState({newDate: event.target.value})}
                    >
                    </FormControl>
                    {' '}
                    <Button onClick={ () => this.changeBirthday()}>Submit</Button>
                </Form>
                {
                    this.state.showStats ?
                    <AgeStats date={this.state.birthday}/> :
                    <div></div>
                }
                
            </div>    
        )
    }
}

export default MyForm;