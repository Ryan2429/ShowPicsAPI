import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }


    render() {
        return (
            <div className='ui segment' style={{background: 'gray'}}>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label style={{color: 'white'}}>Image Search</label>
                        <input
                        style={{background: '#989898', color: 'white'}} 
                        type='text' 
                        value={this.state.term} 
                        onChange={(event) => this.setState({ term: event.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;