import express, { Application } from 'express';
import morgan from 'morgan';

import AuthController from './routes/auth';
import ProductController from './routes/product';
import SupplierController from './routes/supplier';
import EmployeeController from './routes/employee';

import SalesController from './routes/sales';
import LeavesController from './routes/leave';
import SalaryController from './routes/salary';
import CustomerReturnController from './routes/customerReturn';


const app: Application = express();

// settings
app.set('port', 8080 || process.env.PORT);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/auth', AuthController);
app.use('/api/products', ProductController);
app.use('/api/suppliers', SupplierController);
app.use('/api/employees', EmployeeController);
app.use('/api/sales', SalesController);
app.use('/api/leaves', LeavesController);
app.use('/api/salary', SalaryController);
app.use('/api/customerReturn', CustomerReturnController);


export default app;
