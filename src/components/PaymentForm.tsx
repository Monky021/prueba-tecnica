import FormikLib, { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { ICard } from "../interface/ICard";
import { cardSchema } from "../schemas/schamaCard";
import { generateYears } from "../helpers/generateYears";
import { generateMonth } from "../helpers/generateMonth";
import "./style.css";
import { useAppDispatch } from "../hooks/hooks";
import { setCard, setFocus } from "../features/card/cardSlice";
import { useEffect, useRef } from "react";
import { addItem } from "../features/card/listCardSlice";
export const PaymentForm = () => {
  const initialValues: ICard = {
    number: "",
    name: "",
    month: "",
    year: 0,
    cvc: 0,
    focus: ''
  };
  
  const years = generateYears();
  const months = generateMonth();
  const dispatch = useAppDispatch();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={({cvc, focus ,...values}, { resetForm }) => {
          resetForm()          
          dispatch(addItem(values));
        }}
        validationSchema={cardSchema}
      >
        {({ setValues, values, handleChange }) => {
          useEffect(()=> {
            dispatch(setCard(values));
          },[values])
          const handleFocus = (focus: string) => {
            dispatch(setFocus(focus))
          }
          return (
            <Form className="form" id="form">
              {/* //Numero de la tarjeta */}
              <div className="form__number">
                <label htmlFor="number">Numero de la tarjeta </label>
                <div className="form__number-group">
                  <Field
                    name="number"
                    type="text"
                    maxLength={"16"}
                    id="number"
                    onFocus={() =>handleFocus('number')}
                    pattern="^[0-9]+"
                    aria-valuetext={values.number}
                    
                  />

                  <ErrorMessage name="number" component={"span"} />
                </div>
              </div>

              {/* //Nombre del titular */}
              <div className="form__name">
                <label htmlFor="name">Nombre del titular </label>
                <Field
                  name="name"
                  type="text"
                  onFocus={() =>handleFocus('name')}
                />

                <ErrorMessage name="name" component={"span"} />
              </div>

              {/* //Fecha de vencimiento y cvc */}
              <div className="form__date-cvc">
                <div className="form__box-date">
                  <label htmlFor="year"> Fecha de vencimiento </label>
                  <div className="group__select">
                    <div>
                      <Field
                        name="year"
                        as="select"
                        onFocus={() =>handleFocus('year')}
                      >
                        <option value={""}>Año</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="year" component={"span"} />
                    </div>

                    {/* <label htmlFor="month"> Mes </label> */}
                    <div>
                      <Field
                        name="month"
                        as="select"
                        onFocus={() =>handleFocus('month')}
                      >
                        <option value={""}>Mes</option>
                        {months.map((month, i) => (
                          <option key={month} value={i + 1}>
                            {month}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="month" component={"span"} />
                    </div>
                  </div>
                </div>
                <div className="form__cvc">
                  <label htmlFor="cvc"> cvc </label>
                  <Field
                    name="cvc"
                    type="text"
                    maxLength={"3"}
                    onFocus={() =>handleFocus('cvc')}
                    
                  />
                  <ErrorMessage name="cvc" component={"span"} />
                </div>
              </div>
              <button type="submit">Enviar</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
