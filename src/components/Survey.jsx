import { useState } from "react";
import CheckboxComponent from "./CheckboxComponent";
import RadioButtonComponent from "./RadioButtonComponent";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  

  const initialFormData =  {
    color: "",
    timeSpent: [],
    comment: "",
    username: "",
    email: "",
  }
  const [formData, setFormData] = useState(initialFormData);
  const [answers, setAnswers] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAnswer = {
      username: formData.username,
      color: formData.color,
      timeSpent: formData.timeSpent,
      comment: formData.comment,
    }

    setAnswers([ ...answers, newAnswer])
    

    setFormData(initialFormData)
    
  }

  const handleChange = (event) => {
    const { name, type, checked } = event.target;

    if(type === "checkbox") {
      setFormData({ ...formData, [checked]: event.target.checked })
      
      if(checked){
        formData.timeSpent.push(event.target.value)
      }
      else formData.timeSpent.splice(formData.timeSpent.indexOf(event.target.value), 1)

      setFormData({ ...formData, [name]: formData.timeSpent})

    } else {
      setFormData({ ...formData, [name]: event.target.value});
    }

  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
      <AnswersList answersList={answers}/>
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio" >
            <h3>How do you rate your rubber duck colour?</h3>
            <RadioButtonComponent onChange={handleChange} data={formData}/>
          </div>
          <div className="form__group" >
            <h3>How do you like to spend time with your rubber duck</h3>
            <CheckboxComponent onChange={handleChange} data={formData}/>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="comment" onChange={handleChange} cols="30" rows="10" value={formData.comment}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" onChange={handleChange} value={formData.username}/>
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" onChange={handleChange} value={formData.email} />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
