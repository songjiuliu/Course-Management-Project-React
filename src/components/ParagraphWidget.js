import React from "react";


class ParagraphWidget extends React.Component {
    state = {
        widget: this.props.widget
    }

    render() {
        return (
            <div>
                <h3>Paragraph Widget</h3>
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
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        type: newType
                                    }
                                }))
                            }}
                            value={this.state.widget.size}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                        </select>
                        <textarea class="form-control"
                            value={this.state.widget.text}
                                  onChange={(e) => {
                            const newText = e.target.value
                            this.setState(prevState => ({
                                widget: {
                                    ...prevState.widget,
                                    text: newText
                                }
                            }))
                        }}></textarea>
                        <button type="button" class="btn btn-outline-secondary" onClick={() => {
                            this.props.save(this.state.widget)
                        }}>
                            SAVE
                        </button>
                    </div>
                }
                {
                    <div>
                        <h2>Preview</h2>
                        <p>{this.props.widget.text}</p>
                    </div>
                }
            </div>)
    }
}
export default ParagraphWidget