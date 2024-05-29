import React, { useContext } from 'react'
import { CalcContext } from '../context/Buttoncontext'



const getStyledName = btn =>{
 
  const className = {
    "=":"equals",
    "+":"opt",
    "*":"opt",
    "-":"opt",
    "/":"opt",
  }
  return className[btn]

}

const Button = ({value}) => {
    const {calc,setCalc} = useContext(CalcContext)

  const Commaclick =() =>{
       setCalc({
        ...calc,
        num:!calc.num.toString().includes(".")? calc.num+value :calc.num
       })

  }
  const ResetClick =() =>{
    setCalc({
      sign:"",num:0,res:0
    })
  }
  const EqualsClick =() =>{
    if(calc.res && calc.num){
      const math  = (a,b , sign) =>{
        const resulting = {
          "+" :(a,b) => a+b,
          "-" :(a,b) => a-b,
          "/" :(a,b) => a/b,
          "*" :(a,b) => a*b,
          }
        return resulting[sign] (a,b);
      }
      setCalc({
        res: math(calc.res,calc.num,calc.sign),
        sign:" ",
        num:0
        
      })
    }
   
  }
  const handleswitchbutton =() =>{
    const NumberString = value.toString()

    let NumberValue;
    if(NumberString === "0" && calc.num === 0){
          NumberValue = "0"
    }else{
      NumberValue = Number(calc.num + NumberString)
    }

    setCalc({
      ...calc,
       num:NumberValue
    })
  } 

  const SignClick =() =>{
    setCalc({
      sign:value,
      res:!calc.res && calc.num ? calc.num :calc.res,
      num:0
    })
  }

  const PercentClick =() =>{
      setCalc({
        num:(calc.num /100),
        res:(calc.num /100),
        sign:""
      })
  }

  const InvertClick =() =>{
    setCalc({
      num:calc.num ? calc.num * -1 :0,
      res :calc.res ? calc.res * -1 :0,
      sign:""
    })
  }

  const handleButtonClick =() =>{
    
    const results ={
      "." :Commaclick,
      "c":ResetClick,
      "/":SignClick,
      "+":SignClick,
      "-":SignClick,
      "*":SignClick,
      "=":EqualsClick,
      "%":PercentClick,
      "+-":InvertClick,
    }
    if(results[value]){
      return results[value]()

    }else{
       return handleswitchbutton()
    }

  }
  return (
    <button onClick={handleButtonClick} className={`${getStyledName(value)} button`}> {value}</button>
  )
}

export default Button