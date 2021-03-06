
  class Container extends React.Component {
      constructor(props) {
          super(props);
          this.state = { isMusicPlaying: false };
      }
    handleClick() {
        (this.state.isMusicPlaying)? 
        this.audio.pause()
       :this.audio.play()
        
        this.setState(prevState => {
            return {
                isMusicPlaying: !prevState.isMusicPlaying
            };
        });
     };
  
    render() {
        const status = this.state.isMusicPlaying ? 'Playing' : 'Not playing :(';
        return (
          <div>
            <PlayButton
              onClick={this.handleClick.bind(this)}
              isMusicPlaying={this.state.isMusicPlaying}
            />
            <audio
              id="audio"
              ref={(audioTag) => {
                this.audio = audioTag;
              }}
            />

            <h1>{status}</h1>
          </div>
        );
    }
}
   function PlayButton(props) {
     const className = props.isMusicPlaying ? "play active" : "play";
     return (
       <a
         onClick={props.onClick}
         href="#"
         title="Play video"
         className={className}
       />
     );
   }
  const placeWeWantToPutComponent = document.getElementById('hook');
  ReactDOM.render(<Container />, placeWeWantToPutComponent);