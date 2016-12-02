import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Txt/>
         </div>
      );
   }
}
var Txt = React.createClass({
	render:function(){
		return(
			<div class="page-header">
			<center><h>WelcomePage</h></center>
		</div>
		)
	}
})

export default App;