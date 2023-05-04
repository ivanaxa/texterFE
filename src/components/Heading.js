import {Card, Button, Image, Col, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Register from './Register';

function Heading(){

    const image_src = "./assets/phone_image.jpg";
    const header_text = "header_text";

    return(
        <div className="container-fluid header_background_color">
            <div className="row">

            <div className="col-12 col-sm-6">
                <div className="header_text">
                <h1 className ="header_text_color">Welcome to Texter!</h1>
                <p className="header_text_color">
                This application will allow you to send a text to any US number by scheduling it beforehand.
                Use this to send friendly reminders or give alerts to yourself, family, and friends!
                </p>
                <hr/>
                <Login/>
                </div>
            </div>

           <div class="col-sm-6 img_div">
                <div>
                    <img 
                        className="d-none d-sm-block rounded header_img" 
                        src={image_src} 
                        alt="">
                    </img>
                </div>
            </div>

            </div>
        </div>
  );

}

export default Heading