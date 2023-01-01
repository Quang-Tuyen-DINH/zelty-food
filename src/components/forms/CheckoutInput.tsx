import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { ClientCheckout } from "../../shared/models/ClientCheckout.model";
import { CheckoutInputStyled } from "../styles/CheckoutInput.Styled";
import { Button } from "../ui/Button";

interface checkoutInputData {
  label: string,
  type: string,
  name: string,
  pattern: string,
  placeHolder: string
}

const checkoutFormData: checkoutInputData[] = [
  {
    label: "Nom",
    type: "text",
    name: "lastName",
    pattern: "[a-zA-Z][a-zA-Z ]+",
    placeHolder: "Nom sans caractères spéciaux"
  },
  {
    label: "Prénom",
    type: "text",
    name: "firstName",
    pattern: "[a-zA-Z][a-zA-Z ]+",
    placeHolder: "Prénom sans caractères spéciaux"
  },
  {
    label: "Email",
    type: "text",
    name: "email",
    pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
    placeHolder: "Ex: email@zelty.fr"
  },
  {
    label: "Téléphone",
    type: "tel",
    name: "phone",
    pattern: "[0-9]{10}",
    placeHolder: "Ex: 0123456789"
  }
]

export const CheckoutInput = (props: {confirmInfors: any}) => {
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();
  const [clientCheckoutInfors, setSlientCheckoutInfors] = useState<ClientCheckout>({
    lastName: "",
    firstName: "",
    email: "",
    phone: 0
  });

  const onSubmit = (data: any) => {
    setSlientCheckoutInfors(data);
    dispatch({ type: "SAVE_CLIENT", payload: data });
  }

  return (
    <CheckoutInputStyled>
        <form className="zelty-restaurant__checkout__form" onSubmit={handleSubmit(onSubmit)}>
          {checkoutFormData.map((data: checkoutInputData) => (
            <div key={uuid()} className="zelty-restaurant__checkout__form__input">
              <label>
                {data.label}
                <input
                  required
                  type={data.type}
                  id={data.name}
                  pattern={data.pattern}
                  placeholder={data.placeHolder}
                  {...register(data.name, { required: true })} />
              </label>
            </div>
          ))}
            <Button type="submit" className="zelty-restaurant__checkout__form__confirm-button" onClick={() => {props.confirmInfors(clientCheckoutInfors)}}>Confirmer Les Informations</Button>
        </form>
    </CheckoutInputStyled>
  );
};
