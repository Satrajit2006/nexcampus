import Layer1 from "./Layer1";
import Layer2 from "./Layer2";
import Layer3 from "./Layer3";
import Body from "./Body";
import Rsidebar from "./RSidebar";
import Calender from "./Calender";




const Home=()=>{
    return <div className="layout">
            <div>
              <Body>
                <Layer1></Layer1>
                <Layer2></Layer2>
                <Layer3></Layer3>
                </Body>
              
            </div>
            <div>
              <Rsidebar>
                <Calender></Calender>
              </Rsidebar>
            </div>
          </div>
}
export default Home;