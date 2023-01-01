import { useState } from "react";
import uuid from "react-uuid";
import { ClientCheckout } from "../../shared/models/ClientCheckout.model";
import { CheckoutInputStyled } from "../styles/CheckoutInput.Styled";
import { Button } from "../ui/Button";

interface checkoutInputData {
  label: string,
  type: string,
  name: string,
  pattern: string,
  defaultValue: string | number,
  placeHolder: string
}

const checkoutFormData: checkoutInputData[] = [
  {
    label: "Nom",
    type: "text",
    name: "lastName",
    pattern: "[a-zA-Z][a-zA-Z ]+",
    defaultValue: "",
    placeHolder: "Nom sans caractère spéciaux"
  },
  {
    label: "Prénom",
    type: "text",
    name: "firstName",
    pattern: "[a-zA-Z][a-zA-Z ]+",
    defaultValue: "",
    placeHolder: "Prénom sans caractère spéciaux"
  },
  {
    label: "Email",
    type: "text",
    name: "email",
    pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
    defaultValue: "",
    placeHolder: "Ex: email@zelty.fr"
  },
  {
    label: "Téléphone",
    type: "tel",
    name: "phone",
    pattern: "[0-9]{10}",
    defaultValue: 123456789,
    placeHolder: "Ex: 0123456789"
  }
]

export const CheckoutInput = () => {
  // const [clientCheckoutInfors, setSlientCheckoutInfors] = useState<ClientCheckout>({
  //   lastName: "",
  //   firstName: "",
  //   email: "",
  //   phone: 0
  // });
  
  // const [lastName, setLastName] = useState<string>("");
  // const [firstName, setFirstName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [phone, setPhone] = useState<number>();

  const handleInputChange = (event: any) => {

    // setSlientCheckoutInfors({
    //   ...clientCheckoutInfors,
    //   [event.target.name]: event.target.value
    // })

    // if(event.target.id === "lastName") {
    //   setLastName(event.target.value);
    // }
    // if(event.target.id === "firstName") {
    //   setFirstName(event.target.value);
    // }
    // if(event.target.id === "email") {
    //   setEmail(event.target.value);
    // }
    // if(event.target.id === "phone") {
    //   setPhone(event.target.value);
    // }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
  }

  return (
    <CheckoutInputStyled>
      <form className="zelty-restaurant__checkout__form" onSubmit={handleSubmit}>
        {checkoutFormData.map((data: checkoutInputData) => (
          <div key={uuid()} className="zelty-restaurant__checkout__form__input">
            <label>
              {data.label}
              <input
                required
                id={data.name}
                type={data.type}
                name={data.name}
                pattern={data.pattern}
                placeholder={data.placeHolder}
                defaultValue={data.defaultValue}
                onChange={(e) => { handleInputChange(e) }} />
            </label>
          </div>
        ))}
        <Button type="submit" className="zelty-restaurant__checkout__form__form-button" onClick={handleSubmit}>Confirmer Les Informations</Button>
      </form>
    </CheckoutInputStyled>
  );
};
