import dotenv from 'dotenv';import mongoose from 'mongoose';import User from './models/User.js';import Bike from './models/Bike.js';import Trip from './models/Trip.js';import FuelLog from './models/FuelLog.js';import Maintenance from './models/Maintenance.js';
dotenv.config();
await mongoose.connect(process.env.MONGO_URI);
const user=await User.findOne();
if(!user){console.log('Register a user in RideLog first, then run npm run seed.');process.exit(0);}
const existing=await Bike.countDocuments({userId:user._id});
if(existing){console.log('Sample data already exists for this user.');process.exit(0);}
const bike=await Bike.create({userId:user._id,name:'Dominar 400',make:'Bajaj',model:'Dominar 400',year:2023,currentOdometer:12500,fuelType:'Petrol'});
await Trip.create([
 {userId:user._id,bikeId:bike._id,title:'Weekend Mountain Ride',startLocation:'Jalandhar',destination:'Bir Billing',startOdometer:11800,endOdometer:12030,date:new Date('2026-09-12'),expenses:{fuel:1200,food:450,toll:100,other:150},stops:[{name:'Palampur',notes:'Tea break'}]},
 {userId:user._id,bikeId:bike._id,title:'Local Ride',startLocation:'Phagwara',destination:'Jalandhar',startOdometer:12030,endOdometer:12075,date:new Date('2026-10-05'),expenses:{fuel:300,food:100,toll:0,other:0}}
]);
await FuelLog.create({userId:user._id,bikeId:bike._id,date:new Date('2026-10-05'),odometer:12075,litres:10,pricePerLitre:100,totalCost:1000,station:'Demo Fuel Station',isFullTank:true});
await Maintenance.create({userId:user._id,bikeId:bike._id,serviceType:'Engine oil change',date:new Date('2026-08-15'),odometer:11500,cost:1800,workshop:'Demo Workshop',nextServiceOdometer:13000,nextServiceDate:new Date('2026-11-15')});
console.log('Demo records created.');await mongoose.disconnect();
