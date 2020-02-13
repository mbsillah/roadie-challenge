import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";

const NewReview = props => {
  const validation = Yup.object().shape({
    rating: Yup.number()
      .min(1)
      .required("Must enter a rating."),
    user: Yup.string()
      .min(1, "Must have a character.")
      .required("Must enter a user."),
    title: Yup.string()
      .min(1, "Must have a character.")
      .required("Must enter a title."),
    review: Yup.string()
      .min(1, "Must have a character.")
      .required("Must enter a review.")
  });

  return (
    // <div style={{ backgroundColor: "white" }}>
    <Formik
      initialValues={{
        rating: 0,
        user: "",
        title: "",
        review: "",
        date: moment().format("L")
      }}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        props.addReview(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="rating">Rating:</label>
            <select
              value={values.rating}
              onChange={handleChange}
              id="rating"
              name="rating"
              onBlur={handleBlur}
              className={touched.rating && errors.rating ? "error" : null}
            >
              <option value={0}>Select a rating</option>
              <option value={1}>One star</option>
              <option value={2}>Two stars</option>
              <option value={3}>Three stars</option>
              <option value={4}>Four stars</option>
              <option value={5}>Five stars</option>
            </select>
          </div>
          <div>
            <label htmlFor="user">Your name:</label>
            <input
              type="text"
              name="user"
              id="user"
              onChange={handleChange}
              value={values.user}
              onBlur={handleBlur}
              className={touched.name && errors.name ? "error" : null}
            />
          </div>
          <div>
            <label htmlFor="title">Review title:</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              value={values.title}
              onBlur={handleBlur}
              className={touched.title && errors.title ? "error" : null}
            />
          </div>
          <div>
            <label htmlFor="review">Write your review below:</label>
            <textarea
              name="review"
              id="review"
              onChange={handleChange}
              value={values.review}
              onBlur={handleBlur}
              className={touched.review && errors.review ? "error" : null}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    // </div>
  );
};

export default NewReview;
