import React from "react";
import Combobox from "react-widgets/Combobox";

export default function DropdownList(props) {
 
  
      return (
        <Combobox
        data={props.elements}
        valuefield='value'
        textField='value'

        onChange={(value) => {
          console.log(value);
         // setSelectedPerson(value.key )
         props.handleChangeSelectedPerson(value.key);
        }
      }
    />
      )
    
  }