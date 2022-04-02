import React from "react";

const ContactUserNew = ({isOwnerNew, editContactNew,
                        users:{fullName,aboutMe,LookingForAJobDescription,
                            contacts,github,vk,facebook,instagram,twitter}}) => (
    <div>
        {isOwnerNew && <button onClick={editContactNew}>EDIT</button>}
        <div>
            <span><b>Name :</b> {fullName}</span>
        </div>
        <div>
            <span><b>About Me :</b> {aboutMe}</span>
        </div>
        <div>
            <span><b>LookingForAJobDescription :</b> {LookingForAJobDescription}</span>
        </div>
        <div>
            <span><b>Contacts :</b> {contacts}</span>
        </div>
        {/*<div>*/}
        {/*    <div><b>Contacts:</b> {Object.keys(props.users.contacts).map(key => {*/}
        {/*         return  <Contacts key={key} contactTitle={key} contactValue={props.users.contacts[key]} />*/}
        {/*    })}</div>*/}
        {/*</div>*/}
        <div>
            <span>github: {github}</span>
        </div>
        <div>
            <span>VK: {vk}</span>
        </div>
        <div>
            <span>Facebook: {facebook}</span>
        </div>
        <div>
            <span>Instagram: {instagram}</span>
        </div>
        <div>
            <span>Twitter: {twitter}</span>
        </div>

    </div>
)

export default ContactUserNew