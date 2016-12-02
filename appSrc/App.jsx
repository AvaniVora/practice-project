var React = require('react');

module.exports = React.createClass({
   render() {
      return (
         <div>
            <Txt/>
         </div>
      );
   }
});

var Txt = React.createClass({
	render:function(){
		return(
			<div class="page-header">
			<center><h>WelcomePage</h></center>
		</div>
		)
	}
});
