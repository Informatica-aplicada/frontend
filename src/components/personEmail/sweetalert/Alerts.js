import Swal from 'sweetalert2'
import React, { useEffect, useState } from "react";

export default function confirmAlert(message, icon){ 

    Swal.fire({
        text: message,
        icon: icon,
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        confirmButtonColor: 'rgb(194, 27, 69)',
        denyButtonText: `Cancelar`,
    })
        
}