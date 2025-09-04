import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export function toastify(message, isError = false) {
    Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: isError ? "linear-gradient(to right, red, red)" : "linear-gradient(to right, #3668a1, #4b96e3)",
            fontSize: '1rem',
            borderRadius: '0.25rem',
        }
    }).showToast();
}