import React from "react";
import {
   Card,
   CardBody,
   CardTitle,
   CardText,
   ListGroup,
   ListGroupItem
} from "reactstrap";
import useFields from "./Hooks/useFields";
import "./AddFood.css"

const AddFood = ({ type }) => {
   const [formData, handleChange, resetForm] = useFields({
      foodname: '',
      description: '',
      recipe: '',
      server: ''
   })
   const handleSubmit = e => {
      e.preventDefault();
      resetForm();
   }

   return (
      <Card>
         <CardTitle className="font-weight-bold text-center">Add {type === 'drinks' ? 'Drink' : 'Snack'}</CardTitle>
         <CardBody>
            <form className="col-md-4" onSubmit={handleSubmit}>
               <label>{type.slice(0,-1)} name: </label>
                  <input
                  name="foodname"
                  value={formData.foodname}
                  onChange={handleChange}
                  placeholder="food name"></input>
               <label>description: </label>
                  <input
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="description"></input>
               <label>Recipe: </label>
                  <input
                  name="recipe"
                  value={formData.recipe}
                  onChange={handleChange}
                  placeholder="recipe"></input>
               <label>Serve: </label>
                  <input
                  name="server"
                  value={formData.server}
                  onChange={handleChange}
                  placeholder="serving instructions"></input>
               <button className="text-center btn-secondary">Submit</button>
            </form>
         </CardBody>
      </Card>
   )
}

export default AddFood;