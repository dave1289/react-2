import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import "./AddFood"
import {
   Card,
   CardBody,
   CardTitle,
   CardText,
   ListGroup,
   ListGroupItem
} from "reactstrap";
import AddFood from "./AddFood";

// FoodMenu now accepts type to create entries for drinks and snacks
// by changing tpye it alters what type of food item you are pulling and displaying
// creating functionality to pull snacks and drinks from the same component.
function FoodMenu({ food, type }) {
   return (
      <section className="col-md-4">
         <Card>
            <CardBody>
               <CardTitle className="font-weight-bold text-center">
                  {/* ternary to display appropriate menu name */}
                  {type === 'drinks' ? 'Drink' : 'Snack'} Menu
               </CardTitle>
               <ListGroup>
                  {food.map(food => (
                     <Link to={`/${type}/${food.id}`} key={food.id}>
                        <ListGroupItem>{food.name}</ListGroupItem>
                     </Link>
                  ))}
               </ListGroup>
            </CardBody>
         </Card>
         <AddFood type={type}/>
      </section>
   );
}

export default FoodMenu;
