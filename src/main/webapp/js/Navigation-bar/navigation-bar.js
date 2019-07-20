'use strict';

const e = React.createElement;

class NavigationBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      hits: '',
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true});
    fetch('/login-status')
      .then((response) => {
        return response.json();
      })
      .then((loginStatus) => {
        if (loginStatus.isLoggedIn) {
            this.setState({ hits: '/logout', isLoading: false });
          }
        else {
          this.setState({ hits: '/login', isLoading: false});
        }
      });
  }

  handleLabel() {
    if(this.state.hits === "/login")
    {
      return "Login";
    }

    return "Logout";
  }
  render() {

    if (this.state.isLoading) {
      return <p> </p>;
    }
    
    return (
      <nav>
      <ul id="navigation">
        <li><a className="nav-link" href="/">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 512 512" className= "svgClass">
<g>
	<g>
		<path d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064
			c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57
			c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"/>
	</g>
</g>
<g>
	<g>
		<path d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52
			s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053
			c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89
			c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024
			c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847
			C455.549,238.499,449.593,232.543,442.246,232.543z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</a>
</li>

<li>
  <a href={this.state.hits}>{this.handleLabel()}
  </a>
</li>
      </ul>
    </nav>
    );
  }
}

const domContainer = document.querySelector('#navigation-bar');
ReactDOM.render(e(NavigationBar), domContainer);
