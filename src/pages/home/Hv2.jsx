import React from "react";
import Contener from "../../components/ui/Contener";
import restApiimg from "../../assets/web_img/restApi01.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import codeData from "../../data/code.json";
import restApiImage2 from "../../assets/web_img/restApi02.png";
import restMobileApp from "../../assets/web_img/mobileRestApi02.png";

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
                    <div className="flex around w90 medel mbColumn">
                        <div>
                            <p>
                                The API services are the backbone of our application, providing a seamless and efficient way to access and manipulate data. They are designed to be robust, scalable, and secure, ensuring that users can interact with our platform without any hiccups. Whether it's fetching user information, processing transactions, or integrating with third-party services, our API services are built to handle it all with ease.
                            </p>
                            <br />
                            <ul>
                                <li>
                                    <p>Fetch API use in client</p>
                                    <SyntaxHighlighter
                                        language="text"
                                        style={vscDarkPlus}
                                    >
                                        {codeData.home_code.api_url}
                                    </SyntaxHighlighter>
                                </li>
                                <li>
                                    <p>Fetch API use in JavaScript and React</p>
                                    <p>use set
                                        <span className="mark">GET</span>,
                                        <span className="mark">POST</span>,
                                        <span className="mark">DELETE</span>,
                                        <span className="mark">PUT</span>,
                                        <span className="mark">PATCH</span>,
                                        <span className="mark">EDIT</span>
                                        method to call API in JavaScript and React.
                                    </p>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={vscDarkPlus}
                                        showLineNumbers={true}
                                    >
                                        {codeData.home_code.js_api_code}
                                    </SyntaxHighlighter>
                                </li>
                            </ul>


                        </div>

                        <div>
                            <img className="web_img" src={restApiimg} alt="REST API" />
                        </div>

                    </div>

                </div>
                <div className="flex center medel">
                    <img className="web_fill mbNone" src={restApiImage2} alt="REST API" />
                    <img className="web_fill" src={restMobileApp} alt="REST API" />
                </div>
            </Contener>
        </>
    )
}