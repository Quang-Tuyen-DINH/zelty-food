import { useEffect, useState } from "react";
import { useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CheckoutInputStyled } from "../styles/CheckoutInput.Styled";
import { Button } from "../ui/Button";
import Notification from "../../features/Notification";
import Store from "../../store/Index";

interface CheckoutFormValues {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
}

interface CheckoutInputData {
  label: string,
  type: string,
  name: string,
  pattern: string,
  placeHolder: string
}

interface CheckoutInputProps {
  confirmInfors: (confirmed: boolean) => void;
}

interface InputComponentProps {
  data: CheckoutInputData;
  register: UseFormRegister<CheckoutFormValues>;
}

const checkoutFormData: CheckoutInputData[] = [
  {
    label: "Last name",
    type: "text",
    name: "lastName",
    pattern: "[a-zA-Z][a-zA-Z ]+",
    placeHolder: "Last name without special characters"
  },
  {
    label: "First name",
    type: "text",
    name: "firstName",
    pattern: "[a-zA-Z][a-zA-Z ]+",
    placeHolder: "First name without special characters"
  },
  {
    label: "Email",
    type: "text",
    name: "email",
    pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
    placeHolder: "Ex: email@abc.com"
  },
  {
    label: "Telephone",
    type: "tel",
    name: "phone",
    pattern: "[0-9]{10}",
    placeHolder: "Ex: 0123456789"
  }
]

const InputComponent = ({ data, register }: InputComponentProps) => {
  return (
    <label>
      {data.label}
      <input
        type={data.type}
        placeholder={data.placeHolder}
        {...register(data.name as keyof CheckoutFormValues, { required: true, pattern: new RegExp(data.pattern) })}
      />
    </label>
  )
}

export const CheckoutInput = ({ confirmInfors }: CheckoutInputProps) => {
  const dispatch = useDispatch();
  const [hasProducts, setHasProducts] = useState<boolean>();
  const { register, handleSubmit, setFocus, formState, reset } = useForm<CheckoutFormValues>();
  const { isDirty, isValid } = formState;

  useEffect(() => {
    setFocus(checkoutFormData[0].name as keyof CheckoutFormValues);
    Store.getState().cartProducts.length > 0 ? setHasProducts(true): setHasProducts(false);
    Store.subscribe(() => {
      Store.getState().cartProducts.length > 0 ? setHasProducts(true): setHasProducts(false);
    })
  }, []);

  const onSubmit: SubmitHandler<CheckoutFormValues> = (data) => {
    dispatch({ type: "SAVE_CLIENT", payload: data });
    reset();
  }

  return (
    <CheckoutInputStyled>
      {hasProducts === true ?
        <form className="zelty-restaurant__checkout__form" onSubmit={handleSubmit(onSubmit)}>
          {checkoutFormData.map((data: CheckoutInputData) => (
            <div key={`input-${data.name}`} className="zelty-restaurant__checkout__form__input">
              <InputComponent data={data} register={register} />
            </div>
          ))}
          {(isDirty && isValid) ?
            <div className="zelty-restaurant__checkout__form__confirm">
              <Button
                type="submit"
                className="zelty-restaurant__checkout__form__confirm__button"
                onClick={() => {confirmInfors(true); Notification.notifyCheckoutInformations()}}
              >
                Confirm Information
              </Button>
            </div>
          :
            <div className="zelty-restaurant__checkout__form__unconfirm">
              <Button 
                disabled
                className="zelty-restaurant__checkout__form__unconfirm__button"
              >
                Confirm Information
              </Button>
            </div>
          }
        </form>
      :
        <div className="zelty-restaurant__checkout__empty">
          Please add products to your cart !
        </div>
      }
    </CheckoutInputStyled>
  );
};
