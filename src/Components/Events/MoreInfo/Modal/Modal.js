import { colors } from '@material-ui/core';
import React from 'react';
import Modal from 'react-modal';
import './Modal.css';
import Font from '../../../../Assets/Fonts/PTSans-Bold.ttf'
import ThemeButton from '../../../Button/button';
import Recaptcha from 'react-recaptcha';

const customStyles = {

    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        overflow: 'hidden',
        marginRight: '-50%',
        fontFamily: { Font },
        transform: 'translate(-50%, -50%)',
        background: 'rgba(255,255,255,0.1)',
        border: 'none',
        color: 'aqua',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
    }
};

const buttonStyle = {
    color: 'aqua',
    border: 'none',
    fontSize: '20px',
    background: 'black',
    border: '1px solid aqua',
    borderRadius: '30px',
    padding: '10px',
    paddingBlock: '5px',
    fontFamily: { Font },

    "&:focus": {
        outline: 'none',
    },

    "&:hover": {
        transform: 'scale(1.1)',
    },
}

const buttonGroup = {
    marginBlock: '20px',
    color: 'blue',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#Xenia')

const RegisterModal = (props) => {
    var subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    const recaptchaLoaded = () => {
        console.log("recaptch loaded")
    }

    return (
        <div className='register-modal'>

            <Modal
                isOpen={props.showModal}
                onAfterOpen={afterOpenModal}
                onRequestClose={props.closeModal}
                style={customStyles}
            >

                <h2 ref={_subtitle => (subtitle = _subtitle)}>Confirm Registration</h2>

                <Recaptcha
                    sitekey="xxxxxxxxxxxxxxxxxxxx"
                    render="explicit"
                    onloadCallback={recaptchaLoaded}
                />

                <div className='button-group' style={buttonGroup}>

                    {
                        props.load
                            ?
                            <div class="spinner-border text-info aqua" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            :
                            <>
                                <ThemeButton onClick={props.closeModal} value='Cancel'></ThemeButton>
                                <ThemeButton onClick={props.handleRegister} value='Register'></ThemeButton>
                            </>
                    }

                </div>

            </Modal>

        </div>
    );
}

export default RegisterModal;