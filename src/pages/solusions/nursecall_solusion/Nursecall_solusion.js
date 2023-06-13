import { Container } from "react-bootstrap"
import "./Nursecall_solusion.css"
import baner_nurse_call from "../../../components/imgs/baner_solusion/nurse-call.PNG"
export default function Nursecall_solusion(){
    return(
        <div className="nursecall_solusion_page">
            <Container>
                <div className="container_nursecall_solusion_page">
                    <h1>Giải pháp toàn diện cho bệnh viện</h1>
                    <img src={baner_nurse_call}/>
                </div>
            </Container>
        </div>
    )
}