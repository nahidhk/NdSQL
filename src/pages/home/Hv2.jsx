import React from "react";
import Contener from "../../components/ui/Contener";
import restApiimg from "../../assets/web_img/restApi01.png";

export default function Hv2() {
    return (
        <>
            <Contener>
                <br />
                <p className="homeTitle">
                    MySQL API Services
                    <hr />
                </p>
                <br />
            </Contener>
            <Contener>
                <div className="flex center">
                    <div className="flex around w90 medel">
                        <div>
                            <p>
                                The API services are the backbone of our application, providing a seamless and efficient way to access and manipulate data. They are designed to be robust, scalable, and secure, ensuring that users can interact with our platform without any hiccups. Whether it's fetching user information, processing transactions, or integrating with third-party services, our API services are built to handle it all with ease.
                            </p>
                        </div>
                        <div>
                            <img src={restApiimg} alt="REST API" />
                        </div>
                    </div>
                </div>
            </Contener>
        </>
    )
}