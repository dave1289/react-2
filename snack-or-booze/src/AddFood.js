import React from "react";
import {
   Card,
   CardBody,
   CardTitle,
} from "reactstrap";
import useFields from "./Hooks/useFields";
import "./AddFood.css"
import "./Api.js"
import SnackOrBoozeApi from "./Api.js";
import { useForm } from "react-hook-form";

const AddFood = ({ type }) => {
   // const [formData, handleChange, resetForm] = useFields({
   //    foodname: '',
   //    description: '',
   //    recipe: '',
   //    server: ''
   // })
   const {register, handleSubmit} = useForm({
      defaultValues: {
         name: '',
         description: '',
         recipe: '',
         serve: ''
      }
   });
   const onSubmit = e => {
      if (type=== 'drinks') {
         const drink = {key: e.foodname, ...e}
         SnackOrBoozeApi.addDrink(drink)
      } else {
         const snack = {key: e.foodname, ...e}
         SnackOrBoozeApi.addSnack(snack)
      }
   }

   return (
      <Card>
         <CardTitle className="font-weight-bold text-center">Add {type === 'drinks' ? 'Drink' : 'Snack'}</CardTitle>
         <CardBody>
            <form className="col-md-4" onSubmit={handleSubmit(onSubmit)}>
               <label> Name:
                  <input {...register("name")}></input>
               </label>
               <label>Description:
                  <input {...register("description")}></input>
               </label>
               <label>Recipe:
                  <input {...register("recipe")}></input>
               </label>
               <label>Service:
                  <input {...register("serve")}></input>
               </label>
               <button>Submit!</button>
            </form>
         </CardBody>
      </Card>
   )
}

export default AddFood;