import "reflect-metadata";
import { createConnection } from "typeorm";
import { Employee } from "./entity/Employee";
``
createConnection().then(async connection => {

  let employees = await connection.getRepository(Employee);

  const data = await employees.findAndCount();
  console.log(data);
}).catch(error => {
  console.log(error);
});