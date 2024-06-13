import React from 'react';


const ProfileComponent = () => {
    console.log('ProfileComponent');
    return (
        <div className="profile-page">
            <div className="cover-photo">
                <img src="https://via.placeholder.com/800x200" alt="Cover" />
            </div>
            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-picture">
                        <img src="https://via.placeholder.com/150" alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <h1>John Doe</h1>
                        <p>Email: john.doe@example.com</p>
                        <p>Location: San Francisco, CA</p>
                    </div>
                </div>
                <div className="profile-body">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
                </div>
                <div className="profile-footer">
                    <button className="edit-button">Edit Profile</button>
                    <div className="social-media">
                       {/* social media icon */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
