import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NotificationProps {
  type: string;
  label: string;
}

const Notification = {
  notifyProduct({ type, label }: NotificationProps) {
    if (type === "addProduct") {
      toast.success(`${label} added to the cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    };
    if (type === "removeProduct") {
      toast.warn(`${label} removed from the cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    };
  },

  notifyCheckoutInformations() {
    toast.success(`Your information for the command has been registered!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  },

  notifyPayment() {
    toast.success(`Your order has been validated!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  }
}

export default Notification;

