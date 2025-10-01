import { useEffect } from "react";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../features/Notification";
import { RootState } from "../../store/RootState.model";
import { CheckoutInputStyled } from "../styles/CheckoutInput.Styled";
import { Button } from "../ui/Button";

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
  const hasProducts = useSelector((state: RootState) => state.cartProducts.length > 0);
  const { register, handleSubmit, setFocus, formState, reset } = useForm<CheckoutFormValues>();
  const { isDirty, isValid } = formState;

  useEffect(() => {
    setFocus(checkoutFormData[0].name as keyof CheckoutFormValues);
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
