/**
 * Created by Chen on 2016/1/13.
 */
$(document).ready(function(){
    var Hello = React.createClass({
        render: function() {
            return <div>Hello {this.props.name}</div>;
        }
    });

    ReactDOM.render(
        <Hello name="World with JSX" />,
        document.getElementById('container_JSX')
    );
})
