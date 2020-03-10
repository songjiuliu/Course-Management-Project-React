import React from "react";

class HeadingWidget extends React.Component {
    state = {
        widget: this.props.widget
    }

    render() {
        return (
            <div>
                <h3>Heading Widget</h3>
                {
                    this.props.editing &&
                    <div>
                        <input
                            class="form-control"
                            onChange={(e) => {
                                const newTitle = e.target.value;
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        title: newTitle
                                    }
                                }))
                            }
                            }
                            value={this.state.widget.title}/>
                        <select
                            class="custom-select"
                            onChange={(e) => {
                                const newType = e.target.value
                                console.log(e.target.value)
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        type: newType
                                    }
                                }))
                            }}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
                        </select>

                        <select
                            class="custom-select"
                            onChange={(e) => {
                                const newSize = parseInt(e.target.value)
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        size: newSize
                                    }
                                }))
                            }}
                            value={this.state.widget.size}>
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>

                        <button type="button" class="btn btn-outline-secondary" onClick={() => {
                            this.props.save(this.state.widget)
                        }}>
                            ok
                        </button>
                    </div>
                }
                {

                    <div>
                        <h2>Preview</h2>
                        {this.state.widget.size === 1 && <h1>{this.state.widget.title}</h1>}
                        {this.state.widget.size === 2 && <h2>{this.state.widget.title}</h2>}
                        {this.state.widget.size === 3 && <h3>{this.state.widget.title}</h3>}
                        {this.state.widget.size === 4 && <h4>{this.state.widget.title}</h4>}
                        {this.state.widget.size === 5 && <h5>{this.state.widget.title}</h5>}
                        {this.state.widget.size === 6 && <h6>{this.state.widget.title}</h6>}
                    </div>
                }
            </div>
        )
    }
}

export default HeadingWidget