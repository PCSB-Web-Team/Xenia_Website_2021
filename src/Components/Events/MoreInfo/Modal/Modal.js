// import { colors } from '@material-ui/core';
import React from 'react';
import Modal from 'react-modal';
import './Modal.css';
import Font from '../../../../Assets/Fonts/PTSans-Bold.ttf'
import ThemeButton from '../../../Button/button';

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
        maxWidth: '90%',
    }
};

const titleStyle = {
    marginBottom: '10px',
}

// const inputStyle = {
//     display: 'inline-block',
//     background: 'black',
//     color: 'white',
//     outline: 'none',
//     border: 'none',
//     borderBottom: '1px solid aqua',
//     width: "90%",
//     height: '40px',
//     borderRadius: '20px',
//     paddingInline: '10px',
//     marginBlock: '4px',
// }


const buttonGroup = {
    marginBlock: '20px',
    color: 'blue',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
}

// const buttonStyle = {
//     color: 'aqua',
//     border: 'none',
//     fontSize: '20px',
//     background: 'black',
//     border: '1px solid aqua',
//     borderRadius: '30px',
//     padding: '10px',
//     paddingBlock: '5px',
//     fontFamily: { Font },

//     "&:focus": {
//         outline: 'none',
//     },

//     "&:hover": {
//         transform: 'scale(1.1)',
//     },
// }


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("body")

const RegisterModal = (props) => {
    // var subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    return (
        <div className='register-modal' id='react-modal'>

            <Modal
                isOpen={props.showModal}
                onAfterOpen={afterOpenModal}
                onRequestClose={props.closeModal}
                style={customStyles}
            >

                <h2 style={titleStyle} > Confirm Registration </h2>

{/* 
                <input placeholder='Participant 1' style={inputStyle} type='text'></input>
                <input placeholder='Participant 2' style={inputStyle} type='text'></input>
                <input placeholder='Participant 3' style={inputStyle} type='text'></input>
                <input placeholder='Participant 4' style={inputStyle} type='text'></input>
                <input placeholder='Participant 5' style={inputStyle} type='text'></input> 
*/}

                <div className='button-group' style={buttonGroup}>

                    {
                        props.load
                            ?
                            <div className="spinner-border text-info aqua" role="status">
                                <span className="sr-only">Loading...</span>
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