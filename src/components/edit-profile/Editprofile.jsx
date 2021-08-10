import React from 'react'
import './editprofile.css'

const EditProfile = () => {
    return (
        <div>
            <div className="edit-profile-wrapper">
                <h2 className="edit-profile-title" >Manage Profile</h2>
                <div className="edit-profile-form">
                    <form onsubmit="event.preventDefault();" autocomplete="off">
                        <div className='edit-profile-name'>
                            <label> First Name</label><br />
                            <input  type="text" name="Firstname" placeholder=" Tunde"/>
                        </div>
                        <div className='edit-profile-name'>
                            <label> Last Name</label><br />
                            <input type="text" name="Lastname" placeholder=" Taiwo"/>
                        </div>
                        <div className='edit-profile-name'>
                            <label> Email </label><br />
                            <input type="email" name="email" placeholder=" mykelmatics@gmail.com" disabled/>
                        </div>
                        <div className="edit-profile-button">
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>

            </div>


            
        </div>
    )
}

export default EditProfile
