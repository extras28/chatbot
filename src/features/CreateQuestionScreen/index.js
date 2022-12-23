import React from 'react';
import PropTypes from 'prop-types';
import HeaderLandingPage from 'general/components/HeaderLandingPage';
import FooterDashboard from 'general/components/Footer';
import AppButton from 'general/components/AppButton';
import "./style.scss";


CreateQuestionScreen.propTypes = {

};

function CreateQuestionScreen(props) {
    return (
        <div>
            <HeaderLandingPage />
            <div className='create-question'>
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

            </div>
            <FooterDashboard />
        </div>
    );
}

export default CreateQuestionScreen;