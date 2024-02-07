import React from 'react'
import { Timestamp } from "firebase/firestore";


const Clock = () => {
  // zaimplementuj to samo z jakąś biblioteką 
  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  const calculateAmountOfDays = (day: number, month: number, isLeap: boolean) => {
    const months = [
      31,
      isLeap ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      24
    ]
    months[month - 1] = months[month - 1] - day;
    let amountOfDays = 0;
    for(let i = month - 1; months.length > i; i++){
      amountOfDays += months[i];
    }
    return amountOfDays;
  }

  console.log();

  console.log(Timestamp.now().toDate().getDate());
    const dataObject = Timestamp.now().toDate();
    const day = dataObject.getDate();
    const month = dataObject.getMonth() + 1;
    const year = dataObject.getFullYear();
    
    console.log(year);
    const lateDays = calculateAmountOfDays(day, month, isLeapYear(year));
  return (
    <div className='dayZeroContent'>
      <span>Dni do wigilii</span>
      <span>{lateDays}</span>
    </div>
  )
}

export default React.memo(Clock);
