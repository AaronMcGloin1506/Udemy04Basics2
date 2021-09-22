import React from 'react';


const UserHoc = (WrappedContent,WrappedContent2, arg1) => {

    
    return (props) => (
        <>
            {arg1}
            <WrappedContent {...props} />
            <WrappedContent2 {...props} />
        </>
    )
}

export default UserHoc;