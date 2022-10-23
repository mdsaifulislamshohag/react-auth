import swal from "sweetalert";
import { toast } from 'material-react-toastify';

export function Alert(title, msg, type, time = 5000) {
    swal({
        title: title,
        text: msg,
        icon: type,
        buttons: false,
        timer: time
    });
}

export const Notify = (msg, type = "info", time = 1500, position = "top-right") => {
    toast( msg, {
        position: position,
        autoClose: time,
        type: type
    }); 
}
