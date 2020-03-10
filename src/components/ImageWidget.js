import React from "react";

class ImageWidget extends React.Component {
    state = {
        widget: this.props.widget
    }

    render() {
        return (
            <div>
                <h3>Image Widget</h3>
                {
                    this.props.editing &&
                    <div>
                        <input
                        className="form-control"
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
                        <input
                            className="form-control"
                            onChange={(e) => {
                                const newText = e.target.value;
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        text: newText
                                    }
                                }))
                            }
                            }
                            value={this.state.widget.text}/>
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
                            }}
                            value={this.state.widget.type} >

                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
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
                        <h3>{this.state.widget.title}</h3>
                        {
                            <img src={this.state.widget.text} />
                        }
                    </div>
                }
            </div>
        )
    }
}

export default ImageWidget