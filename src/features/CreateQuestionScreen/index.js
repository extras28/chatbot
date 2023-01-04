import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import HeaderLandingPage from "general/components/HeaderLandingPage";
import FooterDashboard from "general/components/Footer";
import AppButton from "general/components/AppButton";
import MDEditor from "@uiw/react-md-editor";
import "./style.scss";

CreateQuestionScreen.propTypes = {};
const mkdStr = ``;

function CreateQuestionScreen(props) {
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }
  const [value, setValue] = React.useState(mkdStr);
  return (
    <div>
      <HeaderLandingPage />

      <div className="bg-light">
        <div className="create-question container pt-5">
          <p className="fs-2 fw-bold mt-5">Ask a public question</p>
          <div className="help p-5 border border-primary">
            <p className="fs-3">Writing a good question</p>
            <p className="fs-5">
              You’re ready to ask a programming-related question and this form
              will help guide you through the process. Looking to ask a
              non-programming question? See the topics here to find a relevant
              site.
            </p>
            <p className="fw-normal">Step</p>
            <ul className="fw-normal">
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>
                Add “tags” which help surface your question to members of the
                community.
              </li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </div>
          <div className="Title p-5 mt-5 border border-2 border-secondary bg-white">
            <p className="fs-5 fw-bold">Title</p>
            <p className="fs-6">
              Be specific and imagine you’re asking a question to another
              person.
            </p>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              ></input>
            </div>
          </div>
          <div className="problem p-5 mt-5 border border-2 border-secondary bg-white">
            <p className="fs-5 fw-bold">
              What are the details of your problem?
            </p>
            <p className="fs-6">
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
            <MDEditor height={300} value={value} onChange={setValue} />
            <AppButton className="btn-question mt-4 py-2 px-7">Next</AppButton>
          </div>
          <div className="problem p-5 mt-5 border border-2 border-secondary bg-white">
            <p className="fs-5 fw-bold">
              What did you try and what were you expecting?
            </p>
            <p className="fs-6">
              Describe what you tried, what you expected to happen, and what
              actually resulted. Minimum 20 characters.
            </p>
            <MDEditor height={300} value={value} onChange={setValue} />
            <AppButton className="btn-question mt-4 py-2 px-7">Next</AppButton>
          </div>
          <div className="tag p-5 mt-5 border border-2 border-secondary bg-white">
            <p className="fs-5 fw-bold">Tags</p>
            <p className="fs-6">
              Add up to 5 tags to describe what your question is about. Start
              typing to see suggestions.
            </p>
            <div className="input-group">
              {tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                  <span className="text">{tag}</span>
                  <span className="close" onClick={() => removeTag(index)}>
                    &times;
                  </span>
                </div>
              ))}
              <input
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onKeyDown={handleKeyDown}
                type="text"
                className="tags-input"
                placeholder="e.g. (dotnet-core)"
              />
            </div>
            <AppButton className="btn-question mt-4 py-2 px-7">Next</AppButton>
          </div>
          <div className="publish p-5 mt-4">
            <AppButton className="btn-question py-2 px-7">
              <i className="button-icon far fa-paper-plane mx-1"></i>Publish
            </AppButton>
            <a href="" className="text-danger my-2 mx-2">
              Discard Draft
            </a>
          </div>
        </div>
      </div>

      {/* <div className='create-question container'>
                <div className='question-input'>
                    <select name="select-categories" 
                        id="input--categories" 
                        className='create-question-input'
                        placeholder='Choose categories'
                    >
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="java">Java</option>
                        <option value="golang">Golang</option>
                        <option value="python">Python</option>
                        <option value="c#">C#</option>
                        <option value="C++">C++</option>
                        <option value="erlang">Erlang</option>
                    </select>

                    <input className='create-question-input'
                        id='input--title'
                        placeholder='Type catching attention title'
                    >
                    </input>
                    <textarea className='create-question-input'
                        id='input--question'
                        placeholder='Type your question'
                    >
                    </textarea>
                </div>
                <div className='question-button'>
                    <label for="question-add-image" className='add-image-label'>
                        <i className="button-icon fas fa-image"></i>
                        Add image
                    </label>
                    <input type="file" name="photo" id="question-add-image" />

                    <div className='right'>
                        <AppButton
                            type='file' 
                            className='btn-question py-2 px-7'
                        >
                            Save as draft
                        </AppButton>
                        <AppButton
                            type='file' 
                            className='ButtonPrimary py-2 px-7'
                        >
                            <i className="button-icon far fa-paper-plane"></i>
                            Publish
                        </AppButton>
                    </div>
                    
                </div>

            </div> */}
      <FooterDashboard />
    </div>
  );
}

export default CreateQuestionScreen;
