import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    renderingTags() {
        if (this.state.tags.length === 0)
            return <p>There is no tags!</p>
        else
            return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.handleIncrement(product)}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                {this.renderingTags()}

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;