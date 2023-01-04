import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CheckoutInputStyled } from "../styles/CheckoutInput.Styled";
import { Button } from "../ui/Button";
import Notification from "../../features/Notification";
import Store from "../../store/Index";

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

const InputComponent = (props: {data: checkoutInputData, register: any}) => {
  return (
    <label>
      {props.data.label}
      <input
        type={props.data.type}
        placeholder={props.data.placeHolder}
        {...props.register(props.data.name, { required: true, pattern: new RegExp(props.data.pattern) })} />
    </label>
  )
}

export const CheckoutInput = (props: {confirmInfors: any}) => {
  const dispatch = useDispatch();
  const [hasProducts, setHasProducts] = useState<boolean>();
  const {register, handleSubmit, setFocus, formState, reset} = useForm();
  const {isDirty, isValid} = formState;

  useEffect(() => {
    setFocus(checkoutFormData[0].name);
    Store.getState().cartProducts.length > 0 ? setHasProducts(true): setHasProducts(false);
    Store.subscribe(() => {
      Store.getState().cartProducts.length > 0 ? setHasProducts(true): setHasProducts(false);
    })
  }, []);

  const onSubmit = (data: any) => {
    dispatch({ type: "SAVE_CLIENT", payload: data });
    reset();
  }

  return (
    <CheckoutInputStyled>
      {hasProducts === true ?
        <form className="zelty-restaurant__checkout__form" onSubmit={handleSubmit(onSubmit)}>
          {checkoutFormData.map((data: checkoutInputData) => (
            <div key={`input-${data.name}`} className="zelty-restaurant__checkout__form__input">
              <InputComponent data={data} register={register} />
            </div>
          ))}
          {(isDirty && isValid) ?
            <div className="zelty-restaurant__checkout__form__confirm">
              <Button type="submit" className="zelty-restaurant__checkout__form__confirm__button" onClick={() => {props.confirmInfors(true); Notification.notifyCheckoutInformations()}}>Confirmer Les Informations</Button>
            </div>
          :
            <div className="zelty-restaurant__checkout__form__unconfirm">
              <Button disabled className="zelty-restaurant__checkout__form__unconfirm__button">Confirmer Les Informations</Button>
            </div>
          }
        </form>
      :
        <div className="zelty-restaurant__checkout__empty">
          Veuillez ajouter vos produits au panier !
        </div>
      }
    </CheckoutInputStyled>
  );
};
