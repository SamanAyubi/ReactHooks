import React from 'react';
import {Header} from 'semantic-ui-react';


function MainHeader({Title, type="h1"}) {
    return <Header as={type}>{Title}</Header>
}
 
export default MainHeader;