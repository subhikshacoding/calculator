import './App.css';
import Wrapper from './component/Wrapper';
import Buttonbox from './component/Buttonbox';
import Button from './component/Button';
import Screen from './component/Screen';
import CalcProvider from './context/Buttoncontext';


const btnValues = [
  ["c","+-","%","/"],
  [7,8,9,"*"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="]
];

function App() {
  return (
    <div>
      
        <CalcProvider>
        <Wrapper>
        <Screen/>

        <Buttonbox>
            {btnValues.flat().map((btn,i)=>(
              <Button value={btn} key={i} />
            ))}
        </Buttonbox>
      </Wrapper>


        </CalcProvider>
     
    </div>
  );
}

export default App;
