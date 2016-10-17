/**
 * Created by Chen on 2016/1/13.
 */
$(document).ready(function(){
    var Hello = React.createClass({
        displayName: 'Hello',
        render: function() {
            return React.createElement("div", null, "Hello ", this.props.name);
        }
    });

    ReactDOM.render(
        React.createElement(Hello, {name: "World without JSX"}),
        document.getElementById('container_without_JSX')
    );
})
