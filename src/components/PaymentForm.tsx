import { Formik, Form, Field, ErrorMessage } from "formik";
import { ICard } from "../interface/ICard";
import { cardSchema } from "../schemas/schamaCard";
import { generateYears } from "../helpers/generateYears";
import { generateMonth } from "../helpers/generateMonth";
import "./style.css";
export const PaymentForm = () => {
  const initialValues: ICard = {
    number: "",
    name: "",
    month: 0,
    year: 0,
    cvv: "",
    number1: "",
    number2: "",
    number3: "",
    number4: "",
  };

  const years = generateYears();
  const months = generateMonth();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={cardSchema}
      >
        {(formik) => (
          <Form className="form">
            {/* //Numero de la tarjeta */}
            <div className="form__number">
              <label htmlFor="number">Numero de tarjeta de crédito </label>
              <div className="form__number-group">
                <Field name="number1" type="text" />
                <Field name="number2" type="text" />
                <Field name="number3" type="text" />
                <Field name="number4" type="text" />
                <ErrorMessage name="number1" component={"span"} />
                <ErrorMessage name="number2" component={"span"} />
                <ErrorMessage name="number3" component={"span"} />
                <ErrorMessage name="number4" component={"span"} />
              </div>
            </div>

            {/* //Nombre del titular */}
            <div className="form__name">
              <label htmlFor="name">Nombre del titular </label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" component={"span"} />
            </div>

            {/* //Fecha de vencimiento y CVV */}
            <div className="form__date-cvv">
              <div className="form__box-date" >
                <label htmlFor="year"> Fecha de vencimiento </label>
                <div className="group__select">
                  <Field name="year" as="select">
                    <option value={""}>Año</option>
                    {years.map((year) => (
                      <option value={year}>{year}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="year" component={"span"} />

                  {/* <label htmlFor="month"> Mes </label> */}
                  <Field name="year" as="select">
                    <option value={""}>Mes</option>
                    {months.map((month) => (
                      <option value={month}>{month}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="month" component={"span"} />
                </div>
              </div>
              <div className="form__cvv">
                <label htmlFor="cvv"> CVV </label>
                <Field name="cvv" type="text" />
                <ErrorMessage name="cvv" component={"span"} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
