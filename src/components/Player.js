import React, {PureComponent} from 'react';
import Counter from './Counter';
import IsHighestScore from './IsHighestScore';

class Player extends PureComponent {
    
    render() {
        const {name, score, id, key, index
            ,changeScore, removePlayer} = this.props; // Destructuring
        return (
            <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        <IsHighestScore isHighScore={this.props.isHighScore}/>
          { name }
      </span>

                <Counter
                    score={score}
                    index={index}
                    changeScore={changeScore}
                />
            </div>
        )
    }
}

export default Player;