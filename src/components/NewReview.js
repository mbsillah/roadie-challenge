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
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <span className="title">Add review</span>
      </div>
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
          <div style={{ padding: "0rem 3rem" }}>
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="rating">Rating:</label>
                <div>
                  <select
                    style={{
                      width: "40%"
                    }}
                    value={values.rating}
                    onChange={handleChange}
                    id="rating"
                    name="rating"
                    onBlur={handleBlur}
                    className={
                      touched.rating && errors.rating ? "error field" : "field"
                    }
                  >
                    <option value={0}>Select a rating</option>
                    <option value={1}>One star</option>
                    <option value={2}>Two stars</option>
                    <option value={3}>Three stars</option>
                    <option value={4}>Four stars</option>
                    <option value={5}>Five stars</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="user">Your name:</label>
                <div>
                  <input
                    placeholder="Enter text here"
                    type="text"
                    name="user"
                    id="user"
                    onChange={handleChange}
                    value={values.user}
                    onBlur={handleBlur}
                    className={
                      touched.name && errors.name ? "error field" : "field"
                    }
                  />
                </div>
              </div>
              <div>
                <label htmlFor="title">Review title:</label>
                <div>
                  <input
                    placeholder="Enter text here"
                    type="text"
                    name="title"
                    id="title"
                    onChange={handleChange}
                    value={values.title}
                    onBlur={handleBlur}
                    className={
                      touched.title && errors.title ? "error field" : "field"
                    }
                  />
                </div>
              </div>
              <div>
                <label htmlFor="review">Write your review below:</label>
                <div>
                  <textarea
                    rows="6"
                    placeholder="Enter text here"
                    name="review"
                    id="review"
                    onChange={handleChange}
                    value={values.review}
                    onBlur={handleBlur}
                    className={
                      touched.review && errors.review
                        ? "error paragraphBox"
                        : "paragraphBox"
                    }
                  />
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <button
                style={{ marginRight: ".5rem" }}
                  className="button"
                  onClick={e => {
                    e.preventDefault();
                    props.setModal(!props.modal);
                  }}
                >
                  Cancel
                </button>
                <button
                style={{ marginLeft: ".5rem" }}
                  className="button"
                  id="actionButton"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default NewReview;
