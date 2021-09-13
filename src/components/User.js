import React from 'react';
import '../styles/user.css'

const User = (props) => {
    const name = props.info.name
    const location = props.info.location
    return (
        <div className='wrapper'>
            <div className='info'>
                <div className='name-photo'>
                    <div className='name-wrap'>
                        <div className='img'>
                            <img src={props.info.picture !== undefined ? props.info.picture.large : ''} alt='photo'/>
                        </div>
                        <div className='name'>
                            {name !== undefined ? name.title + ' ' + name.first + ' ' + name.last : ''}
                        </div>
                    </div>
                </div>
                <div className='information'>
                    <div className='location-wrap'>
                        <h2>Location</h2>
                        <hr/>
                        <div className='location main'>
                            <div className='city item'>
                                <h3>City</h3>
                                {location !== undefined ? location.city : ''}
                            </div>
                            <div className='state item'>
                                <h3>State</h3>

                                {location !== undefined ? location.state : ''}
                            </div>
                            <div className='street item'>
                                <h3>Street</h3>

                                {location !== undefined ? location.street.number + ' ' + location.street.name : ''}
                            </div>
                            <div className='postcode item'>
                                <h3>Postcode</h3>

                                {location !== undefined ? location.postcode : ''}
                            </div>
                        </div>
                    </div>
                    <div className='personal-info-wrap'>
                        <h2>Information</h2>
                        <hr/>
                        <div className='personal-info main'>
                            <div className='email'>
                                <h3>Email</h3>
                                {location !== undefined ? props.info.email : ''}
                            </div>
                            <div className='age'>
                                <h3>Age</h3>
                                {location !== undefined ? props.info.dob.age : ''}
                            </div>
                            <div className='phone'>
                                <h3>Phone</h3>
                                {location !== undefined ? props.info.phone : ''}
                            </div>
                            <div className="registered">
                                <h3>Registration date</h3>
                                {location !== undefined ? props.info.registered.date.slice(0, 10) : ''}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default User;