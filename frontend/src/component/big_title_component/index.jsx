import React from "react";
import{ Outline_container, Inside_character} from "./style";

const Big_title_component = ({ title }) => {
    return (

            <Outline_container>
                <Inside_character>{title}</Inside_character>
                
               
            </Outline_container>
    );

};

export default Big_title_component;