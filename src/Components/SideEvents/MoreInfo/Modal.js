// import { colors } from '@material-ui/core';
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';
import Font from '../../../Assets/Fonts/PTSans-Bold.ttf'
import ThemeButton from '../../Button/button';

const customStyles = {

    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        overflow: 'auto',
    },

    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        fontFamily: { Font },
        transform: 'translate(-50%, -50%)',
        background: 'rgb(0,0,0,0.2)',
        border: 'none',
        color: 'aqua',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        maxWidth: '90%',
        maxHeight: '80vh',
    }
};

const titleStyle = {
    width: '100%',
    textAlign: 'left',
    marginTop: '10px',
    fontWeight: '600'
}

const infoStyle = {
    width: '100%',
    textAlign: 'left',
    color: 'white',
    fontWeight: '400',
    borderTop: '1px solid aqua',
    paddingTop: '5px',
}

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
    outline: "none",
    minWidth: "150px",
    transition: 'ease 1s',

    "&:hover": {
        transform: 'scale(1.1)',
    },
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("body")

const RegisterModal = (props) => {
    // var subtitle;

    const [currentInfo, setCurrentInfo] = useState('rules');

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    const toggleInfo = (e) => {
        setCurrentInfo(e.target.id)
    }

    return (
        <div className='register-modal' id='react-modal'>

            <Modal
                isOpen={props.showInfo}
                onAfterOpen={afterOpenModal}
                onRequestClose={props.closeInfo}
                style={customStyles}
            >

                {/* <h2 style={titleStyle} > MoreInfo </h2>

                <div style={tabStyles} className='row text-light'>
                    <div style={tabButStyles} className='col-6' id='overview' onClick={ toggleInfo } >OverView</div>
                    <div style={tabButStyles} className='col-6' id='rules' onClick={ toggleInfo } >Rules</div>
                </div>

                <div className='row'>
                    { currentInfo ==='overview' ? <div className='info'> {props.info} </div> : null}
                    { currentInfo ==='rules' ? <div className='info'> {props.info} </div> : null}
                </div> */}

                {
                    props.info.rules
                        ?
                        <>
                            <h2 style={titleStyle}> Rules </h2>
                            <div style={infoStyle}> {props.info.rules.map(eve => <p> {eve} </p>)} </div>
                        </>
                        :
                        null
                }

                <h2 style={titleStyle}> Prizes </h2>
                <div style={infoStyle}> {props.info.prizes} </div>

                <h2 style={titleStyle}> Benefits </h2>
                <div style={infoStyle}> {props.info.benefits} </div>

                {
                    props.info.contact
                    ?
                    <>
                    <h2 style={titleStyle}> Contact </h2>
                    <div style={infoStyle}> {props.info.contact.map(contact => <p> {contact} </p>)} </div>
                    </>
                    :
                    null
                }

                <button style={buttonStyle} onClick={props.closeInfo}>Close</button>

            </Modal>

        </div>
    );
}

export default RegisterModal;