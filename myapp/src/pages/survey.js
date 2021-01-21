import React, {useState,useEffect} from "react";
import "survey-react/survey.css";
import Header2 from "../component/mainHeader2";
import Container from "react-bootstrap/Container";
import * as Survey from "survey-react";
import Success from "./successSurvey";


function SurveyCheck() {
const [isCompleted, setIsCompleted] = useState(false);
const [showCompletedPage, setShowCompletedPage] = useState(false);

var json = {
    title:"CHECK THE BOX IF YOUR COMPANY:",
    pages: [
        {
            
            questions: [
                {
                    name:"Please fill the following",
                    type: "checkbox",
                    choices: [
                        "Actively Compares Own Data On Activities With Other Life-Cycle Inventory Data Acquired From Public And/Or Commercial Source",
                        "Monitor, Record And Actively Plan To Reduce Greenhouse Gas Emissions",
                        "Have An Environmental Purchasing Policy For Office Supplies, Food, Electronics, Cleaning Products, Product Input Materials, And Other Items, As Appropriate",
                        "Combustion From Owned Sources (Such As Boilers, Furnaces, Production Machinery) Are Monitored",
                        "Use Energy-Efficient Lighting Systems (E.G., Natural Light, Leds, Cfls, Occupancy Sensors, Daylight Dimmers, Or Task Lighting), Office Equipment (E.G., Energy Star Appliances, Automatic Sleep Modes, Or After-Hours Timers), And Heating And Air-Conditioning Systems (E.G., Programmable Thermostats, Timers, Occupancy Sensors, Or Double-Paned Windows)"
                        ]
                }
            ]
        }, {
            questions: [
                {
                    type: "checkbox",
                    name: "Please fill the following",
                    choices: [
                        "Use Low-Impact Renewable Energy",
                        "Energy & Fuel Types And Quantities Are Documented",
                        "Purchase Renewable Energy Credits To Off Set Any Nonrenewable Energy That You Use",
                        "Monitors Emissions From The Transportation And Distribution (T&D) Of Products (Excluding Fuel And Energy Products), Including T&D Services Purchased Or Acquired By The Company",
                        
                        "Volume Of Water Use Is Monitored",
                        "Volume Of Waste Water Is Monitored",

                        "Organic Waste Is Composted",
                        
                        "Production Waste By-Product Is Usually Reused, Recycled, Or Repurposed"
                

                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "checkbox",
                    name: "Please fill the following",
                    choices: [
                        "Production Waste By-Product Is Usually Landfilled",
 
                        "Reduces Business Travels To The Minimum Necessary, Following Protocols To Reduce Their Environmental Impact",

                        "Provide Employees With Incentives To Use Alternative Commuting Options To Get To Work",
           
                        "Encourage Employees To Use Virtual Meeting Technology To Reduce Travel",

                        "Possess Assets On A Financial/Operational Lease Program (E.G. Machinery)",
                        "Monitors The Environmental Impact Of Leased Assets",
                        "Has A Written Policy Requiring Inbound And Outbound Freight Or Shipping To Be Transported Via The Lowest-Impact Methods Possible (E.G., Avoiding Shipment By Air Transport)",
                        "Targets & Action Plans Are In Place To Reduce Water Impacts"

                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "checkbox",
                    name: "Please fill the following",
                    choices: [
                       "Conduct Life Cycle Assessments Of Its Products",
                       "Has Reclamation Projects To Recycle Or Reuse End Products",
                       "Acts As A Lessor On Assets (E.G. Machinery, Equipment) With A Potential Environmental Impact",
                       "Operates A Franchise Model",
                       "Monitors The Environmental Impact Of Its Financial Investments"

                    ]
                }
            ]
        }, 
    ]
};

function onCompleteComponent(survey){
    setIsCompleted(true);
    console.log("The results are : " + JSON.stringify(survey.data));
}


var surveyRender = !isCompleted ?(
    <Survey.Survey
    json = {json}
    showCompletedPage = {false}
    onComplete = {onCompleteComponent}
    showProgressBar="bottom"
    showQuestionNumbers="off"


    />
) : null


var onSurveyCompletion = isCompleted ? (
    <Success />
):null;


    return(

        <>
        <Container>
            <Header2 />
            <div className="mt-5">
            {surveyRender}
            {onSurveyCompletion}
        </div>
        <div id="surveyResult">

        </div>
        </Container>
        
        </>
    )
}

export default SurveyCheck;