import {useState } from "react";
import { Container} from "react-bootstrap";
import DetailWeather from "./DetailWeather";
import Weather from "./Weather";

function Home() {

    const [showDetail, setShowDetail] = useState(false)

    
    
    
    return ( 
       <Container>
            <Weather showDetail={showDetail} setShowDetail={setShowDetail}/>
            <DetailWeather showDetail={showDetail} setShowDetail={setShowDetail}/>
      </Container>
      );
}

export default Home;